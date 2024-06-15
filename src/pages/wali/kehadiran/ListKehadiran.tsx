import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutWali/AuthenticatedLayout';
// import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import Seo from '@/components/Seo';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Select, Button } from '@chakra-ui/react';

export default function ListKehadiran() {
  const router = useRouter();
  const user = [
    {
      id: 1,
      matapelajaran: 'Matematika',
      presentase: '100%',
      jumlahkehadiran: '10',
      jumlahpertemuan: '10'
    },
    {
      id: 2,
      matapelajaran: 'Bahasa Indonesia',
      presentase: '100%',
      jumlahkehadiran: '10',
      jumlahpertemuan: '10'
    },
    {
      id: 3,
      matapelajaran: 'Bahasa Inggris',
      presentase: '100%',
      jumlahkehadiran: '10',
      jumlahpertemuan: '10'
    }
  ];

  return (
    <div className="overflow-x-auto">
      <AuthenticatedLayout>
        <Seo templateTitle="Home" />
        <div className="w-full rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex items-center justify-between p-4">
            <h1 className="flex items-center gap-2 text-lg font-semibold">Presentase Kehadiran Siswa - Ahmin</h1>
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
                    <Th>No</Th>
                    <Th>Mata Pelajaran</Th>
                    <Th>Presentase Kehadiran</Th>
                    <Th>Jumlah Kehadiran</Th>
                    <Th>Jumlah Pertemuan</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {user.map((item, index) => (
                    <Tr key={index}>
                      <Td>{index + 1}</Td>
                      <Td>{item.matapelajaran}</Td>
                      <Td>{item.presentase}</Td>
                      <Td>{item.jumlahkehadiran}</Td>
                      <Td>{item.jumlahpertemuan}</Td>
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
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
