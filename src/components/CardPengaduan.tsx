import * as React from 'react';
import { useState } from 'react';
import { Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import { BiLike } from 'react-icons/bi';
import { FaRegCommentDots } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useRouter } from 'next/router';

import clsxm from '@/lib/clsxm';

type CardPengaduanProps = {
  className?: string;
  nama: string;
  waktu: string;
  isiPengaduan: string;
  initialLikes: number;
  id: number;
  comments: Array<{ id: number; nama: string; waktu: string; isiKomentar: string }>;
  onDelete: () => void; // Function to handle delete
};

export default function CardPengaduan({
  className,
  nama,
  waktu,
  isiPengaduan,
  initialLikes,
  comments,
  onDelete,
  id,
  ...rest
}: CardPengaduanProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const router = useRouter();

  return (
    <div className={clsxm('w-full h-fit border rounded-xl border-Gray-200 p-4', className)} {...rest}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={`https://ui-avatars.com/api/?name=${nama}`} alt="Avatar" width={40} height={40} className="rounded-full" />
          <div>
            <div className="font-semibold text-Gray-900">{nama}</div>
            <div className="text-sm text-Gray-500">{waktu}</div>
          </div>
        </div>
        <div className="relative">
          <button onClick={toggleDropdown} className="text-Gray-500 hover:text-Gray-700">
            <BsThreeDotsVertical />
          </button>
          {showDropdown && (
            <div className="absolute right-0 z-10 w-32 py-2 mt-2 bg-white border rounded-lg shadow-xl">
              <button onClick={onDelete} className="block w-full px-4 py-2 text-left text-Gray-700 hover:bg-Gray-100">
                Hapus
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 text-Gray-900">{isiPengaduan}</div>
      <div className="flex items-center pb-4 mt-4 border-b border-Gray-200">
        <Tag colorScheme="green" borderRadius="full" size="sm" variant="outline">
          <TagLeftIcon boxSize="12px" as={BiLike} />
          <TagLabel>{likes} Suka</TagLabel>
        </Tag>
        <Tag colorScheme="blue" borderRadius="full" size="sm" variant="outline" className="ml-2">
          <TagLeftIcon boxSize="12px" as={FaRegCommentDots} />
          <TagLabel>{comments.length} Komentar</TagLabel>
        </Tag>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={handleLike}
          className={clsxm('flex items-center gap-1 text-sm font-semibold', liked ? 'text-Primary-500' : 'text-Gray-500')}
        >
          <BiLike className="text-xl" />
          <span>Suka</span>
        </button>
        <button
          className="flex items-center gap-1 text-sm font-semibold text-Gray-500"
          onClick={() => router.push(`/guru/pengaturan/pengaduan/${id}`)}
        >
          <FaRegCommentDots className="text-xl" />
          <span>Komentar</span>
        </button>
        <button className="flex items-center gap-1 text-sm font-semibold text-Gray-500">
          <FiShare2 className="text-xl" />
          <span>Bagikan</span>
        </button>
      </div>
    </div>
  );
}
