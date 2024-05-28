import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

export default function DetailTugas() {
  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Detail Tugas" />
        <main className="flex bg-Gray-50">
          <div className="flex flex-col flex-auto">
            <Navbar />
            <div className="flex justify-center h-screen p-10">
              <div className="w-full h-full p-3 rounded-md shadow-lg bg-Base-white">
                <h1 className="text-2xl font-semibold text-Base-black">Detail Tugas</h1>
                <div className="flex flex-col mt-5">
                  <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="text-sm text-Base-black">
                      Judul Tugas
                    </label>
                    <input type="text" id="title" className="w-full p-2 mt-1 border rounded-md border-Base-gray" />
                  </div>
                  <div className="flex flex-col mb-5">
                    <label htmlFor="description" className="text-sm text-Base-black">
                      Deskripsi Tugas
                    </label>
                    <textarea id="description" className="w-full p-2 mt-1 border rounded-md border-Base-gray" />
                  </div>
                  <div className="flex flex-col mb-5">
                    <label htmlFor="deadline" className="text-sm text-Base-black">
                      Deadline
                    </label>
                    <input type="date" id="deadline" className="w-full p-2 mt-1 border rounded-md border-Base-gray" />
                  </div>
                  <div className="flex flex-col mb-5">
                    <label htmlFor="attachment" className="text-sm text-Base-black">
                      Lampiran
                    </label>
                    <input type="file" id="attachment" className="w-full p-2 mt-1 border rounded-md border-Base-gray" />
                  </div>
                  <div className="flex justify-end">
                    <button className="px-5 py-2 text-sm text-white rounded-md bg-Base-blue">Simpan</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </AuthenticatedLayout>
    </div>
  );
}
