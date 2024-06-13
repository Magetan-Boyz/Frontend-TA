import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutSiswa/AuthenticatedLayout';
import Seo from '@/components/Seo';
import PrimaryButton from '@/components/PrimaryButton';
import { useState } from 'react';
import {
  Tag,
  TagLabel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import SecondaryButton from '@/components/SecondaryButton';
import { PiFlagBannerBold } from 'react-icons/pi';

export default function Tugas() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = () => {
    setIsSubmitted(true);
    onClose();
  };

  return (
    <AuthenticatedLayout>
      <Seo templateTitle="Tugas" />
      <div className="w-full p-3 border rounded-md shadow-lg h-fit border-Gray-200 bg-Base-white">
        <div className="flex flex-col justify-between gap-5 p-3 lg:border-b lg:items-center lg:flex-row lg:border-Gray-200">
          <h1 className="font-semibold ">Buatlah Artikel Mengenai Lingkungan di Sekitarmu</h1>
          {isSubmitted ? (
            <PrimaryButton btnClassName="w-fit h-fit">Edit Tugas</PrimaryButton>
          ) : (
            <PrimaryButton btnClassName="w-fit h-fit" onClick={onOpen}>
              Submit Tugas
            </PrimaryButton>
          )}
        </div>
        <div className="p-3">
          <h2 className="text-lg font-medium">Status Pengumpulan</h2>
          <div className="flex flex-col gap-3 py-5 lg:gap-9 lg:items-center lg:flex-row">
            <h2 className="text-sm font-semibold">Status Pengumpulan</h2>
            <div className="">
              <span className="">
                {isSubmitted ? (
                  <Tag className="" variant="outline" colorScheme="green" borderRadius="full">
                    <TagLabel>Sudah Mengumpulkan</TagLabel>
                  </Tag>
                ) : (
                  <Tag className="" variant="outline" colorScheme="gray" borderRadius="full">
                    <TagLabel>Belum Mengumpulkan</TagLabel>
                  </Tag>
                )}
              </span>
            </div>
          </div>
          <div className="flex flex-col py-5 lg:flex-row lg:gap-10">
            <h3 className="text-sm font-semibold">Status Penilaian</h3>
            <p className="text-Gray-500">{isSubmitted ? 'Belum Dinilai' : 'Belum Dinilai'}</p>
          </div>
          <div className="flex flex-col py-5 lg:flex-row lg:gap-10">
            <h3 className="text-sm font-semibold">Deadline Tugas</h3>
            <p className="text-Gray-500">October 20, 2022</p>
          </div>
          <div className="py-5">
            <h3 className="text-sm font-semibold">Tambah Komentar</h3>
            <textarea className="w-full p-2 mt-2 border border-gray-300 rounded-md" rows={4} placeholder="Tambahkan komentar" />
          </div>
        </div>
        {isSubmitted && (
          <div className="p-3 border-t border-gray-200">
            <div className="flex flex-col py-5 lg:flex-row lg:gap-10">
              <h3 className="text-sm font-medium">Tugas Harian</h3>
              <p className="text-Gray-500">Olivia Rhye - Tugas Artikel - VII A</p>
            </div>
            <div className="flex flex-col py-5 lg:flex-row lg:gap-10">
              <h3 className="text-sm font-medium">Link Pengumpulan</h3>
              <a
                href="https://docs.google.com/document/d/1pzgKrXc05fyH3H9OuwcNPDJED0vIK2oJ8NhvJCW3xKo/edit?usp=drive_link"
                className="text-blue-500 underline"
              >
                https://docs.google.com/document/d/1pzgKrXc05fyH3H9OuwcNPDJED0vIK2oJ8NhvJCW3xKo/edit?usp=drive_link
              </a>
            </div>
          </div>
        )}
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
            <h1 className="text-lg font-semibold">Tugas</h1>
            <p className="text-sm font-light text-Gray-600">Isi kolom berikut untuk menambah atau mengedit tugas</p>
            <form action="" className="mt-3">
              <label htmlFor="judul" className="text-sm text-Gray-600">
                Judul
              </label>
              <input type="text" id="judul" className="w-full p-2 mt-2 mb-2 border-2 rounded-md border-Gray-300" />
              <div className="flex flex-col mt-2 mb-2">
                <label htmlFor="jenis" className="text-sm text-Gray-600">
                  Jenis Tugas
                </label>
                <input name="jenis" id="jenis" className="p-2 mt-2 border-2 rounded-md border-Gray-300" />
              </div>
              <label htmlFor="link" className="text-sm text-Gray-600">
                Link
              </label>
              <div className="relative flex items-center mt-2 mb-2 border-2 rounded-md border-Gray-300">
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
                <p className="text-sm">Masukkan link pengumpulan disini</p>
              </div>
            </form>
          </ModalBody>
          <ModalFooter className="flex justify-center gap-3">
            <SecondaryButton onClick={onClose} btnClassName="font-semibold">
              Batal
            </SecondaryButton>
            <PrimaryButton onClick={handleSubmit} btnClassName="font-semibold">
              Submit Tugas
            </PrimaryButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </AuthenticatedLayout>
  );
}
