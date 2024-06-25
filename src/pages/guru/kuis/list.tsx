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
  useDisclosure
} from '@chakra-ui/react';
import { FiSearch, FiEdit, FiTrash2 } from 'react-icons/fi';
import { HiDotsVertical } from 'react-icons/hi';
import { useRouter } from 'next/router';
import { MdClose } from 'react-icons/md';
import PrimaryButton from '@/components/PrimaryButton';
import Checkbox from '@/components/Checkbox';
import { PiFlagBannerBold } from 'react-icons/pi';
import SecondaryButton from '@/components/SecondaryButton';

export default function List() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [checkedItems, setCheckedItems] = React.useState<{ [key: string]: boolean }>({});
  const [checkAll, setCheckAll] = React.useState(false);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const [kuis] = React.useState([
    {
      id: '550e8400-e29b-41d4-a716-446655440000',
      judul: 'Matematika',
      deskripsi: 'Deskripsi Matematika',
      kelas: 'XII',
      deadline: '12-12-2021',
      type: 'Pilihan Ganda'
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440001',
      judul: 'Matematika',
      deskripsi: 'Deskripsi Matematika',
      kelas: 'XII',
      deadline: '12-12-2021',
      type: 'Pilihan Ganda'
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440002',
      judul: 'Matematika',
      deskripsi: 'Deskripsi Matematika',
      kelas: 'XII',
      deadline: '12-12-2021',
      type: 'Pilihan Ganda'
    }
  ]);

  React.useEffect(() => {
    const allChecked = kuis.every((item) => checkedItems[item.id]);
    setCheckAll(allChecked);
  }, [checkedItems, kuis]);

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
              <Select placeholder="Kelas" size="md" className="w-fit">
                <option value="1">X</option>
                <option value="2">XI</option>
                <option value="3">XII</option>
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
          {kuis.map((item, index) => (
            <div className="flex items-center justify-between w-full p-5 border-b h-fit bg-Gray-50 border-Gray-200" key={index}>
              <div className="flex gap-3">
                <Checkbox
                  name={item.id}
                  checkClassName="bg-Gray-100"
                  checked={!!checkedItems[item.id]}
                  onChange={handleCheckboxChange(item.id)}
                />
                <label htmlFor={item.id}>{item.judul}</label>
              </div>
              <Menu>
                <MenuButton as={IconButton} icon={<HiDotsVertical className="text-Gray-500" />} variant="ghost" />
                <MenuList>
                  <MenuItem icon={<FiEdit />}>Edit</MenuItem>
                  <MenuItem icon={<FiTrash2 />}>Delete</MenuItem>
                </MenuList>
              </Menu>
            </div>
          ))}
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
              <form action="" className="mt-3">
                <label htmlFor="judul" className="text-sm text-Gray-600">
                  Judul
                </label>
                <input type="text" id="judul" className="w-full p-2 mt-2 mb-2 border-2 rounded-md border-Gray-300" />
                <label htmlFor="deskripsi" className="text-sm text-Gray-600">
                  Deskripsi
                </label>
                <textarea
                  id="deskripsi"
                  placeholder="cth. Buat artikel mengenai keluarga dalam bahasa inggris..."
                  className="w-full p-2 mt-2 mb-2 border-2 rounded-md border-Gray-300"
                />
                <div className="flex flex-col mt-2 mb-2">
                  <label htmlFor="jenis" className="text-sm text-Gray-600">
                    Tipe Kuis
                  </label>
                  <Select placeholder="Kelas" size="md" name="sort" className="">
                    <option value="1">X</option>
                    <option value="2">XI</option>
                    <option value="3">XII</option>
                  </Select>
                </div>
                <label htmlFor="deadline" className="text-sm text-Gray-600">
                  Set Deadline
                </label>
                <input type="date" id="deadline" className="w-full p-2 mt-2 border-2 rounded-md border-Gray-200" />
                <label htmlFor="judul" className="text-sm text-Gray-600">
                  Judul
                </label>
                <Select placeholder="Kelas" size="md" name="sort" className="">
                  <option value="1">X</option>
                  <option value="2">XI</option>
                  <option value="3">XII</option>
                </Select>
                <div className="flex flex-col py-3 overflow-y-auto h-[200px]">
                  {kuis.map((item, index) => (
                    <div className="flex items-center w-full gap-3 px-8 py-4 border-b justidy-between border-Gray-200" key={index}>
                      <div className="flex items-center w-full gap-3">
                        <div className="">
                          <span className="text-sm font-medium text-Gray-900">{item.kelas}</span>
                        </div>
                      </div>
                      <MdClose className="cursor-pointer text-Gray-500" />
                    </div>
                  ))}
                </div>
              </form>
            </ModalBody>
            <ModalFooter className="flex justify-center gap-3">
              <SecondaryButton onClick={onClose} btnClassName="font-semibold">
                Batal
              </SecondaryButton>
              <PrimaryButton onClick={() => router.push('/guru/kuis/create')} btnClassName="font-semibold">
                Buat Kuis
              </PrimaryButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </AuthenticatedLayout>
    </div>
  );
}
