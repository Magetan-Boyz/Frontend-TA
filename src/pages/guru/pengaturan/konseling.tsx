import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
import Seo from '@/components/Seo';
import { Select, Table, Thead, Tr, Tbody, Th, Td, Tag, TagLabel, Input } from '@chakra-ui/react';
import SecondaryButton from '@/components/SecondaryButton';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Konseling() {
  const router = useRouter();
  const [user, setUser] = React.useState([
    {
      id: 1,
      nama: 'Dominica',
      tanggal: '18/05/2022',
      tujuan: 'Konseling Minat & Bakat',
      status: 'Success',
      tipe: 'Baru'
    },
    {
      id: 2,
      nama: 'Dominica',
      tanggal: '18/05/2022',
      tujuan: 'Konseling Pribadi',
      status: 'Wait Approval',
      tipe: 'Baru'
    },
    {
      id: 3,
      nama: 'Dominica',
      tanggal: '18/05/2022',
      tujuan: 'Konseling Minat & Bakat',
      status: 'Declined',
      tipe: 'Baru'
    }
  ]);

  const handleApprove = (id: number) => {
    setUser((prevUsers) => prevUsers.map((user) => (user.id === id ? { ...user, status: 'Success' } : user)));
  };

  const handleDecline = (id: number) => {
    setUser((prevUsers) => prevUsers.map((user) => (user.id === id ? { ...user, status: 'Declined' } : user)));
  };

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Konseling" />
        <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex flex-col justify-between gap-5 p-3 lg:flex-row lg:border-b border-Gray-200">
            <h1 className="text-lg font-semibold">Daftar Konseling</h1>
            <div className="flex items-center gap-2">
              <Select placeholder="Kelas" size="md">
                <option value="1">VII - A</option>
                <option value="2">VIII - B</option>
                <option value="3">IX - C</option>
              </Select>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 px-3 py-6 lg:flex-row">
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="sort" className="text-sm font-medium text-Gray-700">
                Tujuan Konseling
              </label>
              <Select placeholder="Urutkan" size="md" name="sort" className="">
                <option value="1">Konseling Minat & Bakat</option>
                <option value="2">Konseling Pribadi</option>
              </Select>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="sort" className="text-sm font-medium text-Gray-700">
                Status Konseling
              </label>
              <Select placeholder="Urutkan" size="md" name="sort" className="">
                <option value="1">Wait Approval</option>
                <option value="2">Success</option>
                <option value="3">Declined</option>
              </Select>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="sort" className="text-sm font-medium text-Gray-700">
                Tanggal Mulai
              </label>
              <Input type="date" size="md" />
            </div>
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="sort" className="text-sm font-medium text-Gray-700">
                Tanggal Akhir
              </label>
              <Input type="date" size="md" />
            </div>
          </div>
          <div className="m-3 border rounded-lg shadow-sm ">
            <Table className="">
              <Thead className="bg-Gray-50">
                <Tr>
                  <Th>Nama Siswa</Th>
                  <Th>Tujuan Konseling</Th>
                  <Th>Tipe Konseling</Th>
                  <Th>Tanggal Konseling</Th>
                  <Th>Status</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {user.map((item, index) => (
                  <Tr key={index}>
                    <Td className="flex items-center gap-2">
                      <Image
                        src={`https://ui-avatars.com/api/?name=${item.nama}`}
                        alt="Logo"
                        width={40}
                        height={24}
                        className="rounded-full"
                      />
                      <div className="">
                        <span className="text-sm font-medium text-Gray-900">{item.nama}</span>
                      </div>
                    </Td>
                    <Td className="text-sm text-Gray-900">{item.tujuan}</Td>
                    <Td className="text-sm text-Gray-900">{item.tipe}</Td>
                    <Td className="text-sm text-Gray-900">{item.tanggal}</Td>
                    <Td>
                      {item.status === 'Wait Approval' ? (
                        <Tag colorScheme="blue" borderRadius="full" size="sm">
                          <TagLabel>Wait Approval</TagLabel>
                        </Tag>
                      ) : item.status === 'Success' ? (
                        <Tag colorScheme="green" borderRadius="full" size="sm">
                          <TagLabel>Success</TagLabel>
                        </Tag>
                      ) : (
                        <Tag colorScheme="red" borderRadius="full" size="sm">
                          <TagLabel>Declined</TagLabel>
                        </Tag>
                      )}
                    </Td>
                    <Td>
                      {item.status === 'Wait Approval' ? (
                        <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-0">
                          <button className="mr-2 font-semibold" onClick={() => handleDecline(item.id)}>
                            Decline
                          </button>
                          <button className="font-semibold text-Success-500" onClick={() => handleApprove(item.id)}>
                            Approve
                          </button>
                        </div>
                      ) : (
                        <SecondaryButton btnClassName="font-semibold" onClick={() => router.push(`/tugas/status/detail/${item.id}`)}>
                          Details
                        </SecondaryButton>
                      )}
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
