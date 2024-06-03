import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
// import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { Select, Table, Thead, Tr, Tbody, Th, Td, Tag, TagLabel } from '@chakra-ui/react';
import SecondaryButton from '@/components/SecondaryButton';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Status() {
  const router = useRouter();
  const [user] = React.useState([
    {
      id: 1,
      nama: 'Dominica',
      tanggal: 'January 6, 2023 11:59 AM',
      email: 'dominica@gmail.com',
      totalpoint: '10',
      status: 'Pass',
      nis: '1234567890'
    },
    {
      id: 2,
      nama: 'Dominica',
      tanggal: 'January 6, 2023 11:59 AM',
      email: 'dominica@gmail.com',
      totalpoint: '10',
      status: 'Pending',
      nis: '1234567890'
    },
    {
      id: 3,
      nama: 'Dominica',
      tanggal: 'January 6, 2023 11:59 AM',
      email: 'dominica@gmail.com',
      totalpoint: '10',
      status: 'Pending',
      nis: '1234567890'
    }
  ]);
  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Status" />
        <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex justify-between p-3 border-b border-Gray-200">
            <h1 className="text-lg font-semibold">Status Pengumpulan</h1>
            <div className="flex gap-7">
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
                  <Th>Tanggal</Th>
                  <Th>Nama Siswa</Th>
                  <Th>NIS</Th>
                  <Th>Total Point</Th>
                  <Th>Status Submit</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {user.map((item, index) => (
                  <Tr key={index}>
                    <Td className="text-sm text-Gray-900">{item.tanggal}</Td>
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
                    <Td className="text-sm text-Gray-900">{item.nis}</Td>
                    <Td className="text-sm text-Gray-900">{item.totalpoint}/50</Td>
                    <Td>
                      {item.status === 'Pending' ? (
                        <Tag colorScheme="blue" borderRadius="full" size="sm">
                          <TagLabel>Pending</TagLabel>
                        </Tag>
                      ) : item.status === 'Pass' ? (
                        <Tag colorScheme="green" borderRadius="full" size="sm">
                          <TagLabel>Pass</TagLabel>
                        </Tag>
                      ) : (
                        <Tag colorScheme="red" borderRadius="full" size="sm">
                          <TagLabel>Fail</TagLabel>
                        </Tag>
                      )}
                    </Td>
                    <Td>
                      <SecondaryButton btnClassName="font-semibold" onClick={() => router.push(`/tugas/status/detail/${item.id}`)}>
                        {item.status === 'Pending' ? 'Evaluate' : 'Detail'}
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
