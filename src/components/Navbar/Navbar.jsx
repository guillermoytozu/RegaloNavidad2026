import React from 'react';
import { NavLink } from 'react-router-dom';
import { Gift, Image as ImageIcon, ListIcon, Sparkles } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container" aria-label="Navegación principal">
        <NavLink to="/" className="navbar-brand">
          <span className="brand-icon">
            <Gift size={20} className="icon-green" />
          </span>
          <span className="brand-text">
            Navidad <span className="brand-highlight">2026</span>
          </span>
        </NavLink>

        <ul className="navbar-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-item ${isActive ? 'nav-item-active' : ''}`
              }
              end
            >
              <Gift size={18} className="nav-icon" />
              <span>Inicio</span>
              <span className="nav-indicator" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/lista"
              className={({ isActive }) =>
                `nav-item ${isActive ? 'nav-item-active' : ''}`
              }
            >
              <ListIcon size={18} className="nav-icon" />
              <span>Lista de Regalos</span>
              <span className="nav-indicator" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fotos"
              className={({ isActive }) =>
                `nav-item ${isActive ? 'nav-item-active' : ''}`
              }
            >
              <ImageIcon size={18} className="nav-icon" />
              <span>Fotos Navideñas</span>
              <span className="nav-indicator" />
            </NavLink>
          </li>
        </ul>

        <div className="navbar-badge">
          <Sparkles size={14} className="badge-sparkle" />
        </div>
      </nav>
    </header>
  );
}
