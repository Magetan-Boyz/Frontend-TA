import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import Seo from '@/components/Seo';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
import * as React from 'react';
import { BsEye } from 'react-icons/bs';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { HiDotsVertical } from 'react-icons/hi';
import { Menu, MenuButton, IconButton, MenuList, MenuItem } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';

export default function create() {
  const [question] = React.useState([
    {
      id: '550e8400-e29b-41d4-a716-446655440000',
      judul: 'Proses memasak makanan pada tumbuhan disebut?',
      deskripsi: 'Deskripsi Matematika',
      kelas: 'XII',
      deadline: '12-12-2021',
      type: 'Pilihan Ganda'
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440001',
      judul: 'Proses memasak makanan pada tumbuhan disebut?',
      deskripsi: 'Deskripsi Matematika',
      kelas: 'XII',
      deadline: '12-12-2021',
      type: 'Pilihan Ganda'
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440002',
      judul: 'Proses memasak makanan pada tumbuhan disebut?',
      deskripsi: 'Deskripsi Matematika',
      kelas: 'XII',
      deadline: '12-12-2021',
      type: 'Pilihan Ganda'
    }
  ]);
  return (
    <div>
      <AuthenticatedLayout>
        <Seo title="Create Kuis" />
        <div className="w-full rounded-md shadow bg-Base-white h-fit">
          <div className="flex flex-col justify-between gap-5 p-5 lg:flex-row lg:items-center">
            <div className="flex items-center gap-3">
              <PrimaryButton btnClassName="w-fit h-fit bg-Primary-50 text-Primary-700 rounded" onClick={() => console.log('clicked')}>
                Pertanyaan
              </PrimaryButton>
              <PrimaryButton btnClassName="w-fit h-fit bg-Base-white text-Gray-500 rounded" onClick={() => console.log('clicked')}>
                Pengaturan
              </PrimaryButton>
            </div>
            <div className="flex items-center gap-3">
              <SecondaryButton btnClassName="w-fit h-fit" leftIcon={<BsEye className="text-lg" />} onClick={() => console.log('clicked')}>
                Preview
              </SecondaryButton>
              <PrimaryButton btnClassName="w-fit h-fit" onClick={() => console.log('clicked')}>
                Simpan
              </PrimaryButton>
            </div>
          </div>
          {question.map((item, index) => (
            <div className="flex items-center justify-between w-full p-5 border-b h-fit bg-Gray-50 border-Gray-200" key={index}>
              <div className="flex gap-3">
                <label htmlFor={item.id}>{item.judul}</label>
              </div>
              <Menu>
                <MenuButton as={IconButton} icon={<HiDotsVertical className="text-Gray-500" />} variant="ghost" />
                <MenuList>
                  <MenuItem icon={<FiEdit />}>Edit</MenuItem>
                  <MenuItem icon={<FiTrash2 />}>Delete</MenuItem>
                </MenuList>
              </Menu>
            </div>
          ))}
          <div className="px-5 pt-5 pb-10 lg:flex lg:justify-end">
            <SecondaryButton
              btnClassName="w-full h-fit lg:w-fit"
              leftIcon={<MdAdd className="text-lg" />}
              onClick={() => console.log('clicked')}
            >
              Pertanyaan
            </SecondaryButton>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
