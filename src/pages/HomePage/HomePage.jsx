import React from 'react';
import Header from '../../components/Header/Header';
import GiftForm from '../../components/GiftForm/GiftForm';
import './HomePage.css';

export default function HomePage() {
  return (
    <main className="home-page-container">
      <Header
        title="Regalo Secreto"
        subtitle="Navidad 2026"
      />

      <div className="home-content-stack">
        <GiftForm />
      </div>
    </main>
  );
}
