import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutAdmin/AuthenticatedLayout';
// import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import {
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import SecondaryButton from '@/components/SecondaryButton';
import { useRouter } from 'next/router';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import PrimaryButton from '@/components/PrimaryButton';
import { LuBookOpen } from 'react-icons/lu';
import { MdClose } from 'react-icons/md';

export default function AssignJadwal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const [tugas] = React.useState([
    {
      id: 1,
      namaguru: 'Monica',
      namaMapel: 'Matematika',
      kelas: 'XII'
    },
    {
      id: 3,
      namaguru: 'Monica',
      namaMapel: 'Matematika',
      kelas: 'XII'
    },
    {
      id: 3,
      namaguru: 'Monica',
      namaMapel: 'Matematika',
      kelas: 'XII'
    }
  ]);

  const [kelas] = React.useState([
    {
      id: 1,
      namaKelas: 'X'
    },
    {
      id: 2,
      namaKelas: 'XI'
    },
    {
      id: 3,
      namaKelas: 'XII'
    }
  ]);

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="List guru" />
        <div className="w-full p-3 border rounded-md shadow-lg h-fit border-Gray-200 bg-Base-white">
          <div className="flex items-center justify-between p-3 lg:border-b border-Gray-200">
            <h1 className="text-lg font-semibold">List Akun Guru</h1>
            <PrimaryButton btnClassName="w-fit h-fit" onClick={() => router.push('/admin/mata-pelajaran/create')}>
              Buat Akun
            </PrimaryButton>
          </div>
          <div className="flex flex-col gap-4 py-6 lg:flex-row lg:justify-between lg:px-3">
            <span className="flex flex-col w-full gap-4">
              <label htmlFor="sort" className="text-sm font-medium text-Gray-700">
                Jenis Mata Pelajaran
              </label>
              <Select placeholder="Kelas" size="md" name="sort" className="">
                <option value="1">X</option>
                <option value="2">XI</option>
                <option value="3">XII</option>
              </Select>
            </span>
            <span className="flex flex-col w-full gap-4">
              <label htmlFor="sort" className="text-sm font-medium text-Gray-700">
                Kelas
              </label>
              <Select placeholder="Kelas" size="md" name="sort" className="">
                <option value="1">X</option>
                <option value="2">XI</option>
                <option value="3">XII</option>
              </Select>
            </span>
            <span className="flex flex-col justify-end w-full gap-4">
              <label htmlFor="sort" className="text-sm font-medium text-Gray-700"></label>
              <div className="relative">
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
            </span>
          </div>
          <div className="m-3 border rounded-lg shadow-sm ">
            <Table className="">
              <Thead className="bg-Gray-50">
                <Tr>
                  <Th>Nama Guru</Th>
                  <Th>Mata Pelajaran</Th>
                  <Th>Email</Th>
                  <Th>Password</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {tugas.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.id}</Td>
                    <Td>{item.namaMapel}</Td>
                    <Td className="flex items-center gap-2">
                      <Image
                        src={`https://ui-avatars.com/api/?name=${item.namaguru}`}
                        alt="Logo"
                        width={40}
                        height={24}
                        className="rounded-full"
                      />
                      <div className="">
                        <span className="text-sm font-medium text-Gray-900">{item.namaguru}</span>
                      </div>
                    </Td>
                    <Td>{item.kelas}</Td>
                    <Td>
                      <SecondaryButton btnClassName="font-semibold w-fit h-fit" onClick={onOpen}>
                        Assign Kelas
                      </SecondaryButton>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </div>
        </div>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <div className="p-2 rounded-full w-[36px] bg-Warning-100">
                <LuBookOpen className="rotate-0 text-Warning-600" />
              </div>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1 className="text-lg font-semibold">Assign Guru Pengajar</h1>
              <p className="text-sm font-light text-Gray-600">Pilih dari search atau list dari daftar guru pengajar</p>
              <form action="" className="pb-3 mt-3">
                <div className="flex flex-col gap-3">
                  <label htmlFor="judul" className="text-sm text-Gray-600">
                    Judul
                  </label>
                  <Select placeholder="Kelas" size="md" name="sort" className="">
                    <option value="1">X</option>
                    <option value="2">XI</option>
                    <option value="3">XII</option>
                  </Select>
                </div>
              </form>
              <div className="flex flex-col py-3 overflow-y-auto h-[200px]">
                {kelas.map((item, index) => (
                  <div className="flex items-center w-full gap-3 px-8 py-4 border-b justidy-between border-Gray-200" key={index}>
                    <div className="flex items-center w-full gap-3">
                      <div className="">
                        <span className="text-sm font-medium text-Gray-900">{item.namaKelas}</span>
                      </div>
                    </div>
                    <MdClose className="cursor-pointer text-Gray-500" />
                  </div>
                ))}
              </div>
            </ModalBody>
            <ModalFooter className="flex justify-center gap-3">
              <SecondaryButton onClick={onClose} btnClassName="font-semibold">
                Batal
              </SecondaryButton>
              <PrimaryButton onClick={onClose} btnClassName="font-semibold">
                Konfirmasi
              </PrimaryButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </AuthenticatedLayout>
    </div>
  );
}
