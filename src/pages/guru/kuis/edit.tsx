import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';
import Seo from '@/components/Seo';
import AuthenticatedLayout from '@/components/layout/layoutGuru/AuthenticatedLayout';
import * as React from 'react';
import { BsEye } from 'react-icons/bs';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { HiDotsVertical } from 'react-icons/hi';
import { Menu, MenuButton, IconButton, MenuList, MenuItem, useToast } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';
import { useRouter } from 'next/router';

export default function QuizDetail() {
  const [questions, setQuestions] = React.useState([]);
  const [quizTitle, setQuizTitle] = React.useState('');
  const router = useRouter();
  const toast = useToast();

  console.log(questions);

  React.useEffect(() => {
    const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
    setQuestions(quizzes.questions || []);
    setQuizTitle(quizzes.title || '');
  }, []);

  const handleAddQuestion = () => {
    // Add logic to handle adding a question
  };

  const handleSaveQuiz = () => {
    // Add logic to handle saving the quiz
  };

  const handleEditQuestion = (questionid, questionIndex, question) => {
    router.push({
      pathname: '/guru/kuis/edit/pilihanganda',
      query: { questionid, questionIndex, question: JSON.stringify(question) }
    });
  };

  const handleBack = () => {
    localStorage.removeItem('quizzes');
    router.push('/guru/kuis/list');
  };

  return (
    <div>
      <AuthenticatedLayout>
        <Seo title="Quiz Details" />
        <div className="w-full rounded-md shadow bg-Base-white h-fit">
          <div className="flex flex-col justify-between gap-5 p-5 lg:flex-row lg:items-center">
            <div className="flex items-center gap-3">
              <PrimaryButton btnClassName="w-fit h-fit bg-Primary-50 text-Primary-700 rounded" onClick={() => console.log('clicked')}>
                Pertanyaan
              </PrimaryButton>
              <PrimaryButton
                btnClassName="w-fit h-fit bg-Base-white text-Gray-500 rounded"
                onClick={() => router.push('/guru/kuis/settingsEdit')}
              >
                Pengaturan
              </PrimaryButton>
            </div>
            <div className="flex items-center gap-3">
              <PrimaryButton btnClassName="w-fit h-fit" onClick={handleBack}>
                Back
              </PrimaryButton>
            </div>
          </div>
          {questions.length > 0 ? (
            questions.map((item, index) => (
              <div className="flex items-center justify-between w-full p-5 border-b h-fit bg-Gray-50 border-Gray-200" key={index}>
                <div className="flex gap-3">
                  <label htmlFor={item.text}>{item.text}</label>
                </div>
                <Menu>
                  <MenuButton as={IconButton} icon={<HiDotsVertical className="text-Gray-500" />} variant="ghost" />
                  <MenuList>
                    <MenuItem icon={<FiEdit />} onClick={() => handleEditQuestion(item.id, index, item)}>
                      Edit
                    </MenuItem>
                  </MenuList>
                </Menu>
              </div>
            ))
          ) : (
            <div className="text-center py-5 text-Gray-600">Tidak ada pertanyaan ditemukan</div>
          )}
          <div className="px-5 pt-5 pb-10 lg:flex lg:justify-end">
            <SecondaryButton btnClassName="w-full h-fit lg:w-fit" leftIcon={<MdAdd className="text-lg" />} onClick={handleAddQuestion}>
              Pertanyaan
            </SecondaryButton>
          </div>
        </div>
      </AuthenticatedLayout>
    </div>
  );
}
