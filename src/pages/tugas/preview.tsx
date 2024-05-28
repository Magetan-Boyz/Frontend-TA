import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
import Navbar from '@/components/Navbar';
import Seo from '@/components/Seo';
import { DayPicker, DayMouseEventHandler } from 'react-day-picker';
import Holidays from 'date-holidays';
import { isSameDay } from 'date-fns';

export default function PreviewTugas() {
  const initiallySelectedDate = new Date();
  const [disabledDays, setDisabledDays] = React.useState([]);
  const [selectedDates, setSelectedDates] = React.useState([initiallySelectedDate]);
  const calendarContainerRef = React.useRef<HTMLDivElement>(null);

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

  return (
    <div>
      <AuthenticatedLayout>
        <Seo templateTitle="Home" />
        <main className="flex bg-Gray-50">
          <div className="flex flex-col flex-auto">
            <Navbar />
            <div className="flex justify-center h-screen p-10">
              <div className="w-full p-3 rounded-md shadow-lg h-fit bg-Base-white" ref={calendarContainerRef}>
                <DayPicker
                  mode="multiple"
                  selected={selectedDates}
                  onDayClick={handleDayClick}
                  disabled={disabledDays}
                  className=""
                  styles={{
                    head_cell: {
                      width: `${calendarContainerRef.current?.parentElement ?? 0}px`
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
              </div>
            </div>
          </div>
        </main>
      </AuthenticatedLayout>
    </div>
  );
}
