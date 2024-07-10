import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
// import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import Image from 'next/image';
import axios from 'axios';

import { Table, Thead, Tr, Th, Tbody, Td, TableContainer, Tag, TagLabel, Box, Text } from '@chakra-ui/react';
import SecondaryButton from '@/components/SecondaryButton';
import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

export default function PrestasiList() {
  const router = useRouter();
  const [prestasi, setPrestasi] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/teacher/achivement/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((response) => {
        setPrestasi(response.data.data || []); // Ensure prestasi is an array
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching achievements:', error);
        setPrestasi([]); // Ensure prestasi is an array in case of error
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 10;

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
            {loading ? (
              <Box className="flex justify-center items-center py-10">
                <Text>Loading...</Text>
              </Box>
            ) : prestasi.length === 0 ? (
              <Box className="flex justify-center items-center py-10">
                <Text>No achievements found</Text>
              </Box>
            ) : (
              <Table variant="simple" className="">
                <Thead className="bg-Gray-50">
                  <Tr>
                    <Th>No</Th>
                    <Th>Nama Siswa</Th>
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
                      <Td>{item.student_name}</Td>
                      <Td>{item.type_of_achivement}</Td>
                      <Td>{item.title}</Td>
                      <Td>{item.participation}</Td>
                      <Td>{item.level}</Td>
                      <Td>
                        {item.status === 'pending' ? (
                          <Tag colorScheme="blue" borderRadius="full" size="sm">
                            <TagLabel>Wait Approval</TagLabel>
                          </Tag>
                        ) : item.status === 'accepted' ? (
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
                          onClick={() => router.push(`/guru/prestasi/detail/${item.id}`)}
                        >
                          Details
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            )}
          </TableContainer>
          {prestasi.length > 0 && (
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
          )}
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
