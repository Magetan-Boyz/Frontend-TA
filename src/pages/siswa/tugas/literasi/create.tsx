import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutSiswa/AuthenticatedLayout';
import Seo from '@/components/Seo';
import { Button } from '@chakra-ui/react';
import { FiUploadCloud } from 'react-icons/fi';
import PrimaryButton from '@/components/PrimaryButton';

export default function CreateLiterasi() {
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
        <Seo templateTitle="Literasi" />
        <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex flex-col justify-between gap-5 p-3 lg:flex-row lg:border-b border-Gray-200">
            <h1 className="text-lg font-semibold">Tambah Literasi</h1>
            <div className="flex items-center justify-between gap-8">
              <h1>
                Tanggal Literasi : <span className="font-semibold">06 January, 2023</span>
              </h1>
              <PrimaryButton btnClassName="w-fit h-fit">Submit Literasi</PrimaryButton>
            </div>
          </div>
          <div className="flex flex-col gap-5 p-3">
            <div className="flex flex-col gap-3">
              <label htmlFor="judul" className="text-sm font-medium text-Gray-700">
                Judul Materi
              </label>
              <input
                type="text"
                name="judul"
                id="judul"
                className="w-full p-2 border rounded-lg border-Gray-200"
                placeholder="Tuliskan judul literasi kamu disini"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="hasil" className="text-sm font-medium text-Gray-700">
                Masukkan Hasil
              </label>
              <textarea
                name="hasil"
                id="hasil"
                className="w-full p-2 border rounded-lg border-Gray-200 h-fit"
                placeholder="Tuliskan hasil kamu disini"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-sm font-medium text-Gray-700">Tambahkan dokumen pendukung (Opsional)</h1>
              <div className="p-5 border rounded-xl border-Gray-200">
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
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
