import * as React from 'react';
import { useRouter } from 'next/router';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
import Seo from '@/components/Seo';
import { Box, useRadio, useRadioGroup, useToast } from '@chakra-ui/react';
import { FiTrash2 } from 'react-icons/fi';
import SecondaryButton from '@/components/SecondaryButton';
import { MdAdd } from 'react-icons/md';
import PrimaryButton from '@/components/PrimaryButton';
import axios from 'axios';

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
  const router = useRouter();
  const { quizid, questionIndex, question, questionid } = router.query;
  const [pertanyaan, setPertanyaan] = React.useState('');
  const [option, setOption] = React.useState<string[]>(['']);
  const [correctAnswer, setCorrectAnswer] = React.useState('');
  const [type] = React.useState('multiple-choice');
  const toast = useToast();

  React.useEffect(() => {
    if (question) {
      const questionData = JSON.parse(question as string);
      setPertanyaan(questionData.text);
      setOption(questionData.options || []);
      setCorrectAnswer(questionData.correct_answer);
    }
  }, [question]);

  const handleAddOption = () => {
    setOption([...option, '']);
  };

  const handleRemoveOption = (index: number) => {
    const newOptions = [...option];
    newOptions.splice(index, 1);
    setOption(newOptions);
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...option];
    newOptions[index] = value;
    setOption(newOptions);
  };

  const handleSaveQuestion = async () => {
    const newQuestion = {
      text: pertanyaan,
      options: option,
      correct_answer: correctAnswer
    };

    try {
      // Send API request using Axios
      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/teacher/quiz/question/${questionid}/update`, newQuestion, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.status === 200 || response.status === 204) {
        // Update localStorage
        const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
        if (Array.isArray(quizzes)) {
          const quizIndex = quizzes.findIndex((q) => q.id === quizid);
          if (quizIndex > -1) {
            quizzes[quizIndex].questions[questionIndex] = newQuestion;
            localStorage.setItem('quizzes', JSON.stringify(quizzes));
          }
        } else {
          console.error('Quizzes is not an array');
        }

        toast({
          title: 'Success',
          description: 'Question updated successfully',
          status: 'success',
          duration: 3000,
          isClosable: true
        });
        localStorage.setItem('question', JSON.stringify(newQuestion));
        router.push('/guru/kuis/edit'); // Redirect to the appropriate page after saving
      } else {
        throw new Error(`Unexpected response status: ${response.status}`); // Trigger catch block for non-successful responses
      }
    } catch (error) {
      console.error('Error updating question:', error);
      toast({
        title: 'Error',
        description: error.response?.data?.message || 'Failed to update question',
        status: 'error',
        duration: 3000,
        isClosable: true
      });
    }
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    onChange: (value) => setCorrectAnswer(value)
  });

  const group = getRootProps();

  return (
    <div>
      <AuthenticatedLayout>
        <Seo title="Edit Pertanyaan Pilihan Ganda" />
        <div className="w-full p-3 border rounded-md shadow border-Gray-200 bg-Base-white h-fit">
          <div className="p-3 border-b border-Gray-200">
            <h1 className="text-lg font-semibold">Edit Pilihan Ganda</h1>
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
                          className="flex items-center text-3xl justify-center p-8 text-gray-500 border border-[#D0D5DD] rounded-md"
                        >
                          <FiTrash2 />
                        </Box>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <textarea
                  value={correctAnswer}
                  onChange={(e) => setCorrectAnswer(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  rows={5}
                />
              )}
              <SecondaryButton btnClassName="w-fit h-fit" leftIcon={<MdAdd className="text-lg" />} onClick={handleAddOption}>
                Tambah Jawaban Lain
              </SecondaryButton>
            </div>

            <div className="flex justify-start gap-5">
              <PrimaryButton btnClassName="w-fit h-fit" onClick={handleSaveQuestion}>
                Simpan
              </PrimaryButton>
              <SecondaryButton btnClassName="w-fit h-fit" onClick={() => router.push('/guru/kuis/create')}>
                Batalkan
              </SecondaryButton>
            </div>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
