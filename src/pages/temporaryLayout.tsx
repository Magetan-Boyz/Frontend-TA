import * as React from 'react';
import AuthenticatedLayout from '../components/layout/AuthenticatedLayout';
import Navbar from '../components/Navbar';
import Seo from '../components/Seo';
import { DayPicker } from 'react-day-picker';
import Holidays from 'date-holidays';
import ScheduleCard from '@/components/ScheduleCard';
// import { Calendar } from '@/components/ui/calendar';
// import { CarouselPlugin } from '@/components/Carousel';

export default function temporaryLayout() {
  const initiallySelectedDate = new Date();
  const [disabledDays, setDisabledDays] = React.useState([]);
  React.useEffect(() => {
    // Initialize the Holidays instance for Indonesia
    const hd = new Holidays('ID');

    // Get the holidays for the current year
    const currentYear = new Date().getFullYear();
    const holidays = hd.getHolidays(currentYear);

    // Map holidays to Date objects
    const holidayDates = holidays.map((holiday) => new Date(holiday.date));

    // Set the disabled days state
    setDisabledDays(holidayDates);
  }, []);
  const [selectedDate, setSelectedDate] = React.useState(initiallySelectedDate);

  const schedule = [
    {
      title: 'Meeting',
      status: 'done',
      time: '08:00 - 09:00'
    },
    {
      title: 'Lunch',
      status: 'ongoing',
      time: '12:00 - 13:00'
    },
    {
      title: 'Dinner',
      status: 'inactive',
      time: '18:00 - 19:00'
    }
  ];
  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Home" />
        <main className="flex bg-Gray-50">
          <div className="flex flex-col flex-auto">
            <Navbar />
            <div className="flex justify-between px-4 py-4">
              <div>Carousel{/* <CarouselPlugin /> */}</div>
              <div className="px-3 py-6 rounded-xl bg-Base-white">
                <DayPicker mode="single" selected={selectedDate} onSelect={setSelectedDate} showOutsideDays disabled={disabledDays} />
                <h1 className="pt-5 pl-6 font-semibold">{selectedDate.toDateString()}</h1>
                {schedule.map((item, index) => (
                  <ScheduleCard key={index} title={item.title} status={item.status} time={item.time} className="mt-5" />
                ))}
              </div>
            </div>
          </div>
        </main>
      </AuthenticatedLayout>
    </div>
  );
}
