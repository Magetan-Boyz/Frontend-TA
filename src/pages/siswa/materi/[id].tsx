import * as React from 'react';
import AuthenticatedLayout from '@/components/layout/layoutSiswa/AuthenticatedLayout';
import Seo from '@/components/Seo';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Spinner, Text } from '@chakra-ui/react';

export default function MatterDetail() {
  const [matter, setMatter] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();
  const { matterId } = router.query; // Get the matter ID from the query parameters

  React.useEffect(() => {
    if (matterId) {
      fetchMatterDetail(matterId);
    }
  }, [matterId]);

  const fetchMatterDetail = async (id) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/student/subject/matter/${id}/detail`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setMatter(response.data.data);
    } catch (error) {
      console.error('Error fetching matter details:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <AuthenticatedLayout>
        <Seo templateTitle="Detail Materi" />
        <div className="w-full p-3 border rounded-md shadow-lg h-fit border-Gray-200 bg-Base-white">
          <Spinner size="xl" />
        </div>
      </AuthenticatedLayout>
    );
  }

  return (
    <AuthenticatedLayout>
      <Seo templateTitle="Detail Materi" />
      <div className="w-full p-3 border rounded-md shadow-lg h-fit border-Gray-200 bg-Base-white">
        {matter ? (
          <>
            <Text fontSize="2xl" fontWeight="bold">
              {matter.title}
            </Text>
            <Text mt={4}>{matter.description}</Text>
            {matter.content &&
              matter.content.map((contentItem) => (
                <div key={contentItem.id}>
                  <Text mt={4} fontSize="xl" fontWeight="semibold">
                    {contentItem.title}
                  </Text>
                  <Text mt={2}>{contentItem.description}</Text>
                  {contentItem.link && (
                    <Text mt={2}>
                      Link Pembelajaran:{' '}
                      <a href={contentItem.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        {contentItem.link}
                      </a>
                    </Text>
                  )}
                </div>
              ))}
          </>
        ) : (
          <Text>Detail materi tidak ditemukan.</Text>
        )}
      </div>
    </AuthenticatedLayout>
  );
}
