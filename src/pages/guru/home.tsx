import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
import Seo from '@/components/Seo';
import { DayPicker } from 'react-day-picker';
import Holidays from 'date-holidays';
import ScheduleCard from '@/components/ScheduleCard';
import Carousel from '@/components/Carousel';
import SummaryChart from '@/components/chart/SummaryChart';
import { Select } from '@chakra-ui/react';
import KehadiranChart from '@/components/chart/KehadiranChart';

export default function Home() {
  const initiallySelectedDate = new Date();
  const [disabledDays, setDisabledDays] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState(initiallySelectedDate);
  const [schedule, setSchedule] = React.useState([
    {
      title: 'Ilmu Pengetahuan Alam',
      status: 'inactive',
      startTime: '08:00',
      endTime: '09:00',
      day_of_week: 'Friday'
    },
    {
      title: 'Bahasa Indonesia',
      status: 'inactive',
      startTime: '23:00',
      endTime: '23:59',
      day_of_week: 'Friday'
    },
    {
      title: 'Matematika',
      status: 'inactive',
      startTime: '18:00',
      endTime: '19:00',
      day_of_week: 'Monday'
    }
  ]);

  React.useEffect(() => {
    const hd = new Holidays('ID');
    const currentYear = new Date().getFullYear();
    const holidays = hd.getHolidays(currentYear);
    const holidayDates = holidays.map((holiday) => new Date(holiday.date));
    setDisabledDays(holidayDates);
  }, []);

  React.useEffect(() => {
    const updateScheduleStatus = () => {
      const now = new Date();
      const currentDateString = now.toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
      const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

      setSchedule((prevSchedule) =>
        prevSchedule.map((item) => {
          const currentDate = new Date(currentDateString);
          const itemDate = new Date(selectedDate);
          const itemDayOfWeek = itemDate.toLocaleDateString('en-US', { weekday: 'long' });

          if (item.day_of_week === itemDayOfWeek && currentDate.toDateString() === itemDate.toDateString()) {
            if (currentTime === '00:00') {
              return { ...item, status: 'inactive' };
            } else if (currentTime > item.endTime) {
              return { ...item, status: 'done' };
            } else if (currentTime >= item.startTime && currentTime <= item.endTime) {
              return { ...item, status: 'ongoing' };
            }
          }
          return item;
        })
      );
    };

    const interval = setInterval(updateScheduleStatus, 60000);
    updateScheduleStatus();

    return () => clearInterval(interval);
  }, [selectedDate]);

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Home" />
        <div className="flex flex-col items-center justify-around pt-4 lg:pt-0 lg:items-start lg:flex-row">
          <div className="flex flex-col w-full max-w-sm gap-5 md:max-w-lg lg:max-w-xl 2xl:max-w-2xl 5xl:max-w-6xl">
            <Carousel />
            <div className="flex flex-col gap-3">
              <span className="flex justify-between">
                <h1 className="text-lg font-semibold">Rangkuman Nilai</h1>
                <button className="font-semibold text-Primary-500">Lihat Semua</button>
              </span>
              <div className="flex flex-col justify-between gap-4 p-5 rounded-3xl bg-Base-white">
                <Select placeholder="Kelas" size="md" className="w-fit">
                  <option value="1">X</option>
                  <option value="2">XI</option>
                  <option value="3">XII</option>
                </Select>
                <SummaryChart />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span className="flex justify-between">
                <h1 className="text-lg font-semibold">Rangkuman Kehadiran</h1>
                <button className="font-semibold text-Primary-500">Lihat Semua</button>
              </span>
              <div className="flex flex-col justify-between gap-4 p-5 rounded-3xl bg-Base-white">
                <Select placeholder="Kelas" size="md" className="w-fit">
                  <option value="1">X</option>
                  <option value="2">XI</option>
                  <option value="3">XII</option>
                </Select>
                <KehadiranChart />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start px-3 py-6 mt-6 rounded-xl bg-Base-white lg:mt-0">
            <DayPicker mode="single" selected={selectedDate} onSelect={setSelectedDate} showOutsideDays disabled={disabledDays} />
            <h1 className="pt-5 pl-6 font-semibold">{selectedDate.toDateString()}</h1>
            {schedule.map((item, index) => (
              <ScheduleCard
                key={index}
                title={item.title}
                status={item.status}
                startTime={item.startTime}
                endTime={item.endTime}
                day={item.day_of_week === selectedDate.toLocaleDateString('en-US', { weekday: 'long' })}
                className="mt-5"
              />
            ))}
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
