import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutWali/AuthenticatedLayout';
// import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';

import { Tabs, TabList, TabPanels, Tab, TabPanel, Select, Avatar } from '@chakra-ui/react';

export default function DetailNilai() {
  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Detail Nilai" />
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
          <TabList className="flex justify-between p-3 rounded-lg bg-[#ffffff]">
            <Tab>Asesmen Formatif</Tab>
            <Tab>Asesmen Sumatif</Tab>
            <Tab>Proyek</Tab>
            <Tab>Sumatif Akhir Semester</Tab>
            <Tab>Nilai Akhir</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-collapse divide-y divide-Gray-200">
                  <thead className="bg-Primary-50">
                    <tr>
                      <th rowSpan={2} className="px-6 py-3 text-xs font-medium tracking-wider text-center uppercase border text-Gray-500">
                        Semester - Tahun Ajaran
                      </th>
                      <th colSpan={5} className="px-6 py-3 text-xs font-medium tracking-wider text-center uppercase text-Gray-500">
                        Formatif
                      </th>
                      <th rowSpan={2} className="px-6 py-3 text-xs font-medium tracking-wider text-center uppercase border text-Gray-500">
                        Nilai Rata-Rata
                      </th>
                    </tr>
                    <tr>
                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-Gray-500">1</th>
                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-Gray-500">2</th>
                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-Gray-500">3</th>
                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-Gray-500">4</th>
                      <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase text-Gray-500">5</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-Gray-200 bg-Base-white">
                    <tr>
                      <td className="px-6 py-4 border whitespace-nowrap">1 - 2022/2023</td>
                      <td className="px-6 py-4 whitespace-nowrap">87</td>
                      <td className="px-6 py-4 whitespace-nowrap">90</td>
                      <td className="px-6 py-4 whitespace-nowrap">80</td>
                      <td className="px-6 py-4 whitespace-nowrap">80</td>
                      <td className="px-6 py-4 whitespace-nowrap">80</td>
                      <td className="px-6 py-4 border whitespace-nowrap">80</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 border whitespace-nowrap">2 - 2022/2023</td>
                      <td className="px-6 py-4 whitespace-nowrap">87</td>
                      <td className="px-6 py-4 whitespace-nowrap">90</td>
                      <td className="px-6 py-4 whitespace-nowrap">80</td>
                      <td className="px-6 py-4 whitespace-nowrap">80</td>
                      <td className="px-6 py-4 whitespace-nowrap">80</td>
                      <td className="px-6 py-4 border whitespace-nowrap">80</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 border whitespace-nowrap">1 - 2023/2024</td>
                      <td className="px-6 py-4 whitespace-nowrap">87</td>
                      <td className="px-6 py-4 whitespace-nowrap">90</td>
                      <td className="px-6 py-4 whitespace-nowrap">80</td>
                      <td className="px-6 py-4 whitespace-nowrap">80</td>
                      <td className="px-6 py-4 whitespace-nowrap">80</td>
                      <td className="px-6 py-4 border whitespace-nowrap">80</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 border whitespace-nowrap">2 - 2023/2024</td>
                      <td className="px-6 py-4 whitespace-nowrap">87</td>
                      <td className="px-6 py-4 whitespace-nowrap">90</td>
                      <td className="px-6 py-4 whitespace-nowrap">80</td>
                      <td className="px-6 py-4 whitespace-nowrap">80</td>
                      <td className="px-6 py-4 whitespace-nowrap">80</td>
                      <td className="px-6 py-4 border whitespace-nowrap">80</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 border whitespace-nowrap">1 - 2024/2025</td>
                      <td className="px-6 py-4 whitespace-nowrap">87</td>
                      <td className="px-6 py-4 whitespace-nowrap">90</td>
                      <td className="px-6 py-4 whitespace-nowrap">80</td>
                      <td className="px-6 py-4 whitespace-nowrap">80</td>
                      <td className="px-6 py-4 whitespace-nowrap">80</td>
                      <td className="px-6 py-4 border whitespace-nowrap">80</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 border whitespace-nowrap">2 - 2024/2025</td>
                      <td className="px-6 py-4 border whitespace-nowrap">87</td>
                      <td className="px-6 py-4 whitespace-nowrap">90</td>
                      <td className="px-6 py-4 whitespace-nowrap">80</td>
                      <td className="px-6 py-4 whitespace-nowrap">80</td>
                      <td className="px-6 py-4 whitespace-nowrap">80</td>
                      <td className="px-6 py-4 border whitespace-nowrap">80</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabPanel>
            <TabPanel>
              <p>Summative</p>
            </TabPanel>
            <TabPanel>
              <p>Project</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </AuthenticatedLayout>
    </div>
  );
}
