import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
import Seo from '@/components/Seo';
import PrimaryButton from '@/components/PrimaryButton';
import Checkbox from '@/components/Checkbox';
import TextInput from '@/components/TextInput';

export default function settings() {
  return (
    <div>
      <AuthenticatedLayout>
        <Seo title="Create Kuis" />
        <div className="w-full rounded-md shadow bg-Base-white h-fit">
          <div className="flex flex-col justify-between gap-5 p-5 lg:flex-row lg:items-center">
            <div className="flex items-center gap-3">
              <PrimaryButton btnClassName="w-fit h-fit bg-Base-White text-Primary-500 rounded" onClick={() => console.log('clicked')}>
                Pertanyaan
              </PrimaryButton>
              <PrimaryButton btnClassName="w-fit h-fit bg-Primary-50 text-Primary-700 rounded" onClick={() => console.log('clicked')}>
                Pengaturan
              </PrimaryButton>
            </div>
            <div className="flex items-center gap-3">
              <PrimaryButton btnClassName="w-fit h-fit" onClick={() => console.log('clicked')}>
                Simpan
              </PrimaryButton>
            </div>
          </div>
          <div className="flex gap-3 p-5">
            <Checkbox />
            <label htmlFor="active">Kuis ini telah aktif</label>
          </div>
          <div className="flex flex-col gap-5 p-5">
            <label htmlFor="judul">Judul</label>
            <TextInput placeholder="Judul Kuis" />
            <label htmlFor="deskripsi">Deskripsi</label>
            <textarea placeholder="Deskripsi Kuis" className="border border-[#D0D5DD] rounded-lg p-2" />
            <label htmlFor="deadline">Set Deadline</label>
            <TextInput type="date" />
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
