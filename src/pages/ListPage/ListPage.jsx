import React from 'react';
import Header from '../../components/Header/Header';
import GiftList from '../../components/GiftList/GiftList';
import './ListPage.css';

export default function ListPage() {
  return (
    <main className="home-page-container">
      <Header
        title="Regalo Secreto"
        subtitle="Navidad 2026"
      />

      <div className="home-content-stack">
        <GiftList />
      </div>
    </main>
  );
}
