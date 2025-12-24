// src/components/Hero.jsx
import { siteData } from "../data/siteData";

function Hero() {
  const hero = siteData.hero;
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-inner">
      
        <h1>{hero.title}</h1>
        <p className="hero-sub">{hero.subtitle}</p>
        <div className="hero-actions">
          <a href="#contact" className="btn primary">
            {hero.ctaPrimary}
          </a>
          <a href="#services" className="btn ghost">
            {hero.ctaSecondary}
          </a>

        </div>
      </div>
      <span className="bubble b1"></span>
      <span className="bubble b2"></span>
    </section>
  );
}

export default Hero;
