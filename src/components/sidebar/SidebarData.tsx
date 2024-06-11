import React from 'react';
import { HiOutlineChartSquareBar } from 'react-icons/hi';
import { FiLayers, FiBook } from 'react-icons/fi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { RiArrowUpSLine } from 'react-icons/ri';
import { LuCopyCheck } from 'react-icons/lu';
import { BiPieChartAlt2 } from 'react-icons/bi';
import { LuBookOpen } from 'react-icons/lu';
import { LuUserSquare2 } from 'react-icons/lu';
import { GoDotFill } from 'react-icons/go';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/temporaryLayout',
    icon: <HiOutlineChartSquareBar />
  },
  {
    title: 'Kehadiran',
    path: '/kehadiran/',
    icon: <FiLayers />,
    iconClosed: <RiArrowDownSLine />,
    iconOpened: <RiArrowUpSLine />,
    subNav: [
      {
        title: 'Checklist Kehadiran',
        path: '/kehadiran/checklistKehadiran',
        icon: <GoDotFill />
      },
      {
        title: 'Agenda Hari Ini',
        path: '/kehadiran/agenda',
        icon: <GoDotFill />
      }
    ]
  },
  {
    title: 'Tugas',
    path: '/tugas',
    icon: <LuCopyCheck />,
    iconClosed: <RiArrowDownSLine />,
    iconOpened: <RiArrowUpSLine />,
    subNav: [
      {
        title: 'Preview Tugas',
        path: '/tugas/preview',
        icon: <GoDotFill />
      },
      {
        title: 'Status Pengumpulan',
        path: '/tugas/status',
        icon: <GoDotFill />
      },
      {
        title: 'Literasi',
        path: '/tugas/literasi',
        icon: <GoDotFill />
      }
    ]
  },
  {
    title: 'Materi',
    path: '/materi',
    icon: <FiBook />,
    iconClosed: <RiArrowDownSLine />,
    iconOpened: <RiArrowUpSLine />,
    subNav: [
      {
        title: 'Preview Materi',
        path: '/materi/preview',
        icon: <GoDotFill />
      },
      {
        title: 'Susun Materi',
        path: '/materi/susun',
        icon: <GoDotFill />
      }
    ]
  },
  {
    title: 'Nilai & Hasil Belajar',
    path: '/reports',
    icon: <BiPieChartAlt2 />,
    iconClosed: <RiArrowDownSLine />,
    iconOpened: <RiArrowUpSLine />,
    subNav: [
      {
        title: 'List Nilai',
        path: '/nilai/list',
        icon: <GoDotFill />
      },
      {
        title: 'Materi',
        path: '/tugas/status',
        icon: <GoDotFill />
      }
    ]
  },
  {
    title: 'Ujian',
    path: '/messages',
    icon: <LuBookOpen />,
    iconClosed: <RiArrowDownSLine />,
    iconOpened: <RiArrowUpSLine />,
    subNav: [
      {
        title: 'Preview Tugas',
        path: '/tugas/previewtugas',
        icon: <GoDotFill />
      },
      {
        title: 'Status Pengumpulan',
        path: '/tugas/status',
        icon: <GoDotFill />
      }
    ]
  },
  {
    title: 'Pengaturan Siswa',
    path: '/support',
    icon: <LuUserSquare2 />,
    iconClosed: <RiArrowDownSLine />,
    iconOpened: <RiArrowUpSLine />,
    subNav: [
      {
        title: 'Data Diri Siswa',
        path: '/pengaturan/datadiri',
        icon: <GoDotFill />
      },
      {
        title: 'Konseling',
        path: '/pengaturan/konseling',
        icon: <GoDotFill />
      },
      {
        title: 'Dispensasi',
        path: '/pengaturan/dispensasi',
        icon: <GoDotFill />
      },
      {
        title: 'Logbook Pelanggaran',
        path: '/pengaturan/logbook',
        icon: <GoDotFill />
      },
      {
        title: 'Pengaduan',
        path: '/pengaturan/pengaduan',
        icon: <GoDotFill />
      }
    ]
  }
];
