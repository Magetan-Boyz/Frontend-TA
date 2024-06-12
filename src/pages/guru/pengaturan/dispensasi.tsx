import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
import Seo from '@/components/Seo';
import { Select, Table, Thead, Tr, Tbody, Th, Td, Tag, TagLabel } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import SecondaryButton from '@/components/SecondaryButton';
import { FaFilePdf } from 'react-icons/fa';

export default function Dispensasi() {
  const router = useRouter();
  const [user, setUser] = React.useState([
    {
      id: 1,
      nama: 'Dominica',
      keterangan: 'Lomba O2SN',
      tanggalMulai: '18/05/2022',
      tanggalAkhir: '18/05/2022',
      dokumen: 'Surat Izin Dispen.pdf',
      ukuranDokumen: '200 KB',
      status: 'Wait Approval'
    },
    {
      id: 2,
      nama: 'Dominica',
      keterangan: 'Lomba OSN',
      tanggalMulai: '18/05/2022',
      tanggalAkhir: '18/05/2022',
      dokumen: 'Surat Izin Dispen.pdf',
      ukuranDokumen: '200 KB',
      status: 'Success'
    },
    {
      id: 3,
      nama: 'Dominica',
      keterangan: 'Lomba FLS2N',
      tanggalMulai: '18/05/2022',
      tanggalAkhir: '18/05/2022',
      dokumen: 'Surat Izin Dispen.pdf',
      ukuranDokumen: '200 KB',
      status: 'Wait Approval'
    },
    {
      id: 4,
      nama: 'Dominica',
      keterangan: 'Kirab Budaya',
      tanggalMulai: '18/05/2022',
      tanggalAkhir: '18/05/2022',
      dokumen: 'Surat Izin Dispen.pdf',
      ukuranDokumen: '200 KB',
      status: 'Declined'
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
        <Seo templateTitle="Dispensasi" />
        <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex flex-col justify-between gap-5 p-3 lg:flex-row lg:border-b border-Gray-200">
            <h1 className="text-lg font-semibold">Daftar Dispensasi</h1>
            <div className="flex items-center gap-2">
              <Select placeholder="Kelas" size="md">
                <option value="1">VII - A</option>
                <option value="2">VIII - B</option>
                <option value="3">IX - C</option>
              </Select>
            </div>
          </div>
          <div className="m-3 border rounded-lg shadow-sm ">
            <Table className="">
              <Thead className="bg-Gray-50">
                <Tr>
                  <Th>Nama Siswa</Th>
                  <Th>Keterangan Dispensasi</Th>
                  <Th>Tanggal Mulai</Th>
                  <Th>Tanggal Akhir</Th>
                  <Th>Dokumen Pendukung</Th>
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
                    <Td className="text-sm text-Gray-900">{item.keterangan}</Td>
                    <Td className="text-sm text-Gray-900">{item.tanggalMulai}</Td>
                    <Td className="text-sm text-Gray-900">{item.tanggalAkhir}</Td>
                    <Td className="flex items-center gap-2 text-sm text-Gray-900">
                      <FaFilePdf className="text-2xl text-Error-500" />
                      <div className="text-xs text-Gray-500">
                        <h1>{item.dokumen}</h1>
                        <h1>{item.ukuranDokumen}</h1>
                      </div>
                    </Td>
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
                        <SecondaryButton btnClassName="font-semibold" onClick={() => router.push(`/dispensasi/detail/${item.id}`)}>
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
