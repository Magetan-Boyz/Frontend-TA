import { NextPage } from 'next';
import React from 'react';
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
import Navbar from '@/components/Navbar';

const Index: NextPage = () => {
  return (
    <AuthenticatedLayout>
      <main className="flex">
        <div className="flex flex-col flex-auto">
          <Navbar />
          <div className="flex flex-col gap-0">
            <h1>Welcome to education-management-system!</h1>
          </div>
        </div>
      </main>
    </AuthenticatedLayout>
  );
};

export default Index;
