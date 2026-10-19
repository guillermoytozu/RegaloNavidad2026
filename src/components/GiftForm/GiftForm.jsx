import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Gift, User } from 'lucide-react';
import { submitGift } from '../../utils/api';
import './GiftForm.css';

export default function GiftForm({ onGiftSubmitted }) {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    regalo: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Limpia alertas si el usuario vuelve a escribir
    if (status.success || status.error) {
      setStatus((prev) => ({ ...prev, success: false, error: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nombre.trim() || !formData.regalo.trim()) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Por favor completa al menos tu nombre y el regalo que deseas.'
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      await submitGift(formData);

      // Limpiamos el formulario
      setFormData({
        nombre: '',
        apellido: '',
        regalo: ''
      });

      setStatus({
        submitting: false,
        success: true,
        error: null
      });

      // Notificamos al componente padre para que recargue la lista
      if (typeof onGiftSubmitted === 'function') {
        onGiftSubmitted();
      }

      // Ocultar mensaje de éxito luego de 5 segundos
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);

    } catch (err) {
      console.error('Error al enviar el formulario:', err);
      setStatus({
        submitting: false,
        success: false,
        error: 'Hubo un inconveniente al registrar tu regalo. Inténtalo de nuevo.'
      });
    }
  };

  return (
    <section className="gift-form-wrapper" aria-labelledby="form-heading">
      <div className="gift-form-card">
        <div className="form-header">
          <div className="form-icon-pill">
            <Gift size={20} className="form-icon-pine" />
          </div>
          <div>
            <h2 id="form-heading" className="form-title">Pide tu Regalo</h2>
            <p className="form-subtitle">Intercambio de regalos 2026</p>
          </div>
        </div>

        {status.success && (
          <div className="form-alert alert-success" role="alert">
            <CheckCircle2 size={18} className="alert-icon" />
            <span>¡Tu regalo se ha registrado correctamente! 🎄</span>
          </div>
        )}

        {status.error && (
          <div className="form-alert alert-error" role="alert">
            <AlertCircle size={18} className="alert-icon" />
            <span>{status.error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="form-body" noValidate>
          <div className="form-row-grid">
            <div className="input-group">
              <label htmlFor="nombre" className="input-label">
                <User size={15} className="label-icon" />
                <span>Nombre</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. Mirian"
                disabled={status.submitting}
                className="input-field"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="apellido" className="input-label">
                <User size={15} className="label-icon" />
                <span>Apellido</span>
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                placeholder="Ej. Taira"
                disabled={status.submitting}
                className="input-field"
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="regalo" className="input-label">
              <Gift size={15} className="label-icon label-icon-red" />
              <span>¿Qué quiero por Navidad?</span>
            </label>
            <input
              type="text"
              id="regalo"
              name="regalo"
              value={formData.regalo}
              onChange={handleChange}
              placeholder="Ej. Un viaje a Japón"
              disabled={status.submitting}
              className="input-field"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status.submitting}
            className={`btn-submit ${status.submitting ? 'btn-loading' : ''}`}
          >
            {status.submitting ? (
              <>
                <Loader2 size={18} className="spinner-icon" />
                <span>Enviando solicitud...</span>
              </>
            ) : (
              <>
                <span>Enviar</span>
                <Send size={16} className="btn-icon" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
