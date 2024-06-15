import * as React from 'react';
import { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

import clsxm from '@/lib/clsxm';

type CardPengaduanProps = {
  className?: string;
  nama: string;
  waktu: string;
  isiPengaduan: string;
  onDelete: () => void; // Function to handle delete
};

export default function CardPengaduan({ className, nama, waktu, isiPengaduan, onDelete, ...rest }: CardPengaduanProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={clsxm('w-full h-fit border rounded-xl border-Gray-200 p-4', className)} {...rest}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={`https://ui-avatars.com/api/?name=${nama}`} alt="Avatar" width={40} height={40} className="rounded-full" />
          <div>
            <div className="font-semibold text-Gray-900">{nama}</div>
            <div className="text-sm text-Gray-500">{waktu}</div>
          </div>
        </div>
        <div className="relative">
          <button onClick={toggleDropdown} className="text-Gray-500 hover:text-Gray-700">
            <BsThreeDotsVertical />
          </button>
          {showDropdown && (
            <div className="absolute right-0 z-10 w-32 py-2 mt-2 bg-white border rounded-lg shadow-xl">
              <button onClick={onDelete} className="block w-full px-4 py-2 text-left text-Gray-700 hover:bg-Gray-100">
                Hapus
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 text-Gray-900">{isiPengaduan}</div>
    </div>
  );
}
