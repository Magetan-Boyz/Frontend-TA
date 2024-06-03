import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { useRouter } from 'next/router';

import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, Select, Avatar } from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';

export default function DetailNilai() {
  const router = useRouter();
  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Detail Nilai" />
        <main className="flex h-screen bg-Gray-50 w-fit lg:w-full">
          <div className="flex flex-col flex-auto">
            <Navbar />
            <div className="flex flex-col h-screen gap-8 p-10">
              <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white">
                <div className="flex justify-between w-full p-3 border-b border-Gray-200">
                  <h1 className="text-lg font-semibold">Grades</h1>
                  <div className="flex gap-3">
                    <Select placeholder="Kelas" size="md">
                      <option value="1">X</option>
                      <option value="2">XI</option>
                      <option value="3">XII</option>
                    </Select>
                  </div>
                </div>
                <div className="flex items-center gap-5 p-7">
                  <Avatar size="2xl" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" showBorder={true} className="shadow-lg" />
                  <div>
                    <h1 className="text-3xl font-semibold">John Doe</h1>
                    <h1 className=" text-Gray-600 text-medium">NISN : 1234567890</h1>
                    <h1 className="text-Gray-600 text-medium">Jenis Kelamin : Perempuan</h1>
                    <h1 className="text-Gray-600 text-medium">Kelas : X</h1>
                  </div>
                </div>
              </div>
              <Tabs variant="solid-rounded" colorScheme="cyan">
                <TabList className="flex justify-between">
                  <Tab>Asesmen Formatif</Tab>
                  <Tab>Asesmen Sumatif</Tab>
                  <Tab>Proyek</Tab>
                  <Tab>Sumatif Akhir Semester</Tab>
                  <Tab>Nilai Akhir</Tab>
                  <Button
                    colorScheme="gray"
                    variant="outline"
                    size="md"
                    leftIcon={<FiEdit />}
                    paddingLeft={8}
                    paddingRight={8}
                    onClick={() => router.push('/kehadiran/editKehadiran')}
                  >
                    Edit
                  </Button>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <p>Formative</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Summative</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Project</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </div>
        </main>
      </AuthenticatedLayout>
    </div>
  );
}
