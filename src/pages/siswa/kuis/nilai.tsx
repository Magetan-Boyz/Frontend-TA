import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutSiswa/AuthenticatedLayout';
import Seo from '@/components/Seo';
import { Table, Thead, Tr, Th, Tbody, Td, TableContainer } from '@chakra-ui/react';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import { useRouter } from 'next/router';

export default function nilai() {
  const router = useRouter();
  const [hasil] = React.useState([
    {
      tanggal: '12-12-2021',
      mark: '8',
      totalpoint: 80
    }
  ]);
  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Hasil Kuis" />
        <div className="w-full p-3 rounded-md shadow bg-Base-white h-fit">
          <div className="flex flex-col justify-between gap-5 p-3 border-b border-Gray-200 lg:flex-row lg:items-center">
            <h1 className="font-semibold ">Hasil Kuis</h1>
          </div>
          <TableContainer className="m-3 border-t border-b shadow-sm ">
            <Table variant="simple" className="">
              <Thead className="bg-Gray-50">
                <Tr>
                  <Th>State</Th>
                  <Th>Mark</Th>
                  <Th>Nilai/100</Th>
                  <Th>Review</Th>
                </Tr>
              </Thead>
              <Tbody>
                {hasil.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.tanggal}</Td>
                    <Td>{item.mark}</Td>
                    <Td>{item.totalpoint}</Td>
                    <Td>
                      <PrimaryButton btnClassName="w-fit h-fit">Review</PrimaryButton>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <div className="flex flex-col items-center justify-center gap-6 py-8">
            <h1 className="text-lg font-semibold">Nilai Final-mu untuk Kuis ini adalah {hasil[0].totalpoint}/100</h1>
            <p className="text-sm text-Gray-500">Tidak ada Kesempatan lagi untuk Mengerjakan</p>
            <SecondaryButton btnClassName="w-fit h-fit" onClick={() => router.push('/siswa/kuis/list')}>
              Kembali ke Halaman Utama
            </SecondaryButton>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
