import React from 'react';
import Header from '../../components/Header/Header';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import './PhotosPage.css';

const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const DEFAULT_PHOTOS = [
  {
    id: 'default-1',
    src: `${BASE}IMG/mobile/foto1.jpg`,
    title: 'Foto Navideña 1',
    subtitle: 'Resolución Móvil (1080x720)',
    sizeFormatted: '176 KB',
    savings: '98.9',
    isCustom: false
  },
  {
    id: 'default-2',
    src: `${BASE}IMG/mobile/foto2.jpg`,
    title: 'Foto Navideña 2',
    subtitle: 'Resolución Móvil (1080x720)',
    sizeFormatted: '150 KB',
    savings: '99.3',
    isCustom: false
  },
  {
    id: 'default-3',
    src: `${BASE}IMG/mobile/foto3.JPG`,
    title: 'Foto Navideña 3',
    subtitle: 'Resolución Móvil (1080x810)',
    sizeFormatted: '162 KB',
    savings: '93.8',
    isCustom: false
  },
  {
    id: 'default-4',
    src: `${BASE}IMG/mobile/foto4.JPG`,
    title: 'Foto Navideña 4',
    subtitle: 'Resolución Móvil (1080x810)',
    sizeFormatted: '146 KB',
    savings: '93.8',
    isCustom: false
  },
  {
    id: 'default-5',
    src: `${BASE}IMG/mobile/foto5.jpg`,
    title: 'Foto Navideña 5',
    subtitle: 'Resolución Móvil (1080x641)',
    sizeFormatted: '112 KB',
    savings: '99.1',
    isCustom: false
  },
  {
    id: 'default-6',
    src: `${BASE}IMG/mobile/foto6.jpg`,
    title: 'Foto Navideña 6',
    subtitle: 'Resolución Móvil (720x1080)',
    sizeFormatted: '138 KB',
    savings: '99.3',
    isCustom: false
  }
];

export default function PhotosPage() {
  return (
    <main className="photos-page-container">
      <Header
        title="Fotos Navideñas"
        subtitle="Galería 2026"
      />
      <div className="photos-content-stack">
        <PhotoGallery photos={DEFAULT_PHOTOS} />
      </div>
    </main>
  );
}
