import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutSiswa/AuthenticatedLayout';
import Seo from '@/components/Seo';
import {
  Table,
  Thead,
  Tr,
  Tbody,
  Th,
  Td,
  Tag,
  TagLabel,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import SecondaryButton from '@/components/SecondaryButton';
import { FiInfo } from 'react-icons/fi';
import { PiFlagBannerBold } from 'react-icons/pi';
import { FaFilePdf } from 'react-icons/fa';
import PrimaryButton from '@/components/PrimaryButton';

export default function Dispensasi() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user] = React.useState([
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

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Dispensasi" />
        <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex flex-col justify-between gap-5 p-3 lg:flex-row lg:border-b border-Gray-200">
            <h1 className="text-lg font-semibold">Daftar Dispensasi</h1>
            <div className="flex items-center gap-2">
              <PrimaryButton btnClassName="w-fit h-fit" onClick={onOpen}>
                Ajukan Dispensasi
              </PrimaryButton>
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
                      <SecondaryButton
                        btnClassName="font-semibold w-fit h-fit"
                        onClick={() => router.push(`/dispensasi/detail/${item.id}`)}
                      >
                        Details
                      </SecondaryButton>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </div>
        </div>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <div className="p-2 rounded-md w-[36px] shadow-md border border-Gray-200 bg-Base-white">
                <PiFlagBannerBold className="rotate-0" />
              </div>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1 className="text-lg font-semibold">Ajukan Dispensasi</h1>
              <p className="text-sm font-light text-Gray-600">Isi data berikut sebelum melakukan dispensasi</p>
              <form action="" className="mt-3">
                <div className="flex flex-col mt-2 mb-2">
                  <label htmlFor="tujuan" className="text-sm text-Gray-600">
                    Tujuan Dispensasi
                  </label>
                  <select name="tujuan" id="tujuan" className="p-2 mt-2 border-2 rounded-md border-Gray-300">
                    <option value="1">Tugas Harian</option>
                    <option value="2">Tugas</option>
                  </select>
                </div>
                <h1 className="font-semibold text-md text-Gray-900">Tanggal Dispensasi</h1>
                <div className="flex flex-col gap-3">
                  <label htmlFor="tanggal" className="text-sm text-Gray-600">
                    Tanggal Mulai
                  </label>
                  <input type="date" id="tanggal" className="w-full p-2 border-2 rounded-md border-Gray-300" />
                  <label htmlFor="tanggal" className="text-sm text-Gray-600">
                    Tanggal Berakhir
                  </label>
                  <input type="date" id="tanggal" className="w-full p-2 border-2 rounded-md border-Gray-300" />
                  <label htmlFor="link" className="text-sm text-Gray-600">
                    Dokumen Pendukung
                  </label>
                  <div className="relative flex items-center mb-2 border-2 rounded-md border-Gray-300">
                    <span className="px-3 border-r text-Gray-600">https://</span>
                    <input
                      type="text"
                      id="link"
                      className="w-full p-2 border-0 rounded-r-md focus:outline-none"
                      placeholder="www.example.com"
                    />
                  </div>
                  <div className="flex w-full gap-2 text-Gray-600">
                    <FiInfo className="text-md" />
                    <p className="text-sm">Dapat diisi dengan pendukung seperti Google Drive</p>
                  </div>
                </div>
              </form>
            </ModalBody>
            <ModalFooter className="flex justify-center gap-3">
              <SecondaryButton onClick={onClose} btnClassName="font-semibold">
                Batal
              </SecondaryButton>
              <PrimaryButton onClick={onClose} btnClassName="font-semibold">
                Ajukan Dispensasi
              </PrimaryButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </AuthenticatedLayout>
    </div>
  );
}
