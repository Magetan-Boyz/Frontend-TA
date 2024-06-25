import Seo from '@/components/Seo';
import AuthenticatedLayout from '@/components/layout/layoutSiswa/AuthenticatedLayout';
import * as React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Table, Thead, Tr, Th, Tbody, Td, TableContainer, Tag, TagLabel, Select } from '@chakra-ui/react';
import Checkbox from '@/components/Checkbox';
import Image from 'next/image';

export default function hasil() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const [hasil] = React.useState([
    {
      id: 1,
      nama: 'Firman',
      email: 'firman@gmail.com',
      totalpoint: '80',
      status: 'Lulus'
    },
    {
      id: 2,
      nama: 'Firman',
      email: 'firman@gmail.com',
      totalpoint: '80',
      status: 'Lulus'
    },
    {
      id: 3,
      nama: 'Firman',
      email: 'firman@gmail.com',
      totalpoint: '80',
      status: 'Lulus'
    }
  ]);

  const handlePercentage = (totalpoint: string) => {
    return (parseInt(totalpoint) / 100) * 100;
  };

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Hasil Kuis" />
        <div className="w-full p-3 rounded-md shadow bg-Base-white h-fit">
          <div className="flex flex-col justify-between gap-5 p-3">
            <h1 className="font-semibold ">Hasil Kuis</h1>
            <div className="flex justify-between gap-5">
              <Select placeholder="Kelas" size="md" className="w-fit">
                <option value="1">X</option>
                <option value="2">XI</option>
                <option value="3">XII</option>
              </Select>
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
            </div>
          </div>
          <TableContainer className="m-3 border rounded-lg shadow-sm ">
            <Table variant="simple" className="">
              <Thead className="bg-Gray-50">
                <Tr>
                  <Th>
                    <Checkbox />
                  </Th>
                  <Th>Nama Siswa</Th>
                  <Th>(%)</Th>
                  <Th>Total Points</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {hasil.map((item, index) => (
                  <Tr key={index}>
                    <Td>
                      <Checkbox />
                    </Td>
                    <Td className="flex gap-2">
                      <Image
                        src={`https://ui-avatars.com/api/?name=${item.nama}`}
                        alt="Logo"
                        width={40}
                        height={24}
                        className="rounded-full"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-Gray-900">{item.nama}</span>{' '}
                        <span className="text-sm text-Gray-600">{item.email}</span>
                      </div>
                    </Td>
                    <Td>{handlePercentage(item.totalpoint)}%</Td>
                    <Td>{item.totalpoint}/100</Td>
                    <Td>
                      {item.status === 'Lulus' ? (
                        <Tag colorScheme="green" borderRadius="full" size="sm">
                          <TagLabel>Passed</TagLabel>
                        </Tag>
                      ) : (
                        <Tag colorScheme="red" borderRadius="full" size="sm">
                          <TagLabel>Failed</TagLabel>
                        </Tag>
                      )}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
