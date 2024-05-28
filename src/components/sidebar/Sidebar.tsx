import React from 'react';
import Logo from '../../../public/logo-smp.png';
import Image from 'next/image';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { LuLifeBuoy } from 'react-icons/lu';
import { useRouter } from 'next/router';
import { FiLogOut, FiSettings } from 'react-icons/fi';

export default function Sidebar() {
  const router = useRouter();
  const email = 'oliviarodrigo@gmail.com';
  const subString = email.slice(0, 16) + '...';
  const handleClick = () => {
    router.push('/support');
  };
  return (
    <div className="h-screen w-[272px]">
      <div className="fixed w-[272px] flex flex-col items-center h-screen py-8 overflow-x-auto bg-white">
        <div className="flex items-center justify-center gap-2">
          <Image src={Logo} alt="Logo" width={32} />
          <h1 className="font-semibold">SMPN 1 Magetan</h1>
        </div>
        <div className="place-content-between">
          <div className="flex flex-col items-start flex-auto w-full gap-2 px-4 py-10">
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </div>
          <div>
            <div className="flex flex-col items-center w-full gap-4 px-4 font-medium text-md">
              <button className="flex items-center w-full gap-4 rounded-md hover:bg-Gray-50 h-[40px]" onClick={handleClick}>
                <div>
                  <LuLifeBuoy />
                </div>
                <div className="text-md">Support</div>
              </button>
              <button className="flex items-center w-full gap-4 rounded-md hover:bg-Gray-50 h-[40px]" onClick={handleClick}>
                <div>
                  <FiSettings />
                </div>
                <div className="text-md">Settings</div>
              </button>
              <div className="mx-auto border-t w-full border-[#BBBBBB]">
                <div className="flex gap-4 mt-6">
                  <Image src="https://ui-avatars.com/api/?name=Olivia+Rodrigo" alt="Logo" width={40} height={24} className="rounded-full" />
                  <div>
                    <p className="hidden text-sm font-semibold lg:block">Olivia Rodrigo</p>
                    <p className="hidden text-sm text-Gray-600 lg:block">{subString}</p>
                  </div>
                  <FiLogOut className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
