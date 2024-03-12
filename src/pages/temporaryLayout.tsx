import * as React from 'react';
import AuthenticatedLayout from '../components/layout/AuthenticatedLayout';
import Navbar from '../components/Navbar';
import Seo from '../components/Seo';

export default function temporaryLayout() {
  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Home" />
        <main className="flex">
          <div className="flex flex-col flex-auto">
            <Navbar />
          </div>
        </main>
      </AuthenticatedLayout>
    </div>
  );
}
