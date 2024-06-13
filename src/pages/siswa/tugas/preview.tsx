import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutSiswa/AuthenticatedLayout';
// import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { DayPicker, DayMouseEventHandler } from 'react-day-picker';
import Holidays from 'date-holidays';
import { isSameDay } from 'date-fns';
import PrimaryButton from '@/components/PrimaryButton';
import { Select } from '@chakra-ui/react';
import { FiSearch, FiCalendar, FiBook, FiInfo } from 'react-icons/fi';
import { format } from 'date-fns';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react';
import { PiFlagBannerBold, PiListBulletsBold } from 'react-icons/pi';
import SecondaryButton from '@/components/SecondaryButton';

export default function PreviewTugas() {
  const initiallySelectedDate = new Date();
  const [disabledDays, setDisabledDays] = React.useState([]);
  const [selectedDates, setSelectedDates] = React.useState([initiallySelectedDate]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const calendarContainerRef = React.useRef<HTMLDivElement>(null);
  const { isOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    const hd = new Holidays('ID');
    const currentYear = new Date().getFullYear();
    const holidays = hd.getHolidays(currentYear);
    const holidayDates = holidays.map((holiday) => new Date(holiday.date));
    setDisabledDays(holidayDates);
  }, []);

  const handleDayClick: DayMouseEventHandler = (day) => {
    if (selectedDates.some((selectedDate) => isSameDay(selectedDate, day))) {
      setSelectedDates(selectedDates.filter((selectedDate) => !isSameDay(selectedDate, day)));
    } else {
      setSelectedDates([...selectedDates, day]);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const tugas = [
    {
      id: 1,
      nama: 'Buatlah Artikel mengenai Lingkungan disekitarmu',
      startDate: '2022-10-06',
      endDate: '2022-10-20',
      jenisTugas: 'Essay',
      status: 'Selesai'
    },
    {
      id: 2,
      nama: 'Tugas Matematika',
      startDate: '2022-11-01',
      endDate: '2022-11-15',
      jenisTugas: 'Latihan',
      status: 'Belum Selesai'
    },
    {
      id: 3,
      nama: 'Prakarya: Buat Kerajinan Tangan',
      startDate: '2022-09-01',
      endDate: '2022-09-10',
      jenisTugas: 'Proyek',
      status: 'Terlambat'
    }
  ];

  const filteredTugas = tugas.filter((task) => task.nama.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Home" />
        <div className="w-full p-4 rounded-md shadow-lg h-fit bg-Base-white" ref={calendarContainerRef}>
          <div className="flex items-center justify-between gap-4 lg:border-b lg:border-Gray-200 lg:px-5 lg:pb-5">
            <div className="w-full">
              <h1 className="text-lg font-semibold">Daftar Tugas</h1>
            </div>
            <Select placeholder="Kelas" size="md" className="w-fit">
              <option value="1">X</option>
              <option value="2">XI</option>
              <option value="3">XII</option>
            </Select>
          </div>
          <DayPicker
            mode="multiple"
            selected={selectedDates}
            onDayClick={handleDayClick}
            disabled={disabledDays}
            styles={{
              head_cell: {
                width: `${calendarContainerRef.current?.clientWidth ?? 0}px`
              },
              table: {
                maxWidth: 'none'
              },
              day: {
                width: '',
                margin: 'auto'
              }
            }}
          />
          <div className="mt-4">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FiSearch />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between my-4">
            <Button variant="outline">
              <PiListBulletsBold className="text-lg" />
            </Button>
            <Button variant="outline">Cek Semua Tugas</Button>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-4">
            {filteredTugas.map((task) => (
              <div key={task.id} className="p-4 border rounded-md shadow-sm">
                <div className="flex justify-between">
                  <div>
                    <h2 className="font-semibold text-[#6941C6]">Tugas</h2>
                    <h3 className="mt-2 text-lg font-bold">{task.nama}</h3>
                  </div>
                  {task.status === 'Selesai' ? (
                    <PrimaryButton btnClassName="w-fit h-fit bg-Primary-200" disabled={true}>
                      Telah Submit
                    </PrimaryButton>
                  ) : task.status === 'Belum Selesai' ? (
                    <PrimaryButton btnClassName="w-fit h-fit">Submit Tugas</PrimaryButton>
                  ) : (
                    <PrimaryButton btnClassName="w-fit h-fit bg-Error-200">Terlambat Submit</PrimaryButton>
                  )}
                </div>
                <div className="justify-between lg:flex">
                  <div className="flex gap-3">
                    <div className="flex items-center gap-3 mt-2 text-gray-500">
                      <FiCalendar />
                      <span>Start: {format(new Date(task.startDate), 'MMMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-2 text-gray-500">
                      <FiBook />
                      <span>{task.jenisTugas}</span>
                    </div>
                  </div>
                  <div className="flex items-center mt-1 font-semibold text-Gray-600">
                    <h1>
                      <span className="text-Gray-900">Deadline :</span> {format(new Date(task.endDate), 'MMMM d, yyyy')}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <div className="p-2 rounded-md w-[36px] shadow-md border border-Gray-200 bg-Base-white">
                <PiFlagBannerBold className="rotate-0" />
              </div>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <h1 className="text-lg font-semibold">Tugas</h1>
              <p className="text-sm font-light text-Gray-600">Isi kolom berikut untuk menambah atau mengedit tugas</p>
              <form action="" className="mt-3">
                <label htmlFor="judul" className="text-sm text-Gray-600">
                  Judul
                </label>
                <input type="text" id="judul" className="w-full p-2 mt-2 mb-2 border-2 rounded-md border-Gray-300" />
                <div className="flex flex-col mt-2 mb-2">
                  <label htmlFor="jenis" className="text-sm text-Gray-600">
                    Jenis Tugas
                  </label>
                  <select name="jenis" id="jenis" className="p-2 mt-2 border-2 rounded-md border-Gray-300">
                    <option value="1">Tugas Harian</option>
                    <option value="2">Tugas</option>
                  </select>
                </div>
                <label htmlFor="deskripsi" className="text-sm text-Gray-600">
                  Deskripsi
                </label>
                <textarea
                  id="deskripsi"
                  placeholder="cth. Buat artikel mengenai keluarga dalam bahasa inggris..."
                  className="w-full p-2 mt-2 mb-2 border-2 rounded-md border-Gray-300"
                />
                <label htmlFor="link" className="text-sm text-Gray-600">
                  Link
                </label>
                <div className="relative flex items-center mt-2 mb-2 border-2 rounded-md border-Gray-300">
                  <span className="px-3 border-r text-Gray-600">https://</span>
                  <input
                    type="text"
                    id="link"
                    className="w-full p-2 border-0 rounded-r-md focus:outline-none"
                    placeholder="www.example.com"
                  />
                </div>
                <div className="flex w-full gap-2 text-Gray-600">
                  <FiInfo className="text-md" />
                  <p className="text-sm">Dapat diisi dengan pendukung seperti Google forms, Video YouTube dan lainnya</p>
                </div>
              </form>
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
