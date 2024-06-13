import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutSiswa/AuthenticatedLayout';
import Seo from '@/components/Seo';
import { Button, Switch } from '@chakra-ui/react';
import { FiUploadCloud } from 'react-icons/fi';
import PrimaryButton from '@/components/PrimaryButton';

export default function Pengaduan() {
  const [files, setFiles] = React.useState<string | null>(null);
  const [isAnonymus, setIsAnonymus] = React.useState(false);

  const handleSwitch = () => {
    setIsAnonymus(!isAnonymus);
  };

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
        <Seo templateTitle="Pengaduan" />
        <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex flex-col justify-between gap-5 p-3 lg:flex-row lg:border-b border-Gray-200">
            <h1 className="text-lg font-semibold">Buat Pengaduan</h1>
          </div>
          <div className="flex flex-col gap-5 p-3">
            <div className="flex flex-col gap-3">
              <label htmlFor="pengaduan" className="text-sm font-medium text-Gray-700">
                Tulis Pengaduan
              </label>
              <textarea
                name="pengaduan"
                id="pengaduan"
                className="w-full p-2 border rounded-lg border-Gray-200 h-fit"
                placeholder="Tuliskan pengaduan kamu disini"
              />
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-sm font-medium text-Gray-700">Pilih Thumbnail</h1>
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
            <div className="flex items-start gap-3">
              <Switch colorScheme="green" size="md" onChange={handleSwitch} />
              <div>
                <h1 className="text-sm font-medium text-Gray-700">Buat Menjadi Anonymus</h1>
                <p className="text-sm text-Gray-500">Nama dan Profile mu tidak akan ditampilkan</p>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button variant="outline" size="lg">
                Batalkan
              </Button>
              <PrimaryButton btnClassName="w-fit h-fit rounded-md">Posting Pengaduan</PrimaryButton>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
