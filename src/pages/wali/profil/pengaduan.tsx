import * as React from 'react';
import { useState } from 'react';
import AuthenticatedLayout from '@/components/layout/layoutWali/AuthenticatedLayout';
import Seo from '@/components/Seo';
import { useRouter } from 'next/router';
import PrimaryButton from '@/components/PrimaryButton';
import CardPengaduan from '@/components/pengaduan/CardPengaduanSiswa';

const initialDataPengaduan = [
  {
    id: 1,
    nama: 'Dominica',
    waktu: '10 jam yang lalu',
    isiPengaduan: 'Sampai kapan nih pengajuan untuk dispensasi lomba belum di acc? mohon dibantu ya bapak ibu guru untuk di acc',
    initialLikes: 24,
    initialComments: 10
  }
  // Tambahkan data pengaduan lainnya di sini
];

export default function Pengaduan() {
  const router = useRouter();
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
            <h1 className="text-lg font-semibold">List Jawaban Pengaduan</h1>
            <div className="flex flex-col items-center gap-2 lg:flex-row">
              <PrimaryButton
                btnClassName="font-semibold w-full lg:w-fit h-fit"
                onClick={() => router.push('/siswa/profil/pengaduan/create')}
              >
                Posting Pengaduan Baru
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
      </AuthenticatedLayout>
    </div>
  );
}
