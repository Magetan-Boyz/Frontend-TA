import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutWali/AuthenticatedLayout';
// import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { Select, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import SecondaryButton from '@/components/SecondaryButton';
import { useRouter } from 'next/router';
import PrimaryButton from '@/components/PrimaryButton';
import { HiOutlinePrinter } from 'react-icons/hi';

export default function NilaiList() {
  const router = useRouter();
  const [nilai] = React.useState([
    {
      id: 1,
      nama: 'Matematika',
      rataformatif: '80',
      ratasumatif: '80',
      rataproyek: '80'
    },
    {
      id: 2,
      nama: 'Bahasa Indonesia',
      rataformatif: '80',
      ratasumatif: '80',
      rataproyek: '80'
    },
    {
      id: 3,
      nama: 'Bahasa Inggris',
      rataformatif: '80',
      ratasumatif: '80',
      rataproyek: '80'
    }
    // Add more items as needed
  ]);

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Nilai" />
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
            <div className="flex items-center gap-3">
              <Select placeholder="Kelas" size="md">
                <option value="1">X</option>
                <option value="2">XI</option>
                <option value="3">XII</option>
              </Select>
              <PrimaryButton
                btnClassName="w-fit h-fit"
                onClick={() => router.push('/nilai/create')}
                leftIcon={<HiOutlinePrinter className="text-xl" />}
              >
                Cetak Nilai Lengkap
              </PrimaryButton>
            </div>
          </div>
          <div className="m-5 border rounded-lg shadow-sm ">
            <Table className="">
              <Thead className="bg-Gray-50">
                <Tr>
                  <Th>No</Th>
                  <Th>Nama Siswa</Th>
                  <Th>Rata-Rata Formatif</Th>
                  <Th>Rata-Rata Sumatif</Th>
                  <Th>Rata-Rata Proyek</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {nilai.map((item, index) => (
                  <Tr key={item.id}>
                    <Td>{index + 1}</Td>
                    <Td>{item.nama}</Td>
                    <Td>{item.rataformatif}</Td>
                    <Td>{item.ratasumatif}</Td>
                    <Td>{item.rataproyek}</Td>
                    <Td>
                      <SecondaryButton btnClassName="font-semibold" onClick={() => router.push(`/siswa/nilai/detail/${item.id}`)}>
                        Detail
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
