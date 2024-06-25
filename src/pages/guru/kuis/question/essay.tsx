import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
import Seo from '@/components/Seo';
import TextInput from '@/components/TextInput';
import { Select } from '@chakra-ui/react';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';

export default function essay() {
  const [pertanyaan, setPertanyaan] = React.useState('');

  return (
    <div>
      <AuthenticatedLayout>
        <Seo title="Create Kuis" />
        <div className="w-full p-3 border rounded-md shadow border-Gray-200 bg-Base-white h-fit">
          <div className="p-3 border-b border-Gray-200">
            <h1 className="text-lg font-semibold">Essay</h1>
          </div>
          <div className="flex flex-col gap-5 p-5">
            <label htmlFor="pertanyaan" className="text-sm font-semibold text-Gray-600">
              Masukkan Pertanyaan Disini
            </label>
            <textarea
              name="pertanyaan"
              id="pertanyaan"
              className="border border-[#D0D5DD] rounded-lg p-2 mt-3"
              placeholder="Proses memasak makanan pada tumbuhan disebut dengan?"
              value={pertanyaan}
              onChange={(e) => setPertanyaan(e.target.value)}
            />
            <h1 className="text-lg font-semibold">Limitasi Teks dengan Karakter atau Kata</h1>
            <div className="flex gap-5">
              <span>
                <label htmlFor="char" className="text-sm font-semibold text-Gray-600">
                  Jumlah
                </label>
                <TextInput placeholder="100" inputClassName="border-Gray-200" />
              </span>
              <span>
                <label htmlFor="char" className="text-sm font-semibold text-Gray-600">
                  Karakter
                </label>
                <Select placeholder="Kelas" size="lg" className="w-full">
                  <option value="1">X</option>
                  <option value="2">XI</option>
                  <option value="3">XII</option>
                </Select>
              </span>
            </div>
            <div className="flex flex-col">
              <label htmlFor="catatan" className="text-sm font-semibold text-Gray-600">
                Catatan
              </label>
              <textarea
                name="catatan"
                id="catatan"
                className="border border-[#D0D5DD] rounded-lg p-2 mt-3"
                placeholder="Catatan tambahan"
                value={pertanyaan}
                onChange={(e) => setPertanyaan(e.target.value)}
              />
            </div>
            <div className="flex justify-start gap-5">
              <PrimaryButton btnClassName="w-fit h-fit" onClick={() => console.log('submit')}>
                Simpan
              </PrimaryButton>
              <SecondaryButton btnClassName="w-fit h-fit" onClick={() => console.log('submit')}>
                Batalkan
              </SecondaryButton>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
