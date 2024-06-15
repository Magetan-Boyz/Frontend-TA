import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutSiswa/AuthenticatedLayout';
// import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { Select, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import SecondaryButton from '@/components/SecondaryButton';
import { useRouter } from 'next/router';
import PrimaryButton from '@/components/PrimaryButton';
import { FiSearch } from 'react-icons/fi';

export default function CreateMataPelajaran() {
  const router = useRouter();
  const [tugas] = React.useState([
    {
      id: 1,
      namaMapel: 'Matematika',
      semester: '1',
      kelas: 'X',
      partisipan: '10',
      guru: 'John Doe'
    },
    {
      id: 3,
      namaMapel: 'Matematika',
      semester: '1',
      kelas: 'X',
      partisipan: '10',
      guru: 'John Doe'
    },
    {
      id: 3,
      namaMapel: 'Matematika',
      semester: '1',
      kelas: 'X',
      partisipan: '10',
      guru: 'John Doe'
    }
  ]);

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Home" />
        <div className="w-full p-3 border rounded-md shadow-lg h-fit border-Gray-200 bg-Base-white">
          <div className="flex items-center justify-between p-3 lg:border-b border-Gray-200">
            <h1 className="text-lg font-semibold">Detail Pengumpulan</h1>
            <PrimaryButton btnClassName="w-fit h-fit" onClick={() => router.push('/admin/mata-pelajaran/create')}>
              Tambah Mata Pelajaran
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
            <span className="flex flex-col w-full gap-4">
              <label htmlFor="sort" className="text-sm font-medium text-Gray-700">
                Semester
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
                  <Th>ID</Th>
                  <Th>Nama Mata Pelajaran</Th>
                  <Th>Semester</Th>
                  <Th>Kelas</Th>
                  <Th>Partisipan</Th>
                  <Th>Guru Pengajar</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {tugas.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.id}</Td>
                    <Td>{item.namaMapel}</Td>
                    <Td>{item.semester}</Td>
                    <Td>{item.kelas}</Td>
                    <Td>{item.partisipan}</Td>
                    <Td>{item.guru}</Td>
                    <Td>
                      <SecondaryButton btnClassName="font-semibold w-fit h-fit" onClick={() => router.push(`/materi/literasi/${item.id}`)}>
                        Details
                      </SecondaryButton>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
