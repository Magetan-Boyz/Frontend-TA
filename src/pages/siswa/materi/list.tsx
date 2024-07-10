import * as React from 'react';
import {
  Button,
  Select,
  Text,
  Tag,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Spinner
} from '@chakra-ui/react';
import { PiFlagBannerBold } from 'react-icons/pi';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import { MdAdd } from 'react-icons/md';
import AuthenticatedLayout from '@/components/layout/layoutSiswa/AuthenticatedLayout';
import Seo from '@/components/Seo';
import axios from 'axios';
import { MdOutlineAddBox, MdKeyboardArrowDown } from 'react-icons/md';
import { useRouter } from 'next/router';

type Item = {
  id: string;
  content: string;
  created_at: string; // Assuming the API provides a created_at field
  sub?: { id: string; title: string }[];
};

const Susun = () => {
  const [items, setItems] = React.useState<Item[]>([]);
  const [subjects, setSubjects] = React.useState([]);
  const [selectedSubject, setSelectedSubject] = React.useState('');
  const [winReady, setWinReady] = React.useState(false);
  const [expanded, setExpanded] = React.useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newItemContent, setNewItemContent] = React.useState<string>('');
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    setWinReady(true);
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/student/class/subjects`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSubjects(response.data.data || []);
    } catch (error) {
      console.error('Error fetching subjects:', error);
    }
  };

  const handleSubjectChange = async (e) => {
    const selectedSubject = e.target.value;
    setSelectedSubject(selectedSubject);
    if (selectedSubject) {
      fetchMatters(selectedSubject);
    }
  };

  const fetchMatters = async (subjectId) => {
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/student/subject/${subjectId}/matter`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = response.data.data.map((matter) => ({
        id: matter.id,
        content: matter.title,
        created_at: matter.created_at, // Assuming the API provides a created_at field
        sub: matter.content.map((subContent) => ({
          id: subContent.id,
          title: subContent.title
        }))
      }));
      setItems(data);
    } catch (error) {
      console.error('Error fetching matters:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  const addItem = () => {
    const newItem: Item = {
      id: (Math.random() * 100000).toString(),
      content: newItemContent,
      created_at: new Date().toISOString()
    };
    setItems([...items, newItem]);
    onClose();
  };

  const handleSortChange = (e) => {
    const sortOrder = e.target.value;
    const sortedItems = [...items].sort((a, b) => {
      if (sortOrder === 'newest') {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      } else {
        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      }
    });
    setItems(sortedItems);
  };

  const handleSubItemClick = (matterId) => {
    router.push({
      pathname: `/siswa/materi/${matterId}`,
      query: { matterId }
    });
  };

  return (
    <AuthenticatedLayout>
      <Seo templateTitle="Susunan Materi" />
      <div className="flex items-center justify-between w-full gap-4 p-5 rounded-md h-fit bg-Base-white">
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <Select placeholder="Pilih Mata Pelajaran" size="md" onChange={handleSubjectChange}>
            {subjects.map((subject) => (
              <option key={subject.subject_id} value={subject.subject_id}>
                {subject.subject_name}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div className="pb-5 mt-5 rounded-md bg-Base-white">
        <div className="flex justify-between p-5 mb-4">
          <Text fontSize="lg" fontWeight="bold">
            Susunan Materi
          </Text>
          <div>
            <Select placeholder="Sort" size="md" onChange={handleSortChange}>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </Select>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-6">
            <Spinner size="xl" />
          </div>
        ) : (
          winReady && (
            <div>
              {items.map(({ id, content, sub }) => (
                <div key={id} className="mb-4">
                  <div className="flex items-center justify-between p-3 cursor-pointer bg-Gray-100" onClick={() => toggleExpand(id)}>
                    <div className="flex items-center gap-5">
                      <Tag colorScheme="blue" borderRadius="full" border={1} size="sm">
                        {id.slice(0, 4)}
                      </Tag>
                      <h1 className="font-bold text-md">{content}</h1>
                    </div>
                    <div className="flex items-center gap-5">
                      <MdKeyboardArrowDown className={`text-xl ${expanded === id ? 'transform rotate-180' : ''}`} />
                    </div>
                  </div>
                  {expanded === id && (
                    <>
                      {sub?.map((subItem, subIndex) => (
                        <button key={subItem.id} className="p-5 border-b w-full border-Gray-200" onClick={() => handleSubItemClick(id)}>
                          <h1 className="font-bold text-md cursor-pointer">{subItem.title}</h1>
                        </button>
                      ))}
                    </>
                  )}
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </AuthenticatedLayout>
  );
};

export default Susun;
