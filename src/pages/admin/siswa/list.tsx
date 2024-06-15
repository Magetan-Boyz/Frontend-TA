import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutAdmin/AuthenticatedLayout';
// import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { Select, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FiSearch } from 'react-icons/fi';
import Image from 'next/image';
import PrimaryButton from '@/components/PrimaryButton';

export default function ListSiswa() {
  const router = useRouter();
  const [tugas] = React.useState([
    {
      id: 1,
      namasiswa: 'Monica',
      kelas: 'XII',
      email: 'monica@email.com',
      password: '123456'
    },
    {
      id: 3,
      namasiswa: 'Monica',
      kelas: 'XII',
      email: 'monica@email.com',
      password: '123456'
    },
    {
      id: 3,
      namasiswa: 'Monica',
      kelas: 'XII',
      email: 'monica@email.com',
      password: '123456'
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
            <h1 className="text-lg font-semibold">List Akun Siswa</h1>
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
                  <Th>Nama Siswa</Th>
                  <Th>Kelas</Th>
                  <Th>Email</Th>
                  <Th>Password</Th>
                </Tr>
              </Thead>
              <Tbody>
                {tugas.map((item, index) => (
                  <Tr key={index}>
                    <Td className="flex items-center gap-2">
                      <Image
                        src={`https://ui-avatars.com/api/?name=${item.namasiswa}`}
                        alt="Logo"
                        width={40}
                        height={24}
                        className="rounded-full"
                      />
                      <div className="">
                        <span className="text-sm font-medium text-Gray-900">{item.namasiswa}</span>
                      </div>
                    </Td>
                    <Td>{item.kelas}</Td>
                    <Td>{item.email}</Td>
                    <Td>{item.password}</Td>
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
