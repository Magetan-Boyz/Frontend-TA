import React from 'react';
import Logo from '../../../public/logo-smp.png';
import Image from 'next/image';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';

export default function Sidebar() {
  return (
    <div className="z-50 w-[272px]">
      <div className="fixed z-50 flex flex-col w-[272px] items-center h-screen py-8 bg-white">
        <div className="flex items-center justify-center gap-2">
          <Image src={Logo} alt="Logo" width={32} />
          <h1 className="font-semibold">SMPN 1 Magetan</h1>
        </div>
        <div className="flex flex-col items-start flex-auto w-full gap-2 px-4 py-10">
          {SidebarData.map((item, index) => {
            return <SubMenu item={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
