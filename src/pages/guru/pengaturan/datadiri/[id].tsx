import * as React from 'react';
import axios from 'axios';
import { Box, Avatar, Flex, FormControl, FormLabel, Input, Select, Text, HStack } from '@chakra-ui/react';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
import Seo from '@/components/Seo';
import PrimaryButton from '@/components/PrimaryButton';

// Define the type for a province item
interface Province {
  id: string;
  name: string;
}

export default function DetailDataDiri() {
  const [provinsi, setProvinsi] = React.useState<Province[]>([]);
  const [kabupaten, setKabupaten] = React.useState<Province[]>([]);
  const [selectedProvinsi, setSelectedProvinsi] = React.useState<string>('');
  const [selectedKabupaten, setSelectedKabupaten] = React.useState<string>('');

  const handleProvinsiChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProvinsi(event.target.value);
  };

  const handleKabupatenChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedKabupaten(event.target.value);
  };

  React.useEffect(() => {
    axios
      .get<Province[]>('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
      .then((response) => {
        setProvinsi(response.data);
      })
      .catch((error) => {
        console.error('Error fetching provinces:', error);
      });
  }, []);

  React.useEffect(() => {
    if (selectedProvinsi) {
      axios
        .get<Province[]>(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvinsi}.json`)
        .then((response) => {
          setKabupaten(response.data);
        })
        .catch((error) => {
          console.error('Error fetching regencies:', error);
        });
    }
  }, [selectedProvinsi]);

  return (
    <AuthenticatedLayout>
      <Seo templateTitle="Detail Data Diri" />
      <Box bg="Base-white" p={5} rounded="md" shadow="lg">
        <Flex justify="space-between" borderBottom="1px" borderColor="Gray-200" p={3}>
          <Text fontSize="md" fontWeight="semibold">
            Detail Data Diri Siswa
          </Text>
        </Flex>
        <Flex align="center" gap={5} p={7}>
          <Avatar size="2xl" name="Segun Adebayo" src="https://bit.ly/sage-adebayo" showBorder={true} shadow="lg" />
          <Box>
            <Text fontSize="3xl" fontWeight="semibold">
              John Doe
            </Text>
            <Text color="Gray-600">NISN : 1234567890</Text>
            <Text color="Gray-600">Jenis Kelamin : Perempuan</Text>
            <Text color="Gray-600">Kelas : X</Text>
          </Box>
        </Flex>
        <Box p={3}>
          <Box borderBottom="1px" borderColor="Gray-200" pb={3}>
            <Text fontSize="md" fontWeight="semibold">
              Data Pribadi
            </Text>
          </Box>
          <FormControl mt={4}>
            <FormLabel>Tempat Lahir</FormLabel>
            <Input placeholder="Magetan" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Tanggal Lahir</FormLabel>
            <Input placeholder="06 Juni 2008" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Alamat</FormLabel>
            <Input placeholder="Jln H.A Salim No 255 Desa Pelem" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Provinsi Asal</FormLabel>
            <Select placeholder="Pilih Provinsi" value={selectedProvinsi} onChange={handleProvinsiChange}>
              {provinsi.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Kabupaten Asal</FormLabel>
            <Select placeholder="Pilih Kabupaten" value={selectedKabupaten} onChange={handleKabupatenChange}>
              {kabupaten.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Golongan Darah</FormLabel>
            <Select placeholder="Pilih Golongan Darah">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="AB">AB</option>
              <option value="O">O</option>
            </Select>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Agama</FormLabel>
            <Select placeholder="Pilih Agama">
              <option value="Islam">Islam</option>
              <option value="Katolik">Katolik</option>
              <option value="Protestan">Protestan</option>
              <option value="Hindu">Hindu</option>
              <option value="Buddha">Buddha</option>
              <option value="Konghucu">Konghucu</option>
            </Select>
          </FormControl>
          <Box borderBottom="1px" borderColor="Gray-200" pt={5} pb={3}>
            <Text fontSize="md" fontWeight="semibold">
              Data Akun Sosial
            </Text>
          </Box>
          <FormControl mt={4}>
            <HStack spacing={4} className="items-center">
              <Box flex="1">
                <FormLabel>No Handphone</FormLabel>
                <Input placeholder="089503889774" />
              </Box>
              <PrimaryButton btnClassName="w-fit h-fit">Hubungi WA</PrimaryButton>
            </HStack>
          </FormControl>
          <FormControl mt={4}>
            <HStack spacing={4}>
              <Box flex="1">
                <FormLabel>No. Handphone Orang Tua</FormLabel>
                <Input placeholder="089503889774" />
              </Box>
              <PrimaryButton btnClassName="w-fit h-fit">Hubungi WA</PrimaryButton>
            </HStack>
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input placeholder="dominica@gmail.com" />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email Institusi</FormLabel>
            <Input placeholder="dominica@student.snesma.ac.id" />
          </FormControl>
        </Box>
      </Box>
    </AuthenticatedLayout>
  );
}
