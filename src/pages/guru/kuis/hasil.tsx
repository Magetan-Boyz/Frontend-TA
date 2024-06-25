import Seo from '@/components/Seo';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
import * as React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Table, Thead, Tr, Th, Tbody, Td, TableContainer, Select } from '@chakra-ui/react';
import SecondaryButton from '@/components/SecondaryButton';
import PrimaryButton from '@/components/PrimaryButton';

export default function hasil() {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const [hasil] = React.useState([
    {
      id: 1,
      tanggal: '12-12-2021',
      jenis: 'Kuis 1',
      deskripsi: 'Kuis 1 Matematika',
      tipe: 'Multiple Choice'
    },
    {
      id: 2,
      tanggal: '12-12-2021',
      jenis: 'Kuis 2',
      deskripsi: 'Kuis 2 Matematika',
      tipe: 'Multiple Choice'
    },
    {
      id: 3,
      tanggal: '12-12-2021',
      jenis: 'Kuis 3',
      deskripsi: 'Kuis 3 Matematika',
      tipe: 'Essay'
    }
  ]);

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Hasil Kuis" />
        <div className="w-full p-3 rounded-md shadow bg-Base-white h-fit">
          <div className="flex flex-col justify-between gap-5 p-3 lg:flex-row lg:items-center">
            <h1 className="font-semibold ">Hasil Kuis</h1>
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
              <Select placeholder="Kelas" size="md" className="w-fit">
                <option value="1">X</option>
                <option value="2">XI</option>
                <option value="3">XII</option>
              </Select>
            </div>
          </div>
          <TableContainer className="m-3 border rounded-lg shadow-sm ">
            <Table variant="simple" className="">
              <Thead className="bg-Gray-50">
                <Tr>
                  <Th>Tanggal</Th>
                  <Th>Jenis Kuis</Th>
                  <Th>Tipe Soal</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {hasil.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.tanggal}</Td>
                    <Td className="flex flex-col">
                      <span>{item.jenis}</span>
                      <span>{item.deskripsi}</span>
                    </Td>
                    <Td>{item.tipe}</Td>
                    <Td>
                      {item.tipe === 'Multiple Choice' ? (
                        <SecondaryButton btnClassName="w-fit h-fit">Details</SecondaryButton>
                      ) : (
                        <PrimaryButton btnClassName="w-fit h-fit">Beri Nilai</PrimaryButton>
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
