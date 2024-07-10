import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
import { useRouter } from 'next/router';
import Seo from '@/components/Seo';
import { FiEdit } from 'react-icons/fi';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Tag, TagLabel, Input, Select, Button, useToast } from '@chakra-ui/react';
import axios from 'axios';

export default function DetailKehadiran() {
  const router = useRouter();
  const { date, classId } = router.query;
  const [students, setStudents] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const toast = useToast();

  React.useEffect(() => {
    if (classId) {
      fetchAttendanceDetails(classId);
    }
  }, [classId]);

  const fetchAttendanceDetails = async (classId) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/teacher/class/${classId}/attendance`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const attendanceData = response.data.data || [];
      const filteredData = attendanceData.filter((item) => item.attendace_at.split('T')[0] === date);
      setStudents(filteredData);
    } catch (error) {
      console.error('Error fetching attendance details:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch attendance details',
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    } finally {
      setLoading(false);
    }
  };

  const countUser = students.length;

  return (
    <div className="overflow-x-auto">
      <AuthenticatedLayout>
        <Seo templateTitle="Detail Kehadiran" />
        <div className="w-full rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex items-center justify-between p-4">
            <h1 className="flex items-center gap-2 text-lg font-semibold">
              Daftar siswa{' '}
              <Tag colorScheme="blue" borderRadius="full" size="sm">
                <TagLabel>{countUser} User</TagLabel>
              </Tag>
            </h1>
            <div className="flex items-center gap-2">
              <Input size="md" type="date" defaultValue={date} readOnly />
            </div>
          </div>
          <div className="">
            <TableContainer className="">
              <Table variant="simple" className="">
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Status</Th>
                    <Th>Keterangan</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {students.map((item, index) => (
                    <Tr key={index}>
                      <Td>{item.student_name}</Td>
                      <Td>
                        {item.attendace_status === 'Hadir' ? (
                          <Tag colorScheme="green" borderRadius="full" size="sm">
                            <TagLabel>Hadir</TagLabel>
                          </Tag>
                        ) : (
                          <Tag colorScheme="red" borderRadius="full" size="sm">
                            <TagLabel>Tidak Hadir</TagLabel>
                          </Tag>
                        )}
                      </Td>
                      <Td>{item.keterangan || '-'}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
