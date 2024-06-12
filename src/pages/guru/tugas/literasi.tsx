import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
// import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { Input, Select, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import SecondaryButton from '@/components/SecondaryButton';
import { useRouter } from 'next/router';

export default function Literasi() {
  const router = useRouter();
  const [tugas] = React.useState([
    {
      id: 1,
      kelas: '1',
      totalSiswa: '10',
      totalSubmit: '9'
    },
    {
      id: 2,
      kelas: '2',
      totalSiswa: '10',
      totalSubmit: '9'
    },
    {
      id: 3,
      kelas: '3',
      totalSiswa: '10',
      totalSubmit: '9'
    }
  ]);
  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Home" />
        <div className="w-full p-3 border rounded-md shadow-lg h-fit border-Gray-200 bg-Base-white">
          <div className="p-3 lg:justify-between lg:flex lg:border-b border-Gray-200">
            <h1 className="text-lg font-semibold">List Pengumpulan Literasi</h1>
            <div className="">
              <Select placeholder="Kelas" size="md">
                <option value="1">X</option>
                <option value="2">XI</option>
                <option value="3">XII</option>
              </Select>
            </div>
          </div>
          <div className="py-6 lg:px-3">
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
                    <Td className="font-semibold">{item.kelas}</Td>
                    <Td>{item.totalSiswa}</Td>
                    <Td>{item.totalSubmit}</Td>
                    <Td>
                      <SecondaryButton btnClassName="font-semibold" onClick={() => router.push(`/tugas/literasi/${item.id}`)}>
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
