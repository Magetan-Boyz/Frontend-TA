import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { Select, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import SecondaryButton from '@/components/SecondaryButton';
import { useRouter } from 'next/router';

export default function NilaiList() {
  const router = useRouter();
  const [nilai] = React.useState([
    {
      id: 1,
      nis: '1234567890',
      nama: 'Dominica',
      jenisKelamin: 'Perempuan',
      rataformatif: '80',
      ratasumatif: '80',
      rataproyek: '80'
    },
    {
      id: 2,
      nis: '1234567890',
      nama: 'Dominica',
      jenisKelamin: 'Perempuan',
      rataformatif: '80',
      ratasumatif: '80',
      rataproyek: '80'
    },
    {
      id: 3,
      nis: '1234567890',
      nama: 'Dominica',
      jenisKelamin: 'Perempuan',
      rataformatif: '80',
      ratasumatif: '80',
      rataproyek: '80'
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
    if (currentPage < Math.ceil(nilai.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentData = nilai.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Nilai" />
        <main className="flex h-screen bg-Gray-50 w-fit lg:w-full">
          <div className="flex flex-col flex-auto">
            <Navbar />
            <div className="flex flex-col justify-start h-screen p-10 gap-9">
              <div className="flex justify-around w-full px-8 py-16 rounded-md shadow h-fit bg-Base-white">
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-5xl font-semibold text-Gray-900">80</h1>
                  <h1 className="text-lg font-medium text-Gray-900">Rata - Rata</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-5xl font-semibold text-Gray-900">80</h1>
                  <h1 className="text-lg font-medium text-Gray-900">Nilai Tertinggi</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-5xl font-semibold text-Gray-900">80</h1>
                  <h1 className="text-lg font-medium text-Gray-900">Nilai Terendah</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h1 className="text-5xl font-semibold text-Gray-900">80</h1>
                  <h1 className="text-lg font-medium text-Gray-900">Median Data</h1>
                </div>
              </div>
              <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white">
                <div className="flex justify-between p-3 border-b border-Gray-200">
                  <h1 className="text-lg font-semibold">Grades</h1>
                  <div className="flex gap-3">
                    <Select placeholder="Kelas" size="md">
                      <option value="1">X</option>
                      <option value="2">XI</option>
                      <option value="3">XII</option>
                    </Select>
                    <Select placeholder="Kelas" size="md">
                      <option value="1">X</option>
                      <option value="2">XI</option>
                      <option value="3">XII</option>
                    </Select>
                  </div>
                </div>
                <div className="m-5 border rounded-lg shadow-sm ">
                  <Table className="">
                    <Thead className="bg-Gray-50">
                      <Tr>
                        <Th>No</Th>
                        <Th>NIS</Th>
                        <Th>Nama Siswa</Th>
                        <Th>Jenis Kelamin</Th>
                        <Th>Rata-Rata Formatif</Th>
                        <Th>Rata-Rata Sumatif</Th>
                        <Th>Rata-Rata Proyek</Th>
                        <Th></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {currentData.map((item, index) => (
                        <Tr key={item.id}>
                          <Td>{(currentPage - 1) * itemsPerPage + index + 1}</Td>
                          <Td>{item.nis}</Td>
                          <Td>{item.nama}</Td>
                          <Td>{item.jenisKelamin}</Td>
                          <Td>{item.rataformatif}</Td>
                          <Td>{item.ratasumatif}</Td>
                          <Td>{item.rataproyek}</Td>
                          <Td>
                            <SecondaryButton btnClassName="font-semibold" onClick={() => router.push(`/nilai/detail/${item.id}`)}>
                              Detail
                            </SecondaryButton>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
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
                    Page {currentPage} of {Math.ceil(nilai.length / itemsPerPage)}
                  </span>
                  <SecondaryButton
                    btnClassName={`font-semibold w-fit ${currentPage === Math.ceil(nilai.length / itemsPerPage) ? 'text-Gray-300 border-Gray-300' : ''}`}
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(nilai.length / itemsPerPage)}
                  >
                    Next
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </main>
      </AuthenticatedLayout>
    </div>
  );
}
