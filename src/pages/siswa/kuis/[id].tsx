import AuthenticatedLayout from '@/components/layout/layoutSiswa/AuthenticatedLayout';
import * as React from 'react';
import Seo from '@/components/Seo';
import SecondaryButton from '@/components/SecondaryButton';
import { Box, useRadio, useRadioGroup, UseRadioProps } from '@chakra-ui/react';

interface Question {
  text: string;
  type_of_question: string;
  options: string[];
  correct_answer: string;
  number?: number; // This field is optional since it's added later
}

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

interface RadioCardProps extends UseRadioProps {
  children: React.ReactNode;
}

function RadioCard(props: RadioCardProps) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label" w="full">
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

export default function PengerjaanKuis() {
  const initialQuestions: Question[] = [
    {
      text: 'What is the capital of France?',
      type_of_question: 'multiple-choice',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correct_answer: ''
    },
    {
      text: 'Explain the theory of relativity.',
      type_of_question: 'multiple-choice',
      options: ['Stalin', 'Einstein', 'Newton', 'Darwin'],
      correct_answer: ''
    },
    {
      text: 'Write an essay on the theory of relativity.',
      type_of_question: 'essay',
      options: [],
      correct_answer: ''
    }
  ];

  const [response, setResponse] = React.useState<{
    id: string;
    class_id: string;
    subject_id: string;
    teacher_id: string;
    title: string;
    type_of_quiz: string;
    description: string;
    deadline: string;
    questions: Question[];
  }>({
    id: '550e8400-e29b-41d4-a716-446655440000',
    class_id: 'class_101',
    subject_id: 'subject_202',
    teacher_id: 'teacher_303',
    title: 'Mid-Term Exam',
    type_of_quiz: 'UTS',
    description: 'This is the mid-term exam covering chapters 1 to 5.',
    deadline: '2024-07-01T23:59:59Z',
    questions: []
  });

  React.useEffect(() => {
    const savedQuestions = localStorage.getItem('questions');
    const savedAnswers = localStorage.getItem('userAnswers');
    if (savedQuestions) {
      setResponse((prevState) => ({
        ...prevState,
        questions: JSON.parse(savedQuestions) as Question[]
      }));
      setUserAnswers(savedAnswers ? JSON.parse(savedAnswers) : []);
    } else {
      const shuffledQuestions = shuffleArray([...initialQuestions]);
      const numberedQuestions = shuffledQuestions.map((question, index) => ({
        ...question,
        options: shuffleArray([...question.options]),
        number: index + 1
      }));
      localStorage.setItem('questions', JSON.stringify(numberedQuestions));
      setResponse((prevState) => ({
        ...prevState,
        questions: numberedQuestions
      }));
      setUserAnswers(Array(numberedQuestions.length).fill(''));
    }
  }, []);

  const [userAnswers, setUserAnswers] = React.useState<string[]>(Array(initialQuestions.length).fill(''));

  const handleAnswerChange = (index: number, answer: string) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = answer;
      localStorage.setItem('userAnswers', JSON.stringify(newAnswers));
      return newAnswers;
    });
  };

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 1;

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(response.questions.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const currentQuestions = response.questions.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    value: userAnswers[currentPage - 1] || '',
    onChange: (value) => {
      handleAnswerChange(currentPage - 1, value);
    }
  });

  const group = getRootProps();
  return (
    <div>
      <AuthenticatedLayout>
        <Seo title="Pengerjaan Kuis" />
        <div className="w-full p-3 rounded-md shadow bg-Base-white h-fit">
          <div className="flex flex-col justify-between gap-5 p-3">
            <h1 className="font-semibold">{response.title}</h1>
            <p className="text-sm font-medium text-Gray-500">{response.description}</p>
          </div>
        </div>
        <div className="flex flex-col justify-around w-full gap-5 lg:flex-row h-fit">
          <div className="flex flex-row items-center justify-around h-full lg:justify-start lg:flex-col bg-Base-white">
            <div className="p-6 lg:border-b border-Gray-200">
              <h1 className="text-xs font-semibold text-Gray-500">Question</h1>
            </div>
            <div className="flex flex-col items-center p-3">
              <h1 className="text-xs font-semibold text-Gray-500">Marked Out</h1>
              <h1 className="text-xs font-semibold">0.50</h1>
            </div>
          </div>
          <div className="flex flex-col items-center w-full h-full gap-5 p-5 bg-Base-white">
            {currentQuestions.map((question, index) => (
              <div key={index} className="flex flex-col w-full gap-5">
                <input type="text" value={question.text} disabled className="w-full p-3" />
                {question.type_of_question === 'multiple-choice' ? (
                  <div className="flex flex-col w-full gap-5" {...group}>
                    {question.options.map((value) => {
                      const radio = getRadioProps({ value });
                      return (
                        <RadioCard key={value} {...radio}>
                          {value}
                        </RadioCard>
                      );
                    })}
                  </div>
                ) : (
                  <textarea
                    value={userAnswers[currentPage - 1]}
                    onChange={(e) => handleAnswerChange(currentPage - 1, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md"
                    rows={5}
                  />
                )}
              </div>
            ))}
            <div id="pagination" className="flex justify-between w-full p-3 border-t border-Gray-200">
              <SecondaryButton
                btnClassName={`font-semibold w-fit ${currentPage === 1 ? 'text-Gray-300 border-Gray-300' : ''}`}
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Previous
              </SecondaryButton>
              <span className="self-center">
                Page {currentPage} of {Math.ceil(response.questions.length / itemsPerPage)}
              </span>
              <SecondaryButton
                btnClassName={`font-semibold w-fit ${currentPage === Math.ceil(response.questions.length / itemsPerPage) ? 'text-Gray-300 border-Gray-300' : ''}`}
                onClick={handleNextPage}
                disabled={currentPage === Math.ceil(response.questions.length / itemsPerPage)}
              >
                Next
              </SecondaryButton>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5 p-5 bg-Base-white">
            <h1 className="text-xs font-semibold text-Gray-900">Navigasi Kuis</h1>
            <div className="flex gap-2 lg:grid-cols-2 lg:grid">
              {response.questions.map((question, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 border rounded-full ${userAnswers[index] ? 'bg-Primary-400 text-Base-white' : currentPage === index + 1 ? 'bg-Primary-400 text-Base-white' : 'bg-Base-white text-Base-black'}`}
                  onClick={() => handlePageClick(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <SecondaryButton btnClassName="w-fit h-fit text-sm">Finish Attempt</SecondaryButton>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
