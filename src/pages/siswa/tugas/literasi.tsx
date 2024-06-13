import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutSiswa/AuthenticatedLayout';
// import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { Select, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import SecondaryButton from '@/components/SecondaryButton';
import { useRouter } from 'next/router';
import PrimaryButton from '@/components/PrimaryButton';

export default function Literasi() {
  const router = useRouter();
  const [tugas] = React.useState([
    {
      id: 3,
      judul: 'Materi 1',
      tanggal: '10/10/2021',
      total: '10',
      catatan: 'Bagus'
    },
    {
      id: 3,
      judul: 'Materi 1',
      tanggal: '10/10/2021',
      total: '10',
      catatan: 'Bagus'
    },
    {
      id: 3,
      judul: 'Materi 1',
      tanggal: '10/10/2021',
      total: '10',
      catatan: 'Bagus'
    }
  ]);

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Home" />
        <div className="w-full p-3 border rounded-md shadow-lg h-fit border-Gray-200 bg-Base-white">
          <div className="flex items-center justify-between p-3 lg:border-b border-Gray-200">
            <h1 className="text-lg font-semibold">Detail Pengumpulan</h1>
            <PrimaryButton btnClassName="w-fit h-fit" onClick={() => router.push('')}>
              Tambah Literasi
            </PrimaryButton>
          </div>
          <div className="flex flex-col gap-4 py-6 lg:flex-row lg:justify-between lg:px-3">
            <span className="flex flex-col w-full gap-4">
              <label htmlFor="sort" className="text-sm font-medium text-Gray-700">
                Urutkan Berdasarkan
              </label>
              <Select placeholder="Kelas" size="md" name="sort" className="">
                <option value="1">X</option>
                <option value="2">XI</option>
                <option value="3">XII</option>
              </Select>
            </span>
          </div>
          <div className="m-3 border rounded-lg shadow-sm ">
            <Table className="">
              <Thead className="bg-Gray-50">
                <Tr>
                  <Th>Tanggal Pengumpulan</Th>
                  <Th>Judul Literasi</Th>
                  <Th>Total Points</Th>
                  <Th>Catatan dari guru</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {tugas.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.tanggal}</Td>
                    <Td>{item.judul}</Td>
                    <Td>{item.total}/50</Td>
                    <Td>{item.catatan}</Td>
                    <Td>
                      <SecondaryButton btnClassName="font-semibold w-fit h-fit" onClick={() => router.push(`/materi/literasi/${item.id}`)}>
                        Details
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
