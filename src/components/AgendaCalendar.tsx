import * as React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { PiFlagBannerBold } from 'react-icons/pi';

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
              <PiFlagBannerBold className="" />
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Modal Body</p>
          </ModalBody>
          <ModalFooter>
            <button onClick={onClose}>Close</button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
