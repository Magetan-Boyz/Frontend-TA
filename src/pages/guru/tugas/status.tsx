import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
// import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { Input, Select, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import SecondaryButton from '@/components/SecondaryButton';
import { useRouter } from 'next/router';

export default function statusPengumpulan() {
  const router = useRouter();
  const [tugas] = React.useState([
    {
      id: 1,
      nama: 'Tugas 1',
      deskripsi: 'Bab Pembahasan : Belajar Mengenai Fotosintesis',
      totalSiswa: '10',
      totalSubmit: '9'
    },
    {
      id: 2,
      nama: 'Tugas 2',
      deskripsi: 'Bab Pembahasan : Belajar Mengenai Fotosintesis',
      totalSiswa: '10',
      totalSubmit: '9'
    },
    {
      id: 3,
      nama: 'Tugas 3',
      deskripsi: 'Bab Pembahasan : Belajar Mengenai Fotosintesis',
      totalSiswa: '10',
      totalSubmit: '9'
    }
  ]);
  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Home" />
        <div className="w-full p-3 border rounded-md shadow-lg h-fit border-Gray-200 bg-Base-white">
          <div className="flex flex-col justify-between gap-4 p-3 lg:flex-row lg:border-b border-Gray-200">
            <h1 className="text-lg font-semibold">Status Pengumpulan</h1>
            <div className="flex flex-col gap-3 lg:flex-row">
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
          <div className="flex flex-col justify-around gap-4 px-3 py-6 lg:flex-row">
            <span className="flex flex-col w-full gap-4">
              <label htmlFor="jenis" className="text-sm font-medium text-Gray-700">
                Jenis Tugas
              </label>
              <Select placeholder="Kelas" size="md" name="jenis" className="">
                <option value="1">X</option>
                <option value="2">XI</option>
                <option value="3">XII</option>
              </Select>
            </span>
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
            <span className="w-full">
              <label htmlFor="date" className="text-sm font-medium text-Gray-700">
                Tanggal Dibuat
              </label>
              <Input size="md" type="date" name="date" className="mt-3" />
            </span>
          </div>
          <div className="m-3 border rounded-lg shadow-sm ">
            <Table className="">
              <Thead className="bg-Gray-50">
                <Tr>
                  <Th>Nama Tugas</Th>
                  <Th>Total Siswa</Th>
                  <Th>Total Submit</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {tugas.map((item, index) => (
                  <Tr key={index}>
                    <Td className="flex flex-col gap-2">
                      {item.nama}
                      <p className="text-sm text-Gray-500">{item.deskripsi}</p>
                    </Td>
                    <Td>{item.totalSiswa}</Td>
                    <Td>{item.totalSubmit}</Td>
                    <Td>
                      <SecondaryButton btnClassName="font-semibold" onClick={() => router.push(`/tugas/status/${item.id}`)}>
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
