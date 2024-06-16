import * as React from 'react';
import { useState } from 'react';
import AuthenticatedLayout from '@/components/layout/layoutAdmin/AuthenticatedLayout';
import Seo from '@/components/Seo';
import PrimaryButton from '@/components/PrimaryButton';
import CardPengaduan from '@/components/pengaduan/CardPengaduanSiswa';
import { PiFlagBannerBold } from 'react-icons/pi';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure } from '@chakra-ui/react';
import SecondaryButton from '@/components/SecondaryButton';

const initialDataPengaduan = [
  {
    id: 1,
    nama: 'Dominica',
    waktu: '10 jam yang lalu',
    isiPengaduan: 'Sampai kapan nih pengajuan untuk dispensasi lomba belum di acc? mohon dibantu ya bapak ibu guru untuk di acc'
  }
  // Tambahkan data pengaduan lainnya di sini
];

export default function Pengaduan() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dataPengaduan, setDataPengaduan] = useState(initialDataPengaduan);

  const handleDeletePengaduan = (id: number) => {
    setDataPengaduan(dataPengaduan.filter((pengaduan) => pengaduan.id !== id));
  };

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Pengaduan" />
        <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex flex-col justify-between gap-5 p-3 lg:flex-row lg:border-b border-Gray-200">
            <h1 className="text-lg font-semibold">List Balasan Pengaduan</h1>
            <div className="flex flex-col items-center gap-2 lg:flex-row">
              <PrimaryButton btnClassName="font-semibold w-full lg:w-fit h-fit" onClick={onOpen}>
                Posting Balasan Pengaduan
              </PrimaryButton>
            </div>
          </div>
          <div className="p-3 space-y-4">
            {dataPengaduan.map((pengaduan) => {
              return (
                <CardPengaduan
                  key={pengaduan.id}
                  nama={pengaduan.nama}
                  waktu={pengaduan.waktu}
                  isiPengaduan={pengaduan.isiPengaduan}
                  onDelete={() => handleDeletePengaduan(pengaduan.id)}
                />
              );
            })}
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
              <h1 className="text-lg font-semibold">Buat Balasan Pengaduan</h1>
              <p className="text-sm font-light text-Gray-600">Tulis balasan dari Pengaduan yang masuk ke Whatsapp Admin</p>
              <form action="" className="mt-3">
                <label htmlFor="judul" className="text-sm text-Gray-600">
                  Subject
                </label>
                <input type="text" id="judul" className="w-full p-2 mt-2 mb-2 border-2 rounded-md border-Gray-300" />
                <label htmlFor="deskripsi" className="text-sm text-Gray-600">
                  Tulisan Balasan Pengaduan
                </label>
                <textarea
                  id="deskripsi"
                  placeholder="cth : Tujuan diadakan acara ini adalah..."
                  className="w-full p-2 mt-2 mb-2 border-2 rounded-md border-Gray-300"
                />
              </form>
            </ModalBody>
            <ModalFooter className="flex justify-center gap-3">
              <SecondaryButton onClick={onClose} btnClassName="font-semibold">
                Batal
              </SecondaryButton>
              <PrimaryButton onClick={onClose} btnClassName="font-semibold">
                Posting Pengaduan
              </PrimaryButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </AuthenticatedLayout>
    </div>
  );
}
