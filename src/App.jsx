import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import PhotosPage from './pages/PhotosPage/PhotosPage';
import ListPage from './pages/ListPage/ListPage';
import './App.css';

export default function App() {
  return (
    <div className="app-layout">
      {/* Barra de navegación superior */}
      <Navbar />

      {/* Contenido principal según la ruta */}
      <div className="app-main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lista" element={<ListPage />} />
          <Route path="/fotos" element={<PhotosPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Pie de página sobrio */}
      <Footer />
    </div>
  );
}
