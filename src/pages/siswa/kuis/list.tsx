import Seo from '@/components/Seo';
import AuthenticatedLayout from '@/components/layout/layoutSiswa/AuthenticatedLayout';
import * as React from 'react';
import {
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import { LuBookOpen } from 'react-icons/lu';
import { useRouter } from 'next/router';

export default function list() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const router = useRouter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

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
  return (
    <div>
      <AuthenticatedLayout>
        <Seo title="List Kuis" />
        <div className="w-full pb-5 rounded-md shadow bg-Base-white h-fit">
          <div className="flex flex-col justify-between gap-5 p-5 lg:flex-row lg:items-center">
            <h1 className="font-semibold ">List Kuis</h1>
            <div className="flex justify-between gap-5">
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
            </div>
          </div>
          {kuis.map((item, index) => (
            <div className="flex items-center justify-between w-full p-5 border-b h-fit bg-Gray-50 border-Gray-200" key={index}>
              <div className="flex flex-col gap-3">
                <h1 className="font-semibold text-md text-Gray-900">{item.judul}</h1>
                <p className="text-sm font-medium text-Gray-600">{item.deskripsi}</p>
                <span className="flex gap-3 text-xs font-medium text-Gray-500">
                  <h1>Deadline : {item.deadline}</h1>
                  <h1>Tipe Kuis : {item.type}</h1>
                  <h1>Kelas : {item.kelas}</h1>
                </span>
              </div>
              <PrimaryButton btnClassName="w-fit h-fit" onClick={onOpen}>
                Kerjakan
              </PrimaryButton>
              <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay backdropBlur="10px" />
                <ModalContent>
                  <ModalHeader className="mt-3">
                    <div className="p-2 w-[36px] rounded-full bg-Warning-100">
                      <LuBookOpen className="text-Warning-600" />
                    </div>
                  </ModalHeader>
                  <ModalCloseButton className="mt-4" />
                  <ModalBody>
                    <h1 className="text-lg font-semibold">Mulai Kuis</h1>
                    <p className="text-sm">Apakah kamu ingin memulai kuis?</p>
                  </ModalBody>

                  <ModalFooter className="flex justify-center gap-3">
                    <SecondaryButton onClick={onClose} btnClassName="font-semibold">
                      Batal
                    </SecondaryButton>
                    <PrimaryButton onClick={() => router.push(`/siswa/kuis/${item.id}`)} btnClassName="font-semibold">
                      Konfirmasi
                    </PrimaryButton>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </div>
          ))}
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
