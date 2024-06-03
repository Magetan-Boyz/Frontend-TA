import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { FaRegFilePdf } from 'react-icons/fa6';
import PrimaryButton from '@/components/PrimaryButton';

export default function DetailTugas() {
  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Detail Tugas" />
        <main className="flex h-fit bg-Gray-50 w-fit lg:w-full">
          <div className="flex flex-col flex-auto">
            <Navbar />
            <div className="flex justify-center p-10 h-fit">
              <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white">
                <div className="flex justify-between p-3 border-b border-Gray-200">
                  <h1 className="font-semibold text-Gray-900">Assignment 1</h1>
                </div>
                <div className="flex gap-10 p-5 border-b border-Gray-200">
                  <h1 className="font-semibold text-Gray-600">
                    <span className="font-medium text-Gray-500">Deadline Pengumpulan :</span> January 6, 2023 11:59 AM
                  </h1>
                  <h1 className="font-semibold text-Gray-600">
                    <span className="font-medium text-Gray-500">Nama Siswa :</span> Dominica
                  </h1>
                  <h1 className="font-semibold text-Gray-600">
                    <span className="font-medium text-Gray-500">Bab Pembahasan :</span> Belajar Mengenai Fotosintesis
                  </h1>
                </div>
                <div className="flex flex-col gap-5 p-5">
                  <h1 className="text-sm font-semibold text-Gray-600">Deskripsi Tugas</h1>
                  <div className="w-full p-3 text-sm font-medium border rounded-lg h-fit text-Gray-500">This is Description</div>
                  <h1 className="text-sm font-semibold text-Gray-600">File(s) Tugas</h1>
                  <button className="flex gap-3 p-4 border rounded-lg w-fit h-fit">
                    <FaRegFilePdf size={40} className="" />
                    <div className="flex flex-col items-start justify-start">
                      <span className="text-sm font-medium text-Gray-700">Filename.pdf</span>
                      <span className="text-sm font-medium text-Gray-500">200 KB</span>
                    </div>
                  </button>
                  <h1 className="text-sm font-semibold text-Gray-600">Evaluasi</h1>
                  <table className="border-separate border-spacing-y-6">
                    <tr className="">
                      <td>
                        <h1 className="text-sm font-semibold text-Gray-600">Point</h1>
                      </td>
                      <td className="flex items-center gap-4">
                        <input type="number" className="p-2 border rounded-lg w-fit h-fit" />
                        <h1 className="text-sm text-Gray-500">Evaluasi tugas ini dengan nilai antara 0 sampai 50</h1>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h1 className="text-sm font-semibold text-Gray-600">Feedback</h1>
                      </td>
                      <td>
                        <textarea name="" className="p-2 border rounded-lg" id=""></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <PrimaryButton btnClassName="">Beri Nilai Tugas Ini</PrimaryButton>
                      </td>
                      <td></td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </AuthenticatedLayout>
    </div>
  );
}
