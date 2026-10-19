import React, { useState, useEffect, useCallback } from 'react';
import { Gift, RotateCw, Search, AlertCircle } from 'lucide-react';
import { fetchGifts } from '../../utils/api';
import './GiftList.css';

export default function GiftList({ refreshTrigger }) {
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Función para obtener los deseos desde la API con useEffect
  const loadGifts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchGifts();
      setGifts(data);
    } catch (err) {
      console.error('Error al cargar la lista de regalos:', err);
      setError('No se pudo sincronizar la lista de deseos. Por favor reintenta.');
    } finally {
      setLoading(false);
    }
  }, []);

  // Hook useEffect requerido para el fetch inicial y tras un nuevo envío
  useEffect(() => {
    loadGifts();
  }, [loadGifts, refreshTrigger]);

  // Filtrado reactivo en cliente para búsqueda instantánea en móvil
  const filteredGifts = gifts.filter((item) => {
    const term = searchTerm.toLowerCase();
    const fullName = `${item.nombre || ''} ${item.apellido || ''}`.toLowerCase();
    const giftName = (item.regalo || '').toLowerCase();
    return fullName.includes(term) || giftName.includes(term);
  });

  return (
    <section className="gift-list-section" aria-labelledby="list-heading">
      <div className="list-card-container">
        {/* Barra superior de la lista */}
        <div className="list-top-bar">
          <div className="list-heading-group">
            <div>
              <h2 id="list-heading" className="list-title">Lista de Regalos</h2>
            </div>
          </div>

          <button
            onClick={loadGifts}
            disabled={loading}
            className="btn-refresh"
            aria-label="Actualizar lista"
            title="Actualizar lista"
          >
            <RotateCw size={17} className={`refresh-icon ${loading ? 'icon-spin' : ''}`} />
            <span className="refresh-label">Actualizar</span>
          </button>
        </div>

        {/* Buscador rápido mobile-first */}
        {gifts.length > 0 && (
          <div className="search-container">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Buscar por nombre o regalo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              aria-label="Buscar en la lista de deseos"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="search-clear"
                aria-label="Limpiar búsqueda"
              >
                ✕
              </button>
            )}
          </div>
        )}

        {/* Estado: Error */}
        {error && (
          <div className="list-state-box error-box">
            <AlertCircle size={24} className="state-icon error-icon" />
            <p className="state-message">{error}</p>
            <button onClick={loadGifts} className="btn-retry">
              Volver a intentar
            </button>
          </div>
        )}

        {/* Estado: Cargando */}
        {loading && !error && (
          <div className="skeleton-container" aria-live="polite">
            <div className="skeleton-card" />
            <div className="skeleton-card" />
            <div className="skeleton-card" />
          </div>
        )}

        {/* Estado: Vacío sin resultados de búsqueda */}
        {!loading && !error && gifts.length > 0 && filteredGifts.length === 0 && (
          <div className="list-state-box">
            <Search size={28} className="state-icon-muted" />
            <p className="state-message">No encontramos deseos que coincidan con "{searchTerm}"</p>
          </div>
        )}

        {/* Estado: Sin regalos aún */}
        {!loading && !error && gifts.length === 0 && (
          <div className="list-state-box empty-box">
            <div className="empty-icon-wrap">
              <Gift size={32} className="empty-gift-icon" />
            </div>
            <h3 className="empty-title">Aún no hay deseos registrados</h3>
            <p className="empty-desc">
              Sé la primera persona en escribir qué te gustaría recibir en esta Navidad 2026.
            </p>
          </div>
        )}

        {/* Contenido: Vistas Móvil y Desktop */}
        {!loading && !error && filteredGifts.length > 0 && (
          <>
            {/* Vista Móvil: Tarjetas fluidas sin bordes duros */}
            <div className="mobile-gift-cards">
              {filteredGifts.map((item, index) => (
                <article key={index} className="gift-item-card">
                  <div className="item-details">
                    <h4 className="item-name">
                      {item.nombre} {item.apellido}
                    </h4>
                    <div className="item-wish">
                      <Gift size={13} className="wish-icon" />
                      <span className="wish-text">{item.regalo}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Vista Desktop / Tablet: Tabla sobria y minimalista */}
            <div className="desktop-table-container">
              <table className="gifts-table">
                <thead>
                  <tr>
                    <th>Persona</th>
                    <th>Apellido</th>
                    <th>¿Regalo?</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredGifts.map((item, index) => (
                    <tr key={index}>
                      <td>{item.nombre || '—'}</td>
                      <td>{item.apellido || '—'}</td>
                      <td>
                        <div className="table-gift-pill">
                          <Gift size={14} className="pill-gift-icon" />
                          <span>{item.regalo}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
