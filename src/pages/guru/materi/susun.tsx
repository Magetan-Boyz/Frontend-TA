import * as React from 'react';
import { Avatar, AvatarGroup, Button, Select, Text, Tag } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
import Seo from '@/components/Seo';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { AiOutlineDrag } from 'react-icons/ai';
import { BsEye, BsEyeSlash, BsLink } from 'react-icons/bs';
import { MdKeyboardArrowDown, MdOutlineAddBox } from 'react-icons/md';

// Define types for the items and state
type Item = {
  id: string;
  content: string;
  sub?: string[];
  visible: string;
};

const initialItems: Item[] = [
  {
    id: '550e8400-e29b-41d4-a716-446655440000',
    content: 'IPA Fotosintesis Dasar',
    sub: ['IPA Fotosintesis Dasar', 'IPA Fotosintesis Menengah', 'IPA Fotosintesis Tingkat Lanjut'],
    visible: 'hidden'
  },
  {
    id: '4e0c103b-e191-4fca-97b8-13541e4a49fd',
    content: 'Menanam Jagung',
    sub: ['Menanam Jagung', 'Menanam Jagung', 'Menanam Jagung'],
    visible: 'all'
  },
  {
    id: '62a5cfb7-ff85-42b7-a244-9b3312a71718',
    content: 'Menanam Jagung',
    sub: ['Menanam Jagung', 'Menanam Jagung', 'Menanam Jagung'],
    visible: 'invited'
  }
];

export default function Susun() {
  const [items, setItems] = React.useState<Item[]>(initialItems);
  const [winReady, setWinReady] = React.useState(false);
  const [expanded, setExpanded] = React.useState<string | null>(null);

  React.useEffect(() => {
    setWinReady(true);
  }, []);

  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const reorderedItems = Array.from(items);
    const [reorderedItem] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 0, reorderedItem);
    setItems(reorderedItems);
  };

  const toggleExpand = (id: string) => {
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

      <div className="pb-5 mt-5 rounded-md bg-Base-white">
        <div className="flex justify-between p-5 mb-4">
          <Text fontSize="lg" fontWeight="bold">
            Susunan Materi
          </Text>
          <div>
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
                        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="mb-4">
                          <div
                            className="flex items-center justify-between p-3 cursor-pointer bg-Gray-100"
                            onClick={() => toggleExpand(id)}
                          >
                            <div className="flex items-center gap-5">
                              <AiOutlineDrag className="text-xl" />
                              <div className="p-3 rounded-md bg-Base-white">
                                {visible === 'hidden' ? (
                                  <BsEyeSlash className="text-xl" />
                                ) : visible === 'all' ? (
                                  <BsEye className="text-xl" />
                                ) : (
                                  <BsLink className="text-xl" />
                                )}
                              </div>
                              <Tag colorScheme="blue" borderRadius="full" border={1} size="sm">
                                {id.slice(0, 4)}
                              </Tag>
                              <h1 className="font-bold text-md">{content}</h1>
                            </div>
                            <div className="flex items-center gap-5">
                              {visible === 'invited' ? (
                                <>
                                  <AvatarGroup size="sm" max={5} className="hidden md:block">
                                    <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                                    <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                                    <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                                    <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                                    <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
                                  </AvatarGroup>
                                  <Button leftIcon={<MdAdd />} colorScheme="gray" bg="white" size="sm" variant="outline">
                                    Tambah Siswa
                                  </Button>
                                </>
                              ) : (
                                ''
                              )}
                              <MdKeyboardArrowDown className={`text-xl ${expanded === id ? 'transform rotate-180' : ''}`} />
                            </div>
                          </div>
                          {expanded === id && (
                            <>
                              {items[index].sub?.map((item, index) => (
                                <div key={index} className="p-5 border-b border-Gray-200">
                                  <h1 className="font-bold text-md">Content for {item}</h1>
                                </div>
                              ))}
                              <button className="flex items-center gap-5 p-5 border-b border-Gray-200">
                                <MdOutlineAddBox className="text-xl" /> <h1 className="font-bold text-md">Tambah Sesi</h1>
                              </button>
                            </>
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
        <div className="flex justify-end p-5">
          <Button leftIcon={<MdAdd />} colorScheme="gray" variant="outline" mr={2}>
            Tambah Materi
          </Button>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
