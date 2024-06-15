import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutAdmin/AuthenticatedLayout';
import Seo from '@/components/Seo';
import PrimaryButton from '@/components/PrimaryButton';
import { Select } from '@chakra-ui/react';
import { Avatar, AvatarGroup, Button } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';

export default function Create() {
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
                <Button leftIcon={<MdAdd />} colorScheme="gray" variant="outline">
                  Tambah Guru Pengajar
                </Button>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <PrimaryButton btnClassName="w-fit h-fit rounded-md">Buat Mata Pelajaran</PrimaryButton>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
