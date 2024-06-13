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
import { GrTrophy } from 'react-icons/gr';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/siswa/home',
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
        title: 'List Kehadiran',
        path: '/siswa/kehadiran/ListKehadiran',
        icon: <GoDotFill />
      },
      {
        title: 'Agenda Hari Ini',
        path: '/siswa/kehadiran/agenda',
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
        path: '/siswa/tugas/preview',
        icon: <GoDotFill />
      },
      {
        title: 'Literasi',
        path: '/siswa/tugas/literasi',
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
        title: 'List Materi',
        path: '/siswa/materi/list',
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
        path: '/siswa/nilai/list',
        icon: <GoDotFill />
      }
    ]
  },
  {
    title: 'Kuis',
    path: '/messages',
    icon: <LuBookOpen />,
    iconClosed: <RiArrowDownSLine />,
    iconOpened: <RiArrowUpSLine />,
    subNav: [
      {
        title: 'List Kuis',
        path: '/siswa/kuis/list',
        icon: <GoDotFill />
      },
      {
        title: 'Hasil Kuis',
        path: '/siswa/kuis/hasil',
        icon: <GoDotFill />
      }
    ]
  },
  {
    title: 'Prestasi',
    path: '/prestasi',
    icon: <GrTrophy />,
    iconClosed: <RiArrowDownSLine />,
    iconOpened: <RiArrowUpSLine />,
    subNav: [
      {
        title: 'Beranda Prestasi',
        path: '/siswa/prestasi/beranda',
        icon: <GoDotFill />
      },
      {
        title: 'Input Prestasi',
        path: '/siswa/prestasi/input',
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
        path: '/siswa/pengaturan/datadiri',
        icon: <GoDotFill />
      },
      {
        title: 'Konseling',
        path: '/siswa/pengaturan/konseling',
        icon: <GoDotFill />
      },
      {
        title: 'Dispensasi',
        path: '/siswa/pengaturan/dispensasi',
        icon: <GoDotFill />
      },
      {
        title: 'Logbook Pelanggaran',
        path: '/siswa/pengaturan/logbookpelanggaran',
        icon: <GoDotFill />
      },
      {
        title: 'Pengaduan',
        path: '/siswa/pengaturan/pengaduan',
        icon: <GoDotFill />
      }
    ]
  }
];
