import * as React from 'react';
import AuthenticatedLayout from '../components/layout/AuthenticatedLayout';
// import Navbar from '../components/Navbar';
import Seo from '../components/Seo';
import { DayPicker } from 'react-day-picker';
import Holidays from 'date-holidays';
import ScheduleCard from '@/components/ScheduleCard';
import { Carousel } from '@/components/ui/carousel';

export default function TemporaryLayout() {
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
        <div className="flex justify-between">
          <div>
            <Carousel />
          </div>
          <div className="px-3 py-6 rounded-xl bg-Base-white">
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
