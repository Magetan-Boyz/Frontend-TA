import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
// import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import Seo from '@/components/Seo';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Tag, TagLabel, Select, Button } from '@chakra-ui/react';
import SecondaryButton from '@/components/SecondaryButton';

export default function DataDiri() {
  const router = useRouter();
  const user = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      nim: '1234567890',
      phonenumber: '08129990000'
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: 'jane@gmail.com',
      nim: '0987654321',
      phonenumber: '08129990000'
    },
    {
      id: 3,
      name: 'John Smith',
      email: 'john@gmail.com',
      nim: '1234567890',
      phonenumber: '08129990000'
    }
  ];

  const countUser = user.length;
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 1;

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(user.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentData = user.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="overflow-x-auto">
      <AuthenticatedLayout>
        <Seo templateTitle="Home" />
        <div className="w-full rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex items-center justify-between p-4">
            <h1 className="flex items-center gap-2 text-lg font-semibold">
              Daftar siswa{' '}
              <Tag colorScheme="blue" borderRadius="full" size="sm">
                <TagLabel>{countUser} User</TagLabel>
              </Tag>
            </h1>
            <div className="flex items-center gap-2">
              <Select placeholder="Kelas" size="md">
                <option value="1">X</option>
                <option value="2">XI</option>
                <option value="3">XII</option>
              </Select>
            </div>
          </div>
          <div className="">
            <TableContainer className="">
              <Table variant="simple" className="">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Nomor Induk</Th>
                    <Th>Email</Th>
                    <Th>Nomor Hp</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {currentData.map((item, index) => (
                    <Tr key={index}>
                      <Td>{item.name}</Td>
                      <Td>{item.nim}</Td>
                      <Td>{item.email}</Td>
                      <Td>{item.phonenumber}</Td>
                      <Td>
                        <Button
                          colorScheme="gray"
                          variant="outline"
                          size="md"
                          onClick={() => router.push(`/pengaturan/datadiri/${item.id}`)}
                        >
                          Details
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </div>
          <div id="pagination" className="flex justify-between p-3 border-t border-Gray-200">
            <SecondaryButton
              btnClassName={`font-semibold w-fit ${currentPage === 1 ? 'text-Gray-300 border-Gray-300' : ''}`}
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </SecondaryButton>
            <span className="self-center">
              Page {currentPage} of {Math.ceil(user.length / itemsPerPage)}
            </span>
            <SecondaryButton
              btnClassName={`font-semibold w-fit ${currentPage === Math.ceil(user.length / itemsPerPage) ? 'text-Gray-300 border-Gray-300' : ''}`}
              onClick={handleNextPage}
              disabled={currentPage === Math.ceil(user.length / itemsPerPage)}
            >
              Next
            </SecondaryButton>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
