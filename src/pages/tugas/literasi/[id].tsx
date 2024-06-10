import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
// import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { Select, Table, Thead, Tr, Tbody, Th, Td } from '@chakra-ui/react';
import SecondaryButton from '@/components/SecondaryButton';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function DetailPengumpulanLiterasi() {
  const router = useRouter();
  const [user] = React.useState([
    {
      id: 1,
      nama: 'Dominica',
      email: 'dominica@gmail.com',
      judul: 'Judul Literasi',
      totalpoint: '10',
      catatan: 'Pass'
    },
    {
      id: 2,
      nama: 'Dominica',
      email: 'dominica@gmail.com',
      judul: 'Judul Literasi',
      totalpoint: '-',
      catatan: 'Pending'
    },
    {
      id: 3,
      nama: 'Dominica',
      email: 'dominica@gmail.com',
      judul: 'Judul Literasi',
      totalpoint: '10',
      catatan: 'Pending'
    }
  ]);

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Literasi" />
        <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex flex-col justify-between gap-5 p-3 lg:flex-row lg:border-b border-Gray-200">
            <h1 className="text-lg font-semibold">Detail Pengumpulan</h1>
            <div className="flex flex-col lg:flex-row gap-7">
              <h1 className="font-semibold text-Gray-600">
                <span className="font-medium text-Gray-500">Deadline Pengumpulan :</span> January 6, 2023 11:59 AM
              </h1>
              <h1 className="font-semibold text-Gray-600">
                <span className="font-medium text-Gray-500">Total Points :</span> 50
              </h1>
              <h1 className="font-semibold text-Gray-600">
                <span className="font-medium text-Gray-500">Point Minimum Lulus :</span> 25
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-4 px-3 py-6">
            <label htmlFor="sort" className="text-sm font-medium text-Gray-700">
              Sort By
            </label>
            <Select placeholder="Urutkan" size="md" name="sort" className="">
              <option value="1">X</option>
              <option value="2">XI</option>
              <option value="3">XII</option>
            </Select>
          </div>
          <div className="m-3 border rounded-lg shadow-sm ">
            <Table className="">
              <Thead className="bg-Gray-50">
                <Tr>
                  <Th>Nama Siswa</Th>
                  <Th>Judul Literasi</Th>
                  <Th>Total Point</Th>
                  <Th>Catatan Guru</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {user.map((item, index) => (
                  <Tr key={index}>
                    <Td className="flex gap-2">
                      <Image
                        src={`https://ui-avatars.com/api/?name=${item.nama}`}
                        alt="Logo"
                        width={40}
                        height={24}
                        className="rounded-full"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-Gray-900">{item.nama}</span>{' '}
                        <span className="text-sm text-Gray-600">{item.email}</span>
                      </div>
                    </Td>
                    <Td className="text-sm text-Gray-900">{item.judul}</Td>
                    <Td className="text-sm text-Gray-900">{item.totalpoint}/50</Td>
                    <Td>{item.catatan}</Td>
                    <Td>
                      <SecondaryButton btnClassName="font-semibold" onClick={() => router.push(`/tugas/literasi/detail/${item.id}`)}>
                        {item.totalpoint === '-' || item.totalpoint === '0' ? 'Evaluate' : 'Detail'}
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
