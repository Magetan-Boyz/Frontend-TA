import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutAdmin/AuthenticatedLayout';
import Seo from '@/components/Seo';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import { LuBookOpen } from 'react-icons/lu';
import Image from 'next/image';
import { Select } from '@chakra-ui/react';
import {
  Avatar,
  AvatarGroup,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure
} from '@chakra-ui/react';
import { MdAdd, MdClose } from 'react-icons/md';

export default function Create() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [guru] = React.useState([
    {
      id: 1,
      namaguru: 'Ryan Florence',
      email: 'email@email.com'
    },
    {
      id: 2,
      namaguru: 'Segun Adebayo',
      email: 'email@email.com'
    },
    {
      id: 3,
      namaguru: 'Kent Dodds',
      email: 'email@email.com'
    },
    {
      id: 4,
      namaguru: 'Prosper Otemuyiwa',
      email: 'email@email.com'
    },
    {
      id: 5,
      namaguru: 'Christian Nwamba',
      email: 'email@email.com'
    }
  ]);
  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Pengaduan" />
        <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex flex-col justify-between gap-5 p-3 lg:flex-row lg:border-b border-Gray-200">
            <h1 className="text-lg font-semibold">Tambah Mata Pelajaran</h1>
          </div>
          <div className="flex flex-col gap-5 p-3">
            <div className="flex flex-col gap-3">
              <label htmlFor="mapel" className="text-sm font-medium text-Gray-700">
                Nama Mata Pelajaran
              </label>
              <input
                name="mapel"
                id="mapel"
                className="w-full p-2 border rounded-lg border-Gray-200 h-fit"
                placeholder="Masukkan nama mata pelajaran"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="deskeipsi" className="text-sm font-medium text-Gray-700">
                Deskripsi Mata Pelajaran
              </label>
              <textarea
                name="deskeipsi"
                id="deskeipsi"
                className="w-full p-2 border rounded-lg border-Gray-200 h-fit"
                placeholder="Masukkan deskripsi mata pelajaran"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-sm font-medium text-Gray-700">Assign Kelas</h1>
              <Select placeholder="Pilih Golongan Darah">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-sm font-medium text-Gray-700">Assign Semester</h1>
              <Select placeholder="Pilih Golongan Darah">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="link" className="text-sm text-Gray-700">
                Assign Guru Pengajar
              </label>
              <div className="relative flex items-center gap-3 p-3 border rounded-md border-Gray-200">
                <AvatarGroup size="sm" max={5}>
                  <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                  <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                  <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                  <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
                </AvatarGroup>
                <Button leftIcon={<MdAdd />} onClick={onOpen} colorScheme="gray" variant="outline">
                  Tambah Guru Pengajar
                </Button>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <PrimaryButton btnClassName="w-fit h-fit rounded-md">Buat Mata Pelajaran</PrimaryButton>
            </div>
          </div>
        </div>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <div className="p-2 rounded-full w-[36px] bg-Warning-100">
                <LuBookOpen className="rotate-0 text-Warning-600" />
              </div>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1 className="text-lg font-semibold">Assign Guru Pengajar</h1>
              <p className="text-sm font-light text-Gray-600">Pilih dari search atau list dari daftar guru pengajar</p>
              <form action="" className="pb-3 mt-3">
                <div className="flex flex-col gap-3">
                  <label htmlFor="judul" className="text-sm text-Gray-600">
                    Judul
                  </label>
                  <Select placeholder="Kelas" size="md" name="sort" className="">
                    <option value="1">X</option>
                    <option value="2">XI</option>
                    <option value="3">XII</option>
                  </Select>
                </div>
              </form>
              <div className="flex flex-col py-3 overflow-y-auto h-[200px]">
                {guru.map((item, index) => (
                  <div className="flex items-center w-full gap-3 px-8 py-4 border-b justidy-between border-Gray-200" key={index}>
                    <div className="flex items-center w-full gap-3">
                      <Image
                        src={`https://ui-avatars.com/api/?name=${item.namaguru}`}
                        alt="Logo"
                        width={40}
                        height={24}
                        className="rounded-full"
                      />
                      <div className="">
                        <span className="text-sm font-medium text-Gray-900">{item.namaguru}</span>
                      </div>
                    </div>
                    <MdClose className="cursor-pointer text-Gray-500" />
                  </div>
                ))}
              </div>
            </ModalBody>
            <ModalFooter className="flex justify-center gap-3">
              <SecondaryButton onClick={onClose} btnClassName="font-semibold">
                Batal
              </SecondaryButton>
              <PrimaryButton onClick={onClose} btnClassName="font-semibold">
                Konfirmasi
              </PrimaryButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </AuthenticatedLayout>
    </div>
  );
}
