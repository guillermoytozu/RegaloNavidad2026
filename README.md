# 🎄 Regalo Secreto | Navidad 2026 - 2027

Aplicación web interactiva convertida a **React + Vite**, diseñada con enfoque **Mobile First**, estética navideña sobria (con toques de verde pino y rojo baya), sin bordes pesados y con compresión de imágenes optimizada para smartphones.

---

## ✨ Características Principales

1. **Arquitectura React & Mobile First**:
   - Desarrollada con React 19 y empaquetador ultrarrápido **Vite**.
   - Diseñada desde pantallas móviles (360px) hacia arriba, con barra de navegación inferior adaptada al alcance del pulgar y barra superior elegante para pantallas más grandes.
2. **Navegación con `react-router-dom`**:
   - `/`: **Inicio** (Formulario para pedir deseos navideños y Lista de Deseos en tiempo real).
   - `/fotos`: **Fotos Navideñas** (Galería con fotos optimizadas y módulo de compresión móvil en vivo).
3. **Peticiones con `useEffect` y Fetch**:
   - Carga reactiva de los deseos registrados en Google Apps Script mediante `useEffect`.
   - Skeletons de carga, buscador interactivo en tiempo real y botón de actualización manual.
4. **Compresión de Imágenes para Móvil**:
   - Integración de la librería **`browser-image-compression`**.
   - Módulo en `/fotos` para subir fotos desde la cámara o galería móvil, optimizándolas en segundo plano mediante Web Workers a resoluciones de 1080p o 800p (~150-350 KB).
   - Muestra métricas en tiempo real: reducción de tamaño (hasta un 99%), dimensiones y vista previa.
   - Guardado automático de fotos personalizadas en `localStorage`.
   - Optimización de las fotos base (reducción de 40 MB a ~600 KB en total).
5. **Estilos Modulares (CSS por componente)**:
   - Cada componente cuenta con su propio archivo `.css` independiente.
6. **Diseño Sobrio y Navideño**:
   - Tarjetas y contenedores sin bordes toscos, utilizando elevación por sombras suaves difusas (`--shadow-md`) y fondos cálidos.
   - Paleta festiva sutil: Verde pino (`#1b4332`), rojo baya (`#b91c1c`) y fondo crema suave invernal (`#faf6f0`).

---

## 📁 Estructura del Proyecto

```text
RegaloNavidad2026/
├── public/
│   ├── favicon.ico
│   └── IMG/
│       ├── foto1.jpg, foto2.jpg, ... (originales)
│       └── mobile/ (versiones móviles ultraligeras)
├── src/
│   ├── components/
│   │   ├── Navbar/ (Navbar.jsx, Navbar.css)
│   │   ├── Header/ (Header.jsx, Header.css)
│   │   ├── GiftForm/ (GiftForm.jsx, GiftForm.css)
│   │   ├── GiftList/ (GiftList.jsx, GiftList.css)
│   │   ├── PhotoUploader/ (PhotoUploader.jsx, PhotoUploader.css)
│   │   ├── PhotoGallery/ (PhotoGallery.jsx, PhotoGallery.css)
│   │   └── Footer/ (Footer.jsx, Footer.css)
│   ├── pages/
│   │   ├── HomePage/ (HomePage.jsx, HomePage.css)
│   │   └── PhotosPage/ (PhotosPage.jsx, PhotosPage.css)
│   ├── utils/
│   │   ├── api.js (Llamadas a Google Apps Script)
│   │   └── imageCompression.js (Lógica de browser-image-compression)
│   ├── App.jsx & App.css
│   ├── index.css (Tokens de diseño y variables CSS)
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Cómo ejecutar el proyecto

1. **Instalar dependencias** (si clonas en un nuevo entorno):
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador (o actívalo en el modo móvil de las herramientas de desarrollador).

3. **Construir para producción**:
   ```bash
   npm run build
   ```
