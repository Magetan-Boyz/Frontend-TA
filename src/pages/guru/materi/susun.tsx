import * as React from 'react';
import { Avatar, AvatarGroup, Button, Select, Box, Text } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';
import dynamic from 'next/dynamic';
import AuthenticatedLayout from '@/components/layout/AuthenticatedLayout';
import Seo from '@/components/Seo';

// Dynamically import react-beautiful-dnd components
const DragDropContext = dynamic(() => import('react-beautiful-dnd').then((mod) => mod.DragDropContext), { ssr: false });
const Droppable = dynamic(() => import('react-beautiful-dnd').then((mod) => mod.Droppable), { ssr: false });
const Draggable = dynamic(() => import('react-beautiful-dnd').then((mod) => mod.Draggable), { ssr: false });

const initialItems = [
  {
    id: '1',
    content: 'IPA Fotosintesis Dasar',
    visible: false
  },
  {
    id: '2',
    content: 'Menanam Jagung',
    visible: true
  },
  {
    id: '3',
    content: 'Menanam Jagung',
    visible: true
  }
];

export default function Susun() {
  const [items, setItems] = React.useState(initialItems);
  const [winReady, setWinReady] = React.useState(false);
  const [expanded, setExpanded] = React.useState(null);

  React.useEffect(() => {
    setWinReady(true);
  }, []);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedItems = Array.from(items);
    const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, reorderedItem);
    setItems(reorderedItems);
  };

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <AuthenticatedLayout>
      <Seo templateTitle="Susunan Materi" />
      <div className="flex items-center justify-between w-full gap-4 p-5 rounded-md h-fit bg-Base-white">
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <Select placeholder="Pilih Kelas" size="md">
            <option value="1">X</option>
            <option value="2">XI</option>
            <option value="3">XII</option>
          </Select>
          <Select placeholder="Pilih Kelas" size="md">
            <option value="1">X</option>
            <option value="2">XI</option>
            <option value="3">XII</option>
          </Select>
        </div>
        <div className="flex flex-col items-end justify-between gap-3 lg:items-center lg:flex-row">
          <AvatarGroup size="sm" max={5}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>
          <Button leftIcon={<MdAdd />} colorScheme="gray" variant="outline">
            Tambah Guru Pengajar
          </Button>
        </div>
      </div>

      <div className="p-5 mt-5 rounded-md bg-Base-white">
        <div className="flex justify-between mb-4">
          <Text fontSize="lg" fontWeight="bold">
            Susunan Materi
          </Text>
          <div>
            <Button leftIcon={<MdAdd />} colorScheme="blue" variant="solid" mr={2}>
              Tambah Sesi
            </Button>
            <Button colorScheme="gray" variant="outline">
              Preview
            </Button>
          </div>
        </div>

        {winReady && (
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="droppable-accordion">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="droppable-accordion">
                  {items.map(({ id, content, visible }, index) => (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="mb-4 border rounded-md"
                        >
                          <div className="flex justify-between p-3 bg-gray-100 cursor-pointer" onClick={() => toggleExpand(id)}>
                            <Box flex="1" textAlign="left">
                              {visible ? <span>👁️</span> : <span>🚫</span>} {content}
                            </Box>
                          </div>
                          {expanded === id && (
                            <div className="p-3">
                              <Text>Content for {content}</Text>
                            </div>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>
    </AuthenticatedLayout>
  );
}
