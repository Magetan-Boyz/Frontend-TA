import * as React from 'react';

import Sidebar from '@/components/Sidebar';

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className="flex overflow-x-hidden">
      <Sidebar />
      <div className="flex-auto w-full">{children}</div>
    </div>
  );
}
