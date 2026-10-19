import React, { useState } from 'react';
import {
  Maximize2,
  X,
  Smartphone,
  Layers
} from 'lucide-react';
import './PhotoGallery.css';

export default function PhotoGallery({ photos = [] }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleOpenLightbox = (photo) => {
    setSelectedPhoto(photo);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="gallery-section" aria-labelledby="gallery-title">
      <div className="gallery-header">
        <div className="gallery-header-left">
          <div className="gallery-icon-pill">
            <Layers size={18} className="icon-green" />
          </div>
          <div>
            <h2 id="gallery-title" className="gallery-title">Fotos Navideñas</h2>
            <p className="gallery-subtitle">
              {photos.length} fotos
            </p>
          </div>
        </div>

        <div className="mobile-badge-pill">
          <Smartphone size={14} className="icon-mobile-pill" />
        </div>
      </div>

      {/* Grid de Fotos Mobile First */}
      <div className="photos-grid">
        {photos.map((photo, index) => (
          <article
            key={photo.id || index}
            className="photo-card"
            onClick={() => handleOpenLightbox(photo)}
          >
            <div className="photo-media-wrapper">
              <img
                src={photo.src}
                alt={photo.title || `Foto Navideña ${index + 1}`}
                loading="lazy"
                className="photo-image"
              />
              <div className="photo-overlay">
                <span className="photo-zoom-btn" title="Ampliar foto">
                  <Maximize2 size={16} />
                </span>
              </div>
            </div>

            <div className="photo-meta">
              <div className="photo-info">
                <h4 className="photo-item-title">{photo.title}</h4>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal Lightbox Sobrio y Minimalista */}
      {selectedPhoto && (
        <div
          className="lightbox-overlay"
          onClick={handleCloseLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="lightbox-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-topbar">
              <div className="lightbox-title-wrap">
                <h3 className="lightbox-title">{selectedPhoto.title}</h3>
                <span className="lightbox-sub">
                </span>
              </div>
              <button
                onClick={handleCloseLightbox}
                className="lightbox-close-btn"
                aria-label="Cerrar vista completa"
              >
                <X size={20} />
              </button>
            </div>

            <div className="lightbox-image-box">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="lightbox-img"
              />
            </div>

            <div className="lightbox-footer">
              <div className="lightbox-specs">

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
