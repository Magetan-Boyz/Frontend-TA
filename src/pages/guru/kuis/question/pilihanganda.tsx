import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
import Seo from '@/components/Seo';
import { Box, useRadio, useRadioGroup, UseRadioProps } from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';
import SecondaryButton from '@/components/SecondaryButton';
import { MdAdd } from 'react-icons/md';
import PrimaryButton from '@/components/PrimaryButton';

interface RadioCardProps extends UseRadioProps {
  children: React.ReactNode;
}

function RadioCard(props: RadioCardProps) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" w="full" display="flex" alignItems="center">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: 'blue.50',
          color: 'black',
          borderColor: 'blue.900'
        }}
        _focus={{
          boxShadow: 'outline'
        }}
        px={5}
        py={3}
        w="full"
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default function PilihanGanda() {
  const [pertanyaan, setPertanyaan] = React.useState('');
  const [jawaban, setJawaban] = React.useState('');
  const [option, setOption] = React.useState(['']);
  const [correctAnswer, setCorrectAnswer] = React.useState('');
  const [type] = React.useState('multiple-choice');
  console.log(correctAnswer);

  const handleAddOption = () => {
    setOption([...option, '']);
  };

  const handleRemoveOption = (index: number) => {
    setOption(option.filter((_, i) => i !== index));
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOption = [...option];
    newOption[index] = value;
    setOption(newOption);
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    onChange: (value) => setCorrectAnswer(value)
  });

  const group = getRootProps();
  return (
    <div>
      <AuthenticatedLayout>
        <Seo title="Create Kuis" />
        <div className="w-full p-3 border rounded-md shadow border-Gray-200 bg-Base-white h-fit">
          <div className="p-3 border-b border-Gray-200">
            <h1 className="text-lg font-semibold">Pilihan Ganda</h1>
          </div>
          <div className="flex flex-col gap-5 p-5">
            <label htmlFor="pertanyaan" className="text-sm font-semibold text-Gray-600">
              Masukkan Pertanyaan Disini
            </label>
            <textarea
              name="pertanyaan"
              id="pertanyaan"
              className="border border-[#D0D5DD] rounded-lg p-2 mt-3"
              placeholder="Proses memasak makanan pada tumbuhan disebut dengan?"
              value={pertanyaan}
              onChange={(e) => setPertanyaan(e.target.value)}
            />
            <div className="flex flex-col gap-5">
              {type === 'multiple-choice' ? (
                <div className="flex flex-col w-full gap-3" {...group}>
                  {option.map((value, index) => {
                    const radio = getRadioProps({ value });
                    return (
                      <div key={index} className="flex items-center w-full gap-3">
                        <RadioCard {...radio}>
                          <input
                            type="text"
                            value={value}
                            onChange={(e) => handleOptionChange(index, e.target.value)}
                            className="w-full p-3 rounded-lg"
                          />
                        </RadioCard>
                        <Box
                          as="button"
                          onClick={() => handleRemoveOption(index)}
                          className="flex items-center tetx-3xl justify-center p-8 text-gray-500 border border-[#D0D5DD] rounded-md"
                        >
                          <FiTrash2 className="" />
                        </Box>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <textarea
                  value={jawaban}
                  onChange={(e) => setJawaban(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  rows={5}
                />
              )}
              <SecondaryButton btnClassName="w-fit h-fit" leftIcon={<MdAdd className="text-lg" />} onClick={handleAddOption}>
                Tambah Jawaban Lain
              </SecondaryButton>
            </div>
            <div className="flex flex-col">
              <label htmlFor="catatan" className="text-sm font-semibold text-Gray-600">
                Catatan
              </label>
              <textarea
                name="catatan"
                id="catatan"
                className="border border-[#D0D5DD] rounded-lg p-2 mt-3"
                placeholder="Catatan tambahan"
                value={pertanyaan}
                onChange={(e) => setPertanyaan(e.target.value)}
              />
            </div>
            <div className="flex justify-start gap-5">
              <PrimaryButton btnClassName="w-fit h-fit" onClick={() => console.log('submit')}>
                Simpan
              </PrimaryButton>
              <SecondaryButton btnClassName="w-fit h-fit" onClick={() => console.log('submit')}>
                Batalkan
              </SecondaryButton>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
