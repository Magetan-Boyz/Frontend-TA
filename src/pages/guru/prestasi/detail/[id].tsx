import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutSiswa/AuthenticatedLayout';
import Seo from '@/components/Seo';
import { PiFlagBannerBold } from 'react-icons/pi';
import {
  Select,
  Tag,
  TagLabel,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  ModalFooter
} from '@chakra-ui/react';
import PrimaryButton from '@/components/PrimaryButton';
import { CgCloseO } from 'react-icons/cg';
import SecondaryButton from '@/components/SecondaryButton';

export default function DetailPrestasi() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const item = {
    id: 1,
    nama: 'Lomba Menulis Cerpen Kreatif',
    jenisPrestasi: 'OSN',
    partisipasi: 'Peserta',
    tingkat: 'Kabupaten',
    status: 'Wait Approval'
  };
  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Pengaduan" />
        <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex flex-col justify-between gap-5 p-3 lg:flex-row lg:border-b border-Gray-200">
            <h1 className="text-lg font-semibold">Input Prestasi</h1>
          </div>
          <div className="flex flex-col gap-5 p-3">
            <div className="flex flex-col gap-3">
              <label htmlFor="pengaduan" className="text-sm font-medium text-Gray-700">
                Nama dan Judul Kegiatan
              </label>
              <input
                name="pengaduan"
                id="pengaduan"
                className="w-full p-2 border rounded-lg border-Gray-200 h-fit"
                placeholder="Tuliskan pengaduan kamu disini"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-sm font-medium text-Gray-700">Jenis Prestasi</h1>
              <Select placeholder="Pilih Golongan Darah">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-sm font-medium text-Gray-700">Jenis Partisipasi</h1>
              <Select placeholder="Pilih Golongan Darah">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-sm font-medium text-Gray-700">Jenis Tingkat</h1>
              <Select placeholder="Pilih Golongan Darah">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="link" className="text-sm text-Gray-700">
                Upload Bukti
              </label>
              <div className="relative flex items-center border rounded-md border-Gray-200">
                <span className="px-3 border-r text-Gray-600">https://</span>
                <input
                  type="text"
                  id="link"
                  className="w-full p-2 border-0 rounded-r-md focus:outline-none"
                  placeholder="www.example.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="status">Status</label>
              {item.status === 'Wait Approval' ? (
                <Tag colorScheme="blue" borderRadius="full" size="sm" className="w-fit">
                  <TagLabel>Wait Approval</TagLabel>
                </Tag>
              ) : item.status === 'Success' ? (
                <Tag colorScheme="green" borderRadius="full" size="sm" className="w-fit">
                  <TagLabel>Success</TagLabel>
                </Tag>
              ) : (
                <Tag colorScheme="red" borderRadius="full" size="sm" className="w-fit">
                  <TagLabel>Declined</TagLabel>
                </Tag>
              )}
            </div>
            <div className="flex items-center justify-end gap-3">
              <Button leftIcon={<CgCloseO />} onClick={onOpen} variant="outline">
                Decline
              </Button>
              <PrimaryButton btnClassName="w-fit h-fit rounded-md">Approve</PrimaryButton>
            </div>
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
              <h1 className="text-lg font-semibold">Anda Yakin Ingin Menolak Pelaporan Prestasi Siswa?</h1>
              <form action="" className="mt-3">
                <div className="flex flex-col mt-2 mb-2">
                  <label htmlFor="tujuan" className="text-sm text-Gray-600">
                    Masukkan catatan mengapa anda menolak
                  </label>
                  <textarea
                    name="tujuan"
                    id="tujuan"
                    className="w-full p-2 border rounded-lg border-Gray-200 h-fit"
                    placeholder="cth : dokumen salah input dan lainnya"
                  />
                </div>
              </form>
            </ModalBody>
            <ModalFooter className="flex justify-center gap-3">
              <SecondaryButton onClick={onClose} btnClassName="font-semibold">
                Batal
              </SecondaryButton>
              <PrimaryButton onClick={onClose} btnClassName="font-semibold">
                Tolak Pelaporan
              </PrimaryButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </AuthenticatedLayout>
    </div>
  );
}
