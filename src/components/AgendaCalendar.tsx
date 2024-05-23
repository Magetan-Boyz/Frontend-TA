import * as React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { PiFlagBannerBold } from 'react-icons/pi';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';

import clsxm from '@/lib/clsxm';

type AgendaCalendarProps = {
  className?: string;
};

export default function AgendaCalendar({ className, ...rest }: AgendaCalendarProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className={clsxm('', className)} {...rest}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height={800}
        droppable={true}
        dayMaxEventRows={true}
        dayMaxEvents={true}
        eventMaxStack={3}
        views={{
          dayGridMonth: {
            dayMaxEventRows: 2
          },
          timeGridWeek: {
            dayMaxEventRows: 2
          }
        }}
        timeZone="UTC"
        editable={true}
        eventStartEditable={true}
        eventDurationEditable={true}
        eventResizableFromStart={true}
        events={[
          {
            title: 'event 1',
            date: '2024-05-23',
            allDay: false,
            startTime: '14:00',
            endTime: '16:00',
            startRecur: '2024-05-23',
            endRecur: '2024-05-24'
          },
          {
            title: 'event 2',
            date: '2024-05-23',
            allDay: false,
            startTime: '14:00',
            endTime: '16:00',
            startRecur: '2024-05-23',
            endRecur: '2024-05-24'
          },
          {
            title: 'event 3',
            date: '2024-05-23',
            allDay: false,
            startTime: '14:00',
            endTime: '16:00',
            startRecur: '2024-05-23',
            endRecur: '2024-05-24'
          },
          {
            title: 'event 4',
            date: '2024-05-23',
            allDay: false,
            startTime: '14:00',
            endTime: '16:00',
            startRecur: '2024-05-23',
            endRecur: '2024-05-24'
          },
          {
            title: 'event 5',
            date: '2024-05-23',
            allDay: false,
            startTime: '14:00',
            endTime: '16:00',
            startRecur: '2024-05-23',
            endRecur: '2024-05-24'
          },
          {
            title: 'event 6',
            date: '2024-05-23',
            allDay: false,
            startTime: '14:00',
            endTime: '16:00',
            startRecur: '2024-05-23',
            endRecur: '2024-05-24'
          }
        ]}
        customButtons={{
          myCustomButton: {
            text: 'Tambah Kegiatan',
            click: function () {
              onOpen();
            }
          }
        }}
        headerToolbar={{
          left: 'prev,next today',
          center: '',
          right: 'dayGridMonth,timeGridWeek,timeGridDay myCustomButton'
        }}
      />
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
            <h1 className="text-lg font-semibold">Tambah Kegiatan Baru</h1>
            <p className="text-sm font-light text-Gray-600">Atur jadwal dan tambah kegiatanmu disini</p>
            <form action="" className="mt-3">
              <label htmlFor="judul" className="text-sm text-Gray-600">
                Judul
              </label>
              <input type="text" id="judul" className="w-full p-2 mt-2 mb-2 border-2 rounded-md border-Gray-300" />
              <label htmlFor="tanggal" className="text-sm text-Gray-600">
                Tanggal Diadakan
              </label>
              <input type="date" id="tanggal" className="w-full p-2 mt-2 border-2 rounded-md border-Gray-300" />
              <div className="flex justify-between gap-3 mt-2">
                <div className="flex flex-col w-full">
                  <label htmlFor="mulai" className="text-sm text-Gray-600">
                    Jam Mulai
                  </label>
                  <input type="time" id="mulai" className="p-2 mt-2 border-2 rounded-md border-Gray-300" />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="berakhir" className="text-sm text-Gray-600">
                    Jam Berakhir
                  </label>
                  <input type="time" id="berakhir" className="p-2 mt-2 border-2 rounded-md border-Gray-300" />
                </div>
              </div>
              <div className="flex flex-col mt-2 mb-2">
                <label htmlFor="jenis" className="text-sm text-Gray-600">
                  Jenis Kegiatan
                </label>
                <select name="jenis" id="jenis" className="p-2 mt-2 border-2 rounded-md border-Gray-300">
                  <option value="1">Offline</option>
                  <option value="2">Online</option>
                </select>
              </div>
              <label htmlFor="lokasi" className="text-sm text-Gray-600">
                Lokasi Diadakan
              </label>
              <input
                type="text"
                id="lokasi"
                placeholder="cth : Aula Sekolah"
                className="w-full p-2 mt-2 mb-2 border-2 rounded-md border-Gray-300"
              />
              <label htmlFor="deskripsi" className="text-sm text-Gray-600">
                Deskripsi
              </label>
              <textarea
                id="deskripsi"
                placeholder="cth : Tujuan diadakan acara ini adalah..."
                className="w-full p-2 mt-2 mb-2 border-2 rounded-md border-Gray-300"
              />
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
    </div>
  );
}
