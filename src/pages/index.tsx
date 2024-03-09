import { NextPage } from 'next';
import React from 'react';
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { useRouter } from 'next/router';

const Index: NextPage = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push('/login');
  };
  return (
    <AuthenticatedLayout>
      <Seo templateTitle="Home" />
      <main className="flex">
        <div className="flex flex-col flex-auto">
          <Navbar />
          <div className="flex flex-col gap-0">
            <h1>Welcome to education-management-system!</h1>
            <button onClick={handleLogin}>login</button>
          </div>
        </div>
      </main>
    </AuthenticatedLayout>
  );
};

export default Index;
