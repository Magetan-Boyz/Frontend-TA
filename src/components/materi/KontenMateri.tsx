import * as React from 'react';
import { Button, Stack, Input, Textarea } from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';

import clsxm from '@/lib/clsxm';
import PrimaryButton from '../PrimaryButton';

type KontenMateriProps = {
  className?: string;
};

type Session = {
  id: number;
  name: string;
  description?: string;
  link?: string;
};

export default function KontenMateri({ className, ...rest }: KontenMateriProps) {
  const [sessions, setSessions] = React.useState<Session[]>([{ id: 1, name: 'Sesi 1' }]);
  const [selectedSession, setSelectedSession] = React.useState<Session | null>(sessions[0]);

  const handleAddSession = () => {
    const newSession = {
      id: sessions.length + 1,
      name: `Sesi ${sessions.length + 1}`
    };
    setSessions([...sessions, newSession]);
  };

  const handleRemoveSession = (id: number) => {
    setSessions(sessions.filter((session) => session.id !== id));
    if (selectedSession?.id === id) {
      setSelectedSession(null);
    }
  };

  const handleSelectSession = (session: Session) => {
    setSelectedSession(session);
  };

  return (
    <div className={clsxm('flex flex-col lg:flex-row gap-8', className)} {...rest}>
      <div className="flex items-center gap-5 p-5 rounded-md h-fit bg-Base-white lg:hidden">
        <div className="border-r">
          <h1 className="m-3 text-sm font-semibold text-Gray-500">Sesi</h1>
        </div>
        <Stack spacing={3} direction="row">
          {sessions.map((session) => (
            <Button
              key={session.id}
              className="font-semibold"
              variant="ghost"
              colorScheme="blue"
              onClick={() => handleSelectSession(session)}
            >
              {session.name}
              <FiTrash2 className="ml-2" onClick={() => handleRemoveSession(session.id)} />
            </Button>
          ))}
        </Stack>
        <PrimaryButton btnClassName="w-fit h-fit" onClick={handleAddSession}>
          Tambah Sesi
        </PrimaryButton>
      </div>
      <div className="items-center hidden h-full gap-5 p-5 rounded-md w-fit lg:flex lg:flex-col bg-Base-white">
        <div className="border-b">
          <h1 className="m-3 text-sm font-semibold text-Gray-500">Sesi</h1>
        </div>
        <Stack spacing={3} direction="column">
          {sessions.map((session) => (
            <Button
              key={session.id}
              className="font-semibold"
              variant="ghost"
              colorScheme="blue"
              onClick={() => handleSelectSession(session)}
            >
              {session.name}
              <FiTrash2 className="ml-2" onClick={() => handleRemoveSession(session.id)} />
            </Button>
          ))}
        </Stack>
        <PrimaryButton btnClassName="w-fit h-fit" onClick={handleAddSession}>
          Tambah Sesi
        </PrimaryButton>
      </div>
      {selectedSession && (
        <div className="flex flex-col w-full gap-4 p-5 rounded-md lg:p-5 lg:rounded-l-none bg-Base-white lg:flex-1">
          <div className="flex flex-col gap-3">
            <h1 className="text-sm font-semibold text-Gray-600">Nama Sesi</h1>
            <Input value={selectedSession.name} readOnly />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-sm font-semibold text-Gray-600">Deskripsi Materi</h1>
            <Textarea value={selectedSession.description || ''} placeholder="Deskripsi materi" />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-sm font-semibold text-Gray-600">Link</h1>
            <Input value={selectedSession.link || ''} placeholder="https://www.example.com" />
          </div>
        </div>
      )}
    </div>
  );
}
