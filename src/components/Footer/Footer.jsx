import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <p className="footer-greeting">
          Felices Fiestas Navideñas y Año Nueveras 🎄🎅
        </p>
        <p className="footer-year">
          2026 <span className="footer-arrow">→</span> 2027
        </p>
      </div>
    </footer>
  );
}
