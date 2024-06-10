import * as React from 'react';
import { FiTrash2, FiUploadCloud } from 'react-icons/fi';
import { MdOutlineCheckCircleOutline } from 'react-icons/md';
import { BsEyeSlash, BsEye, BsLink } from 'react-icons/bs';
import { Button, Radio, RadioGroup, Stack, Select, Flex } from '@chakra-ui/react';
import TextInput from '@/components/TextInput';
import clsxm from '@/lib/clsxm';

type DetailMateriProps = {
  className?: string;
};

export default function DetailMateri({ className, ...rest }: DetailMateriProps) {
  const [files, setFiles] = React.useState<FileList | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const selectedFiles = e.target.files[0];
    if (selectedFiles) {
      setFiles(selectedFiles.name);
    }
  };

  const handleClearFiles = () => {
    setFiles(null);
  };

  return (
    <div className={clsxm('w-full p-3 rounded-md shadow-lg h-fit bg-Base-white', className)} {...rest}>
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
                <Radio value="1">
                  <Flex align="center">
                    Sembunyikan <BsEyeSlash className="ml-2" />
                  </Flex>
                </Radio>
                <Radio value="2">
                  <Flex align="center">
                    Hanya yang diundang <BsLink className="ml-2" />
                  </Flex>
                </Radio>
                <Radio value="3">
                  <Flex align="center">
                    Semua Siswa <BsEye className="ml-2" />
                  </Flex>
                </Radio>
              </Stack>
            </RadioGroup>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-5 p-4">
        <Button leftIcon={<FiTrash2 />} colorScheme="gray" variant="outline">
          Hapus Materi
        </Button>
        <Button leftIcon={<MdOutlineCheckCircleOutline />} colorScheme="purple">
          Simpan Materi
        </Button>
      </div>
    </div>
  );
}
