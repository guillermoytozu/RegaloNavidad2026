import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Gift, Image as ImageIcon, ListIcon, Menu, X, Sparkles } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Cierra el menú móvil automáticamente al cambiar de página
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container" aria-label="Navegación principal">
        {/* Marca / Logo */}
        <NavLink to="/" className="navbar-brand" onClick={() => setIsOpen(false)}>
          <span className="brand-icon">
            <Gift size={20} className="icon-green" />
          </span>
          <span className="brand-text">
            Navidad <span className="brand-highlight">2026</span>
          </span>
        </NavLink>

        {/* Enlaces para Pantallas Grandes (Desktop / Tablet) */}
        <ul className="navbar-links desktop-links">
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

        {/* Badge festivo solo en Desktop */}
        <div className="navbar-badge">
          <Sparkles size={14} className="badge-sparkle" />
          <span>2026</span>
        </div>

        {/* Botón Hamburguesa para Móvil */}
        <button
          className="navbar-toggle-btn"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        >
          {isOpen ? <X size={22} /> : <span style={{ fontSize: '14px' }}><Menu size={22} />Opciones</span>}
        </button>
      </nav>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <>
          <div className="mobile-menu-backdrop" onClick={() => setIsOpen(false)} />
          <div className="mobile-menu-dropdown" role="menu">
            <ul className="mobile-menu-list">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `mobile-menu-item ${isActive ? 'mobile-menu-item-active' : ''}`
                  }
                  end
                  onClick={() => setIsOpen(false)}
                >
                  <div className="mobile-item-icon-wrap">
                    <Gift size={18} />
                  </div>
                  <span className="mobile-item-label">Inicio</span>
                  <span className="mobile-active-dot" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/lista"
                  className={({ isActive }) =>
                    `mobile-menu-item ${isActive ? 'mobile-menu-item-active' : ''}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <div className="mobile-item-icon-wrap">
                    <ListIcon size={18} />
                  </div>
                  <span className="mobile-item-label">Lista de Regalos</span>
                  <span className="mobile-active-dot" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/fotos"
                  className={({ isActive }) =>
                    `mobile-menu-item ${isActive ? 'mobile-menu-item-active' : ''}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <div className="mobile-item-icon-wrap">
                    <ImageIcon size={18} />
                  </div>
                  <span className="mobile-item-label">Fotos Navideñas</span>
                  <span className="mobile-active-dot" />
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
