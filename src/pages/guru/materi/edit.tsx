import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
// import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { Avatar, AvatarGroup, Button } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';
import DetailMateri from '@/components/materi/DetailMateri';
import KontenMateri from '@/components/materi/KontenMateri';

export default function CreateMateri() {
  const [showKonten, setShowKonten] = React.useState('detailmateri');
  const [detailMateri, setDetailMateri] = React.useState(false);
  const [kontenMateri, setKontenMateri] = React.useState(false);
  const [classNameDetail, setClassNameDetail] = React.useState('');
  const [classNameKonten, setClassNameKonten] = React.useState('');

  const handleDetailMateri = (value: string) => {
    setShowKonten(value);
  };

  React.useEffect(() => {
    if (showKonten === 'detailmateri') {
      setDetailMateri(true);
      setClassNameDetail('bg-Primary-50 text-Primary-700');
      setKontenMateri(false);
    } else {
      setDetailMateri(false);
      setClassNameKonten('bg-Primary-50 text-Primary-700');
      setKontenMateri(true);
    }
  }, [showKonten]);
  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Tambah Materi" />
        <div className="flex flex-col justify-between w-full p-5 rounded-md lg:items-center lg:flex-row h-fit bg-Base-white">
          <div>
            <Button
              className={`font-semibold ${classNameDetail}`}
              variant="ghost"
              colorScheme="blue"
              value="detailmateri"
              onClick={() => handleDetailMateri('detailmateri')}
            >
              Detail Materi
            </Button>
            <Button
              className={`font-semibold ${classNameKonten}`}
              variant="ghost"
              colorScheme="blue"
              value="kontenmateri"
              onClick={() => handleDetailMateri('kontenmateri')}
            >
              Konten Materi
            </Button>
          </div>
          <div className="flex flex-col items-end justify-between gap-3 lg:items-center lg:flex-row">
            <AvatarGroup size="sm" max={5}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
              <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
              <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
            <Button leftIcon={<MdAdd />} colorScheme="gray" variant="outline">
              Tambah Guru Pengajar
            </Button>
          </div>
        </div>
        {detailMateri && <DetailMateri />}
        {kontenMateri && <KontenMateri />}
      </AuthenticatedLayout>
    </div>
  );
}
