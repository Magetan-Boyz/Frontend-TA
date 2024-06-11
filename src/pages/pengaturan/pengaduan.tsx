import * as React from 'react';
import { useState } from 'react';
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
import Seo from '@/components/Seo';
import { useRouter } from 'next/router';
import PrimaryButton from '@/components/PrimaryButton';
import CardPengaduan from '@/components/CardPengaduan';

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

const initialDataKomentar = [
  {
    id: 1,
    pengaduanId: 1,
    nama: 'Dominica',
    waktu: '10 jam yang lalu',
    isiKomentar: 'Betul tuh sekarang jadi lama'
  },
  {
    id: 2,
    pengaduanId: 1,
    nama: 'Dominica',
    waktu: '10 jam yang lalu',
    isiKomentar: 'Ayo guys speak up guys'
  },
  {
    id: 3,
    pengaduanId: 1,
    nama: 'Dominica',
    waktu: '10 jam yang lalu',
    isiKomentar: 'Ayo guys speak up guys'
  }
  // Tambahkan data komentar lainnya di sini
];

export default function Pengaduan() {
  const router = useRouter();
  const [dataPengaduan, setDataPengaduan] = useState(initialDataPengaduan);
  const [dataKomentar] = useState(initialDataKomentar);

  const handleDeletePengaduan = (id: number) => {
    setDataPengaduan(dataPengaduan.filter((pengaduan) => pengaduan.id !== id));
  };

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Pengaduan" />
        <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex flex-col justify-between gap-5 p-3 lg:flex-row lg:border-b border-Gray-200">
            <h1 className="text-lg font-semibold">List Pengaduan</h1>
            <div className="flex flex-col items-center gap-2 lg:flex-row">
              <PrimaryButton btnClassName="font-semibold w-full lg:w-fit h-fit" onClick={() => router.push('/pengaturan/pengaduan/create')}>
                Buat Baru
              </PrimaryButton>
            </div>
          </div>
          <div className="p-3 space-y-4">
            {dataPengaduan.map((pengaduan) => {
              const komentarForPengaduan = dataKomentar.filter((komentar) => komentar.pengaduanId === pengaduan.id);
              return (
                <CardPengaduan
                  key={pengaduan.id}
                  nama={pengaduan.nama}
                  waktu={pengaduan.waktu}
                  isiPengaduan={pengaduan.isiPengaduan}
                  initialLikes={pengaduan.initialLikes}
                  comments={komentarForPengaduan}
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
