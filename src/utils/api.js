export const API_URL = import.meta.env.VITE_API_URL;

/**
 * Obtiene la lista actual de regalos desde Google Apps Script
 */
export async function fetchGifts() {
  if (!API_URL) {
    throw new Error('La variable de entorno VITE_API_URL no está definida.');
  }

  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`Error en la petición: ${response.status}`);
  }
  const data = await response.json();
  return Array.isArray(data) ? data : [];
}

/**
 * Envía un nuevo deseo navideño al formulario Google Apps Script
 * Utiliza mode: 'no-cors' con 'Content-Type': 'text/plain;charset=utf-8'
 */
export async function submitGift({ nombre, apellido, regalo }) {
  if (!API_URL) {
    throw new Error('La variable de entorno VITE_API_URL no está definida.');
  }

  const payload = {
    nombre: (nombre || '').trim(),
    apellido: (apellido || '').trim(),
    regalo: (regalo || '').trim()
  };

  await fetch(API_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8'
    },
    body: JSON.stringify(payload)
  });

  return payload;
}
