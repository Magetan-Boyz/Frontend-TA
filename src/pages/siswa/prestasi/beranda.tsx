import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutSiswa/AuthenticatedLayout';
// import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

import { Select, Avatar } from '@chakra-ui/react';
import { Table, Thead, Tr, Th, Tbody, Td, TableContainer, Tag, TagLabel } from '@chakra-ui/react';
import SecondaryButton from '@/components/SecondaryButton';
import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

export default function PrestasiList() {
  const router = useRouter();
  const [prestasi] = React.useState([
    {
      id: 1,
      nama: 'Lomba Menulis Cerpen Kreatif',
      jenisPrestasi: 'OSN',
      partisipasi: 'Peserta',
      tingkat: 'Kabupaten',
      status: 'Success'
    },
    {
      id: 2,
      nama: 'Lomba Menulis Cerpen Kreatif',
      jenisPrestasi: 'OSN',
      partisipasi: 'Juara 1',
      tingkat: 'Nasional',
      status: 'success'
    },
    {
      id: 3,
      nama: 'Lomba Menulis Cerpen Kreatif',
      jenisPrestasi: 'OSN',
      partisipasi: 'Juara 2',
      tingkat: 'Kota',
      status: 'success'
    }
    // Add more items as needed
  ]);

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 1;

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(prestasi.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentData = prestasi.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const [searchTerm, setSearchTerm] = React.useState('');
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Detail Nilai" />
        <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex justify-between w-full p-3 border-b border-Gray-200">
            <h1 className="text-lg font-semibold">Grades</h1>
            <div className="flex gap-3">
              <Select placeholder="Kelas" size="md">
                <option value="1">X</option>
                <option value="2">XI</option>
                <option value="3">XII</option>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-5 p-7">
            <Avatar size="2xl" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" showBorder={true} className="shadow-lg" />
            <div>
              <h1 className="text-3xl font-semibold">John Doe</h1>
              <h1 className=" text-Gray-600 text-medium">NISN : 1234567890</h1>
              <h1 className="text-Gray-600 text-medium">Jenis Kelamin : Perempuan</h1>
              <h1 className="text-Gray-600 text-medium">Kelas : X</h1>
            </div>
          </div>
          <h1 className="p-3 font-semibold text-Gray-500">
            Total Point Prestasi : <span className="text-Gray-900">180</span>
          </h1>
        </div>
        <div className="w-full p-3 rounded-md shadow bg-Base-white h-fit">
          <div className="flex flex-col justify-between gap-5 p-3 lg:flex-row lg:items-center">
            <h1 className="font-semibold ">List Pelaporan Prestasi</h1>
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
          </div>
          <TableContainer className="m-3 border rounded-lg shadow-sm ">
            <Table variant="simple" className="">
              <Thead className="bg-Gray-50">
                <Tr>
                  <Th>No</Th>
                  <Th>Jenis Prestasi</Th>
                  <Th>Nama dan Judul Kegiatan</Th>
                  <Th>Partisipasi</Th>
                  <Th>Tingkat</Th>
                  <Th>Status</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {currentData.map((item, index) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>
                    <Td>{item.jenisPrestasi}</Td>
                    <Td>{item.nama}</Td>
                    <Td>{item.partisipasi}</Td>
                    <Td>{item.tingkat}</Td>
                    <Td>
                      {item.status === 'Wait Approval' ? (
                        <Tag colorScheme="blue" borderRadius="full" size="sm">
                          <TagLabel>Wait Approval</TagLabel>
                        </Tag>
                      ) : item.status === 'Success' ? (
                        <Tag colorScheme="green" borderRadius="full" size="sm">
                          <TagLabel>Success</TagLabel>
                        </Tag>
                      ) : (
                        <Tag colorScheme="red" borderRadius="full" size="sm">
                          <TagLabel>Declined</TagLabel>
                        </Tag>
                      )}
                    </Td>
                    <Td>
                      <Button
                        colorScheme="gray"
                        variant="outline"
                        size="md"
                        onClick={() => router.push(`/siswa/prestasi/detail/${item.id}`)}
                      >
                        Details
                      </Button>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <div id="pagination" className="flex justify-between p-3 border-t border-Gray-200">
            <SecondaryButton
              btnClassName={`font-semibold w-fit ${currentPage === 1 ? 'text-Gray-300 border-Gray-300' : ''}`}
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </SecondaryButton>
            <span className="self-center">
              Page {currentPage} of {Math.ceil(prestasi.length / itemsPerPage)}
            </span>
            <SecondaryButton
              btnClassName={`font-semibold w-fit ${currentPage === Math.ceil(prestasi.length / itemsPerPage) ? 'text-Gray-300 border-Gray-300' : ''}`}
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(prestasi.length / itemsPerPage)}
            >
              Next
            </SecondaryButton>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
