import { NextPage } from 'next';
import React from 'react';
import Seo from '../components/Seo';
import Image from 'next/image';
import { useRouter } from 'next/router';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '../../public/logo-smp.png'.
import { Logo } from '../../public/logo-smp.png';
import PrimaryButton from '../components/PrimaryButton';

const Index: NextPage = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push('/login');
  };
  return (
    <main className="">
      <Seo templateTitle="Home" />
      <div className="flex flex-col items-center justify-center h-screen px-20 bg-white w-100">
        <Image src={Logo.src} className="scale-75" alt="my darLogo" width={Logo.width} height={Logo.height} />
        <h1 className="py-5 text-center">Welcome to Education Management System - SMPN1 Magetan</h1>
        <PrimaryButton onClick={handleLogin}>Login</PrimaryButton>
      </div>
    </main>
  );
};

export default Index;
