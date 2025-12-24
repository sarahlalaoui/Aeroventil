import { useEffect, useState } from "react";
import { FiHome, FiTool, FiImage, FiPhone, FiMapPin } from "react-icons/fi";


function Navbar({ brand }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parts = brand.split(" ");

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#hero" className="logo" onClick={() => setOpen(false)}>
          {parts[0]} <span>{parts[1] || ""}</span>
        </a>

        {/* 👉 C’est ici que tu mets tes <li> avec les icônes */}
        <ul className={`nav-links ${open ? "show" : ""}`}>
          <li><a href="#hero"><FiHome /> Accueil</a></li>
          <li><a href="#services"><FiTool /> Services</a></li>
          <li><a href="#projects"><FiImage /> Réalisations</a></li>
          <li><a href="#contact"><FiPhone /> Contact</a></li>
          <li><a href="#map"><FiMapPin /> Localisation</a></li>
        </ul>

        <button className="nav-toggle" onClick={() => setOpen((p) => !p)}>
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
