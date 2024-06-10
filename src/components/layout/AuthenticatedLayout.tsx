import * as React from 'react';
import Navbar from '@/components/Navbar';

import Sidebar from '@/components/sidebar/Sidebar';

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className="lg:flex">
      <Sidebar />
      <div className="flex-auto">
        <main className="flex h-full bg-Gray-50 w-fit lg:w-full">
          <div className="flex flex-col flex-auto">
            <Navbar />
            <div className="flex flex-col gap-8 h-fit lg:p-10">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
