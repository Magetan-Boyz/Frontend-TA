import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
import Seo from '@/components/Seo';
import {
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Skeleton,
  useToast
} from '@chakra-ui/react';
import { FiSearch, FiEdit } from 'react-icons/fi';
import { HiDotsVertical } from 'react-icons/hi';
import { useRouter } from 'next/router';
import { MdClose } from 'react-icons/md';
import PrimaryButton from '@/components/PrimaryButton';
import Checkbox from '@/components/Checkbox';
import { PiFlagBannerBold } from 'react-icons/pi';
import SecondaryButton from '@/components/SecondaryButton';
import axios from 'axios';

export default function List() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [checkedItems, setCheckedItems] = React.useState<{ [key: string]: boolean }>({});
  const [checkAll, setCheckAll] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [kuis, setKuis] = React.useState([]);
  const [classes, setClasses] = React.useState([]);
  const [selectedClass, setSelectedClass] = React.useState('');
  const [selectedSubject, setSelectedSubject] = React.useState('');
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const [formData, setFormData] = React.useState({
    judul: '',
    deskripsi: '',
    type: '',
    deadline: ''
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setCheckAll(checked);
    const newCheckedItems = kuis.reduce(
      (acc, item) => {
        acc[item.id] = checked;
        return acc;
      },
      {} as { [key: string]: boolean }
    );
    setCheckedItems(newCheckedItems);
  };

  const handleCheckboxChange = (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setCheckedItems((prevState) => ({ ...prevState, [id]: checked }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    const newQuiz = {
      id: new Date().getTime().toString(),
      title: formData.judul,
      type_of_quiz: formData.type,
      description: formData.deskripsi,
      deadline: `${formData.deadline}T23:59:59Z`,
      questions: []
    };

    const quizzes = JSON.parse(localStorage.getItem('quizzes') || '[]');
    quizzes.push(newQuiz);
    localStorage.setItem('quizzes', JSON.stringify(quizzes));

    toast({
      title: 'Success',
      description: 'Quiz created successfully',
      status: 'success',
      duration: 5000,
      isClosable: true
    });
    onClose();
    setFormData({
      judul: '',
      deskripsi: '',
      type: '',
      deadline: ''
    });

    localStorage.setItem('class_id', selectedClass);
    localStorage.setItem('subject_id', selectedSubject);
    router.push('/guru/kuis/create');
  };

  const handleEdit = (quiz) => {
    router.push({
      pathname: '/guru/kuis/edit',
      query: { id: quiz.id }
    });
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/teacher/quiz/${id}/delete`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        setKuis((prevKuis) => prevKuis.filter((quiz) => quiz.id !== id));
        toast({
          title: 'Success',
          description: 'Quiz deleted successfully',
          status: 'success',
          duration: 5000,
          isClosable: true
        });
      } else {
        console.error('Failed to delete quiz');
        toast({
          title: 'Error',
          description: 'Failed to delete quiz',
          status: 'error',
          duration: 5000,
          isClosable: true
        });
      }
    } catch (error) {
      console.error('Error deleting quiz:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete quiz',
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    }
  };

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/teacher/quiz`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((response) => {
        if (response.data && response.data.data) {
          setKuis(response.data.data);
        } else {
          setKuis([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching quizzes:', error);
        setLoading(false);
      });

    // Fetch class and subject data
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/teacher/class`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((response) => {
        if (response.data && response.data.data) {
          setClasses(response.data.data);
        } else {
          setClasses([]);
        }
      })
      .catch((error) => {
        console.error('Error fetching classes:', error);
      });
  }, []);

  React.useEffect(() => {
    const allChecked = kuis.every((item) => checkedItems[item.id]);
    setCheckAll(allChecked);
  }, [checkedItems, kuis]);

  const handleClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClass(e.target.value);
  };

  const handleSubjectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSubject(e.target.value);
  };

  return (
    <div>
      <AuthenticatedLayout>
        <Seo title="List Kuis" />
        <div className="w-full rounded-md shadow bg-Base-white h-fit">
          <div className="flex flex-col justify-between gap-5 p-5 lg:flex-row lg:items-center">
            <h1 className="font-semibold ">List Kuis</h1>
            <div className="flex items-center justify-between gap-5">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
                  placeholder="Search"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FiSearch />
                </div>
              </div>
              <Select placeholder="Kelas" size="md" className="w-fit" onChange={handleClassChange}>
                {classes.map((cls, index) => (
                  <option key={index} value={cls.class_id}>
                    {cls.class_name}
                  </option>
                ))}
              </Select>
              <Select placeholder="Mata Pelajaran" size="md" className="w-fit" onChange={handleSubjectChange}>
                {classes.map((cls, index) => (
                  <option key={index} value={cls.subject_id}>
                    {cls.subject_name}
                  </option>
                ))}
              </Select>
              <PrimaryButton btnClassName="w-fit text-sm h-fit" onClick={onOpen}>
                Buat Kuis
              </PrimaryButton>
            </div>
          </div>
          <div className="flex gap-3 p-5">
            <Checkbox name="checkall" checkClassName="bg-Gray-100" checked={checkAll} onChange={handleCheckAllChange} />
            <label htmlFor="checkall">Pilih Semua</label>
          </div>
          {loading ? (
            <Skeleton height="40px" my="10px" />
          ) : kuis.length > 0 ? (
            kuis.map((item, index) => (
              <div className="flex items-center justify-between w-full p-5 border-b h-fit bg-Gray-50 border-Gray-200" key={index}>
                <div className="flex gap-3">
                  <Checkbox
                    name={item.id}
                    checkClassName="bg-Gray-100"
                    checked={!!checkedItems[item.id]}
                    onChange={handleCheckboxChange(item.id)}
                  />
                  <label htmlFor={item.id}>{item.title}</label>
                </div>
                <Menu>
                  <MenuButton as={IconButton} icon={<HiDotsVertical className="text-Gray-500" />} variant="ghost" />
                  <MenuList>
                    <MenuItem icon={<FiEdit />} onClick={() => handleEdit(item)}>
                      Edit
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            ))
          ) : (
            <div className="text-center py-5 text-Gray-600">Tidak ada kuis ditemukan</div>
          )}
        </div>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <div className="p-2 rounded-md w-[36px] shadow-md border border-Gray-200 bg-Base-white">
                <PiFlagBannerBold className="rotate-0" />
              </div>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1 className="text-lg font-semibold">Buat Kuis</h1>
              <p className="text-sm font-light text-Gray-600">Sesuaikan dengan mata pelajaran dan topik yang akan dibahas</p>
              <form className="mt-3">
                <label htmlFor="judul" className="text-sm text-Gray-600">
                  Judul
                </label>
                <input
                  type="text"
                  id="judul"
                  name="judul"
                  value={formData.judul}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-2 mb-2 border-2 rounded-md border-Gray-300"
                />
                <label htmlFor="deskripsi" className="text-sm text-Gray-600">
                  Deskripsi
                </label>
                <textarea
                  id="deskripsi"
                  name="deskripsi"
                  value={formData.deskripsi}
                  onChange={handleInputChange}
                  placeholder="cth. Buat artikel mengenai keluarga dalam bahasa inggris..."
                  className="w-full p-2 mt-2 mb-2 border-2 rounded-md border-Gray-300"
                />
                <div className="flex flex-col mt-2 mb-2">
                  <label htmlFor="type" className="text-sm text-Gray-600">
                    Tipe Kuis
                  </label>
                  <Select id="type" name="type" placeholder="Pilih Tipe" size="md" value={formData.type} onChange={handleInputChange}>
                    <option value="Multiple Choice">Pilihan Ganda</option>
                    <option value="Essay">Essay</option>
                  </Select>
                </div>
                <label htmlFor="deadline" className="text-sm text-Gray-600">
                  Set Deadline
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  className="w-full p-2 mt-2 border-2 rounded-md border-Gray-200"
                />
              </form>
            </ModalBody>
            <ModalFooter className="flex justify-center gap-3">
              <SecondaryButton onClick={onClose} btnClassName="font-semibold">
                Batal
              </SecondaryButton>
              <PrimaryButton onClick={handleSubmit} btnClassName="font-semibold">
                Buat Kuis
              </PrimaryButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </AuthenticatedLayout>
    </div>
  );
}
