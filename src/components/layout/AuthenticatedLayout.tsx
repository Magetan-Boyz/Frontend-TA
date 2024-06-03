import * as React from 'react';
import Navbar from '@/components/Navbar';

import Sidebar from '@/components/sidebar/Sidebar';

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className="lg:flex">
      <Sidebar />
      <div className="flex-auto">
        <main className="flex h-screen bg-Gray-50 w-fit lg:w-full">
          <div className="flex flex-col flex-auto">
            <Navbar />
            <div className="flex flex-col h-screen gap-8 p-10 overflow-x-auto">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}
