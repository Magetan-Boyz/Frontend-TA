import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
// import Navbar from '@/components/Navbar';
// import { useRouter } from 'next/router';
import Seo from '@/components/Seo';
import { FiSave } from 'react-icons/fi';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Tag,
  TagLabel,
  Input,
  Select,
  Radio,
  RadioGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';

export default function EditKehadiran() {
  // const router = useRouter();
  const status = ['Hadir', 'Sakit', 'Izin', 'Alpha'];
  const [user, setUser] = React.useState([
    {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      nim: '1234567890',
      status: 'Hadir',
      keterangan: '-'
    },
    {
      name: 'Jane Doe',
      email: 'jane@gmail.com',
      nim: '0987654321',
      status: 'Hadir',
      keterangan: '-'
    },
    {
      name: 'John Smith',
      email: 'john@gmail.com',
      nim: '1234567890',
      status: 'Hadir',
      keterangan: '-'
    }
  ]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const setKeteranganHandler = (index: number, value: string) => {
    setUser((prevData) => {
      const newData = [...prevData];
      newData[index].keterangan = value;
      return newData;
    });
  };

  const setStatusHandler = (index: number, value: string) => {
    setUser((prevData) => {
      const newData = [...prevData];
      newData[index].status = value;
      return newData;
    });
  };

  const handleBlur = (index: number) => {
    setUser((prevData) => {
      const newData = [...prevData];
      if (!newData[index].keterangan) {
        newData[index].keterangan = '-';
      }
      return newData;
    });
  };

  const countUser = user.length;

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Home" />
        <div className="w-full h-full rounded-md shadow-lg bg-Base-white">
          <div className="flex items-center justify-between p-4">
            <h1 className="flex items-center gap-2 text-lg font-semibold">
              Daftar siswa{' '}
              <Tag colorScheme="blue" borderRadius="full" size="sm">
                <TagLabel>{countUser} User</TagLabel>
              </Tag>
            </h1>
            <div className="flex items-center gap-2">
              <Input size="md" type="date" className="w-full" />
              <Select placeholder="Kelas" size="md">
                <option value="1">X</option>
                <option value="2">XI</option>
                <option value="3">XII</option>
              </Select>
              <PrimaryButton btnClassName="h-[36px] w-[84px] rounded-md" onClick={onOpen}>
                Save
              </PrimaryButton>
            </div>
          </div>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Nomor Induk</Th>
                  <Th>Email</Th>
                  <Th>Status</Th>
                  <Th>Keterangan</Th>
                </Tr>
              </Thead>
              <Tbody>
                {user.map((item, index) => (
                  <Tr key={index}>
                    <Td>{item.name}</Td>
                    <Td>{item.nim}</Td>
                    <Td>{item.email}</Td>
                    <Td>
                      <RadioGroup value={item.status} onChange={(value) => setStatusHandler(index, value)} className="flex gap-4">
                        {status.map((statusItem, statusIndex) => (
                          <div
                            key={statusIndex}
                            className="relative flex items-center p-2 border border-gray-200 rounded-full cursor-pointer bg-Gray-50 group"
                          >
                            <Radio value={statusItem} className="form-radio">
                              <span className="ml-2">{statusItem}</span>
                            </Radio>
                          </div>
                        ))}
                      </RadioGroup>
                    </Td>
                    <Td>
                      <Input
                        variant="unstyled"
                        placeholder="Berikan Keterangan"
                        value={item.keterangan}
                        onChange={(e) => setKeteranganHandler(index, e.target.value)}
                        onBlur={() => handleBlur(index)}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay backdropBlur="10px" />
          <ModalContent>
            <ModalHeader className="mt-3">
              <div className="p-2 w-[36px] rounded-full bg-Warning-100">
                <FiSave className="text-Warning-600" />
              </div>
            </ModalHeader>
            <ModalCloseButton className="mt-4" />
            <ModalBody>
              <h1 className="text-lg font-semibold">Simpan Perubahan</h1>
              <p className="text-sm">Apakah kamu ingin menyimpan perubahan?</p>
            </ModalBody>

            <ModalFooter className="flex justify-center gap-3">
              <SecondaryButton onClick={onClose} btnClassName="font-semibold">
                Batal
              </SecondaryButton>
              <PrimaryButton onClick={onClose} btnClassName="font-semibold">
                Konfirmasi
              </PrimaryButton>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </AuthenticatedLayout>
    </div>
  );
}
