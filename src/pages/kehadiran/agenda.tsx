import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
import Navbar from '@/components/Navbar';
// import { useRouter } from 'next/router';
import Seo from '@/components/Seo';
import AgendaCalendar from '@/components/AgendaCalendar';

export default function Agenda() {
  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Home" />
        <main className="flex bg-Gray-50 w-fit lg:w-full">
          <div className="flex flex-col flex-auto">
            <Navbar />
            <div className="flex justify-center p-10 h-fit">
              <div className="w-full h-full p-3 rounded-md shadow-lg bg-Base-white">
                <AgendaCalendar />
              </div>
            </div>
          </div>
        </main>
      </AuthenticatedLayout>
    </div>
  );
}
