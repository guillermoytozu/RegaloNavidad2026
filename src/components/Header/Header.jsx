import React from 'react';
import { Sparkles } from 'lucide-react';
import './Header.css';

export default function Header({
  title = "Regalo Secreto",
  subtitle = "Navidad 2026",
}) {
  return (
    <header className="hero-header">
      <div className="hero-badge">
        <span className="hero-badge-year">2026 - 2027</span>
      </div>

      <h1 className="hero-title">
        <span className="hero-title-main">{title}</span>
        <span className="hero-title-accent">{subtitle}</span>
      </h1>

      <div className="hero-decoration">
        <span className="hero-line" />
        <Sparkles size={16} className="hero-star" />
        <span className="hero-line" />
      </div>
    </header>
  );
}
