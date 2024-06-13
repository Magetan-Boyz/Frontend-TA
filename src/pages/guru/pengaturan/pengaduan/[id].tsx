import * as React from 'react';
import { useState } from 'react';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
import Seo from '@/components/Seo';
import CardPengaduan from '@/components/pengaduan/CardPengaduan';
import KomentarPengaduan from '@/components/KomentarPengaduan';

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
    nama: 'Dominica',
    waktu: '10 jam yang lalu',
    isiKomentar: 'Betul tuh sekarang jadi lama'
  },
  {
    id: 2,
    nama: 'Dominica',
    waktu: '10 jam yang lalu',
    isiKomentar: 'Ayo guys speak up guys'
  },
  {
    id: 3,
    nama: 'Dominica',
    waktu: '10 jam yang lalu',
    isiKomentar: 'Ayo guys speak up guys'
  }
  // Tambahkan data komentar lainnya di sini
];

export default function DetailPengaduan() {
  const [dataPengaduan, setDataPengaduan] = useState(initialDataPengaduan);
  const [dataKomentar, setDataKomentar] = useState(initialDataKomentar);

  const handleDeletePengaduan = (id: number) => {
    setDataPengaduan(dataPengaduan.filter((pengaduan) => pengaduan.id !== id));
  };

  const handleDeleteKomentar = (id: number) => {
    setDataKomentar(dataKomentar.filter((komentar) => komentar.id !== id));
  };

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Detail Pengaduan" />
        <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex flex-col justify-between gap-5 p-3 lg:flex-row lg:border-b border-Gray-200">
            <h1 className="text-lg font-semibold">Detail Pengaduan</h1>
          </div>
          <div className="p-3 space-y-4">
            {dataPengaduan.map((pengaduan) => (
              <CardPengaduan
                key={pengaduan.id}
                nama={pengaduan.nama}
                waktu={pengaduan.waktu}
                isiPengaduan={pengaduan.isiPengaduan}
                initialLikes={pengaduan.initialLikes}
                id={pengaduan.id}
                comments={dataKomentar} // Mengirimkan data komentar sebagai props
                onDelete={() => handleDeletePengaduan(pengaduan.id)}
              />
            ))}
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Komentar ({dataKomentar.length})</h2>
              <div className="space-y-4">
                {dataKomentar.map((komentar) => (
                  <KomentarPengaduan
                    key={komentar.id}
                    nama={komentar.nama}
                    waktu={komentar.waktu}
                    isiKomentar={komentar.isiKomentar}
                    onDelete={() => handleDeleteKomentar(komentar.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
