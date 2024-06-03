import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import Seo from '@/components/Seo';
import { FiEdit } from 'react-icons/fi';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Tag, TagLabel, Input, Select, Button } from '@chakra-ui/react';

export default function ChecklistKehadiran() {
  const router = useRouter();
  const user = [
    {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      nim: '1234567890',
      status: 'Hadir',
      keterangan: '-'
    },
    {
      name: 'Jane Doe',
      email: 'jane@gmail.com',
      nim: '0987654321',
      status: 'Hadir',
      keterangan: '-'
    },
    {
      name: 'John Smith',
      email: 'john@gmail.com',
      nim: '1234567890',
      status: 'Hadir',
      keterangan: '-'
    }
  ];

  const countUser = user.length;

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Home" />
        <main className="flex h-screen bg-Gray-50 w-fit lg:w-full">
          <div className="flex flex-col flex-auto">
            <Navbar />
            <div className="flex justify-center h-screen p-10 overflow-x-auto">
              <div className="w-full rounded-md shadow-lg h-fit bg-Base-white">
                <div className="flex items-center justify-between p-4">
                  <h1 className="flex items-center gap-2 text-lg font-semibold">
                    Daftar siswa{' '}
                    <Tag colorScheme="blue" borderRadius="full" size="sm">
                      <TagLabel>{countUser} User</TagLabel>
                    </Tag>
                  </h1>
                  <div className="flex items-center gap-2">
                    <Input size="md" type="date" />
                    <Select placeholder="Kelas" size="md">
                      <option value="1">X</option>
                      <option value="2">XI</option>
                      <option value="3">XII</option>
                    </Select>
                    <Button
                      colorScheme="gray"
                      variant="outline"
                      size="md"
                      leftIcon={<FiEdit />}
                      paddingLeft={8}
                      paddingRight={8}
                      onClick={() => router.push('/kehadiran/editKehadiran')}
                    >
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="w-full overflow-x-auto">
                  <TableContainer>
                    <Table variant="simple" className="">
                      <Thead>
                        <Tr>
                          <Th>Name</Th>
                          <Th>Nomor Induk</Th>
                          <Th>Email</Th>
                          <Th>Status</Th>
                          <Th>Keterangan</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {user.map((item, index) => (
                          <Tr key={index}>
                            <Td>{item.name}</Td>
                            <Td>{item.nim}</Td>
                            <Td>{item.email}</Td>
                            <Td>
                              {item.status === 'Hadir' ? (
                                <Tag colorScheme="green" borderRadius="full" size="sm">
                                  <TagLabel>Hadir</TagLabel>
                                </Tag>
                              ) : (
                                <Tag colorScheme="red" borderRadius="full" size="sm">
                                  <TagLabel>Tidak Hadir</TagLabel>
                                </Tag>
                              )}
                            </Td>
                            <Td>{item.keterangan}</Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </div>
              </div>
            </div>
          </div>
        </main>
      </AuthenticatedLayout>
    </div>
  );
}
