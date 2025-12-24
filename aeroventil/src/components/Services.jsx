// src/components/Services.jsx
import { siteData } from "../data/siteData";

function Services() {
  return (
    <section id="services" className="section section-colored">
      <div className="container">
        <h2 className="section-title">Nos services</h2>
        <p className="section-subtitle">
          Entretien, installation et ventilation professionnelle
        </p>

        <div className="services-grid">
          {siteData.services.map((srv, i) => (
            <article key={i} className="card service-card">
              <div className="service-icon">{srv.icon}</div>
              <h3>{srv.title}</h3>
              <p>{srv.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
