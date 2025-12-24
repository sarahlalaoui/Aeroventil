function Footer({ brand }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h3>{brand}</h3>
          <p>Ventilation • Extraction • CTA • Maintenance</p>
        </div>

        <nav className="footer-links">
          <a href="#hero">Accueil</a>
          <a href="#services">Services</a>
          <a href="#projects">Réalisations</a>
          <a href="#contact">Contact</a>
          <a href="#map">Localisation</a>
        </nav>

        <div className="footer-contact">
          <p>📞 +33 00 00 00 00</p>
          <p>✉️ aeroventil@gmail.com</p>
          <p>📍 Paris, France</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span> {year} {brand} © Tous droits réservés.</span>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
