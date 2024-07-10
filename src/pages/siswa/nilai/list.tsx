import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutSiswa/AuthenticatedLayout';
import Seo from '@/components/Seo';
import { Select, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import SecondaryButton from '@/components/SecondaryButton';
import { useRouter } from 'next/router';
import PrimaryButton from '@/components/PrimaryButton';
import { HiOutlinePrinter } from 'react-icons/hi';
import axios from 'axios';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function NilaiList() {
  const router = useRouter();
  const [grades, setGrades] = React.useState([]);
  const [semester, setSemester] = React.useState('');
  const [academicYear, setAcademicYear] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (semester && academicYear) {
      fetchGrades();
    }
  }, [semester, academicYear]);

  const fetchGrades = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/student/grades`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          semester,
          academicYear
        }
      });
      setGrades(response.data.data || []);
    } catch (error) {
      console.error('Error fetching grades:', error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrint = async () => {
    const input = document.getElementById('grades-table');
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('grades.pdf');
  };

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Nilai" />
        <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white">
          <div className="flex justify-between p-3 border-b border-Gray-200">
            <h1 className="text-lg font-semibold">Grades</h1>
            <div className="flex items-center gap-3">
              <Select placeholder="Semester" size="md" onChange={(e) => setSemester(e.target.value)}>
                <option value="1">Ganjil</option>
                <option value="2">Genap</option>
              </Select>
              <Select placeholder="Tahun Akademik" size="md" onChange={(e) => setAcademicYear(e.target.value)}>
                <option value="2023-2024">2023/2024</option>
                <option value="2024-2025">2024/2025</option>
                <option value="2025-2026">2025/2026</option>
              </Select>
              <PrimaryButton
                btnClassName="w-fit h-fit"
                size="mini"
                onClick={handlePrint}
                leftIcon={<HiOutlinePrinter className="text-xl" />}
              >
                Cetak Nilai Lengkap
              </PrimaryButton>
            </div>
          </div>
          <div className="m-5 border rounded-lg shadow-sm">
            <Table id="grades-table" className="">
              <Thead className="bg-Gray-50">
                <Tr>
                  <Th>No</Th>
                  <Th>Mata Pelajaran</Th>
                  <Th>Rata-Rata Formatif</Th>
                  <Th>Rata-Rata Sumatif</Th>
                  <Th>Rata-Rata Proyek</Th>
                </Tr>
              </Thead>
              <Tbody>
                {loading ? (
                  <Tr>
                    <Td colSpan="6" className="text-center">
                      Loading...
                    </Td>
                  </Tr>
                ) : (
                  grades.map((item, index) => (
                    <Tr key={item.id}>
                      <Td>{index + 1}</Td>
                      <Td>{item.subject}</Td>
                      <Td>{item.formative_scores}</Td>
                      <Td>{item.summative_scores}</Td>
                      <Td>{item.project_scores}</Td>
                    </Tr>
                  ))
                )}
              </Tbody>
            </Table>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
