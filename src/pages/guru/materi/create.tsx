import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
// import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import PrimaryButton from '@/components/PrimaryButton';
import { Avatar, AvatarGroup, Button, Select, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';
import { FiUploadCloud, FiTrash2 } from 'react-icons/fi';
import TextInput from '@/components/TextInput';
import { useRouter } from 'next/router';

export default function CreateMateri() {
  const router = useRouter();
  const [files, setFiles] = React.useState<string | null>(null);

  const handleDragOver = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      setFiles(selectedFiles[0].name);
    }
  };

  const handleClearFiles = () => {
    setFiles(null);
  };

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Tambah Materi" />
        <div className="flex items-center justify-between w-full p-5 rounded-md h-fit bg-Base-white">
          <h1 className="font-semibold">Detail Materi</h1>
          <div className="flex flex-col items-end justify-between gap-3 lg:items-center lg:flex-row">
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
        <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex flex-col justify-between gap-5 p-5 lg:flex-row">
            <div className="flex flex-col w-full gap-3">
              <h1 className="text-sm font-semibold text-Gray-600">Nama Materi</h1>
              <TextInput inputClassName="border shadow-none " />
            </div>
            <span className="flex flex-col w-full gap-4">
              <label htmlFor="jenis" className="text-sm font-medium text-Gray-700">
                Kelas Terkait
              </label>
              <Select placeholder="Kelas" size="md" name="jenis" className="">
                <option value="1">X</option>
                <option value="2">XI</option>
                <option value="3">XII</option>
              </Select>
            </span>
            <span className="flex flex-col w-full gap-4">
              <label htmlFor="jenis" className="text-sm font-medium text-Gray-700">
                Mata Pelajaran Terkait
              </label>
              <Select placeholder="Kelas" size="md" name="jenis" className="">
                <option value="1">X</option>
                <option value="2">XI</option>
                <option value="3">XII</option>
              </Select>
            </span>
          </div>
          <div className="flex flex-col gap-5 p-5">
            <h1 className="text-sm font-semibold text-Gray-600">Deskripsi Materi</h1>
            <div className="w-full p-3 text-sm font-medium border rounded-lg h-fit text-Gray-500">This is Description</div>
          </div>
          <div className="flex flex-col justify-between gap-5 p-5 lg:flex-row">
            <div className="flex flex-col w-full gap-5">
              <h1 className="font-semibold">Pilih Thumbnail</h1>
              <div className="p-5 border rounded-xl border-Gray-300">
                {files ? (
                  <div className="flex items-center justify-between gap-3">
                    <h1 className="text-Gray-600">{files}</h1>
                    <Button colorScheme="gray" onClick={handleClearFiles}>
                      Clear
                    </Button>
                  </div>
                ) : (
                  <label htmlFor="thumbnail" className="flex flex-col items-center gap-2">
                    <div className="p-2 border rounded-lg w-fit h-fit">
                      <FiUploadCloud className="text-xl text-Gray-600" />
                    </div>
                    <h1 className="text-Gray-600">
                      <span className="text-sm font-semibold text-Primary-700">Click to Upload</span> or Drag and Drop
                    </h1>
                    <h1 className="text-sm text-Gray-600 ">SVG, PNG, JPG or GIF (max. 800x400px)</h1>
                  </label>
                )}
              </div>
              <input type="file" name="thumbnail" id="thumbnail" onChange={handleDragOver} className="hidden" />
            </div>
            <div className="flex flex-col w-full gap-5">
              <h1 className="font-semibold">Aksesibilitas</h1>
              <div className="p-5 border rounded-xl border-Gray-300">
                <RadioGroup>
                  <Stack direction="column">
                    <Radio value="1">Sembunyikan</Radio>
                    <Radio value="2">Hanya yang diundang</Radio>
                    <Radio value="3">Semua Siswa</Radio>
                  </Stack>
                </RadioGroup>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-5 p-4">
            <Button leftIcon={<FiTrash2 />} colorScheme="gray" variant="outline">
              Hapus Materi
            </Button>
            <PrimaryButton btnClassName="w-fit h-fit" onClick={() => router.push('/materi/edit')}>
              Buat Materi
            </PrimaryButton>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
