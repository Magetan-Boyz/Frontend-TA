import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
import Seo from '@/components/Seo';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Input, Select, Button, Spinner, useToast } from '@chakra-ui/react';

export default function ChecklistKehadiran() {
  const [classes, setClasses] = React.useState([]);
  const [attendance, setAttendance] = React.useState([]);
  const [filteredAttendance, setFilteredAttendance] = React.useState([]);
  const [selectedClass, setSelectedClass] = React.useState('');
  const [startDate, setStartDate] = React.useState('');
  const [endDate, setEndDate] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const toast = useToast();

  const router = useRouter();

  React.useEffect(() => {
    const today = new Date();
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(today.getDate() - 7);
    setStartDate(oneWeekAgo.toISOString().split('T')[0]);
    setEndDate(today.toISOString().split('T')[0]);

    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/teacher/class`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setClasses(response.data.data || []);
    } catch (error) {
      console.error('Error fetching classes:', error);
      toast({
        title: 'Error',
        description: 'Gagal mengambil data kelas',
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    }
  };

  const fetchAttendance = async (classId) => {
    const token = localStorage.getItem('token');
    setLoading(true);
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/teacher/class/${classId}/attendance`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const attendanceData = response.data.data || [];
      setAttendance(attendanceData);
      filterAttendance(attendanceData);
    } catch (error) {
      console.error('Error fetching attendance:', error);
      toast({
        title: 'Error',
        description: 'Gagal mengambil data kehadiran',
        status: 'error',
        duration: 5000,
        isClosable: true
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClassChange = (e) => {
    const classId = e.target.value;
    setSelectedClass(classId);
    fetchAttendance(classId);
  };

  const handleDateChange = (e, dateType) => {
    const dateValue = e.target.value;
    if (dateType === 'start') {
      setStartDate(dateValue);
    } else {
      setEndDate(dateValue);
    }
  };

  const filterAttendance = (attendanceData) => {
    const filteredData = attendanceData.reduce((acc, item) => {
      const date = item.attendace_at.split('T')[0];
      if (!acc[date]) {
        acc[date] = {
          date,
          hadir: 0,
          tidakHadir: 0
        };
      }
      if (item.attendace_status === 'Hadir') {
        acc[date].hadir += 1;
      } else {
        acc[date].tidakHadir += 1;
      }
      return acc;
    }, {});

    const result = Object.values(filteredData).filter((item) => {
      const itemDate = new Date(item.date);
      const start = new Date(startDate);
      const end = new Date(endDate);
      return itemDate >= start && itemDate <= end;
    });

    setFilteredAttendance(result);
  };

  React.useEffect(() => {
    if (attendance.length > 0) {
      filterAttendance(attendance);
    }
  }, [startDate, endDate]);

  const handleDetailClick = (date, hadir, tidakHadir, classId) => {
    router.push({
      pathname: '/guru/kehadiran/detailKehadiranWali',
      query: { date, hadir, tidakHadir, classId }
    });
  };

  return (
    <div className="overflow-x-auto">
      <AuthenticatedLayout>
        <Seo templateTitle="Home" />
        <div className="w-full rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex items-center justify-between p-4">
            <h1 className="flex items-center gap-2 text-lg font-semibold">Detail Kehadiran Siswa</h1>
            <div className="flex items-center gap-2">
              <Input size="md" type="date" value={startDate} onChange={(e) => handleDateChange(e, 'start')} />
              <Input size="md" type="date" value={endDate} onChange={(e) => handleDateChange(e, 'end')} />
              <Select placeholder="Kelas" size="md" value={selectedClass} onChange={handleClassChange}>
                {classes.map((cls, index) => (
                  <option key={index} value={cls.class_id}>
                    {cls.class_name}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          <div className="">
            {loading ? (
              <Spinner size="xl" />
            ) : (
              <TableContainer className="">
                <Table variant="simple" className="">
                  <Thead>
                    <Tr>
                      <Th>Tanggal</Th>
                      <Th>Jumlah Siswa Hadir</Th>
                      <Th>Jumlah Siswa Tidak Hadir</Th>
                      <Th></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {filteredAttendance.map((item, index) => (
                      <Tr key={index}>
                        <Td>{item.date}</Td>
                        <Td>{item.hadir}</Td>
                        <Td>{item.tidakHadir}</Td>
                        <Td>
                          <Button
                            colorScheme="gray"
                            variant="outline"
                            size="sm"
                            onClick={() => handleDetailClick(item.date, item.hadir, item.tidakHadir, selectedClass)}
                          >
                            Detail
                          </Button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            )}
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
