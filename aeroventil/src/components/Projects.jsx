// src/components/Projects.jsx
function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Nos réalisations</h2>
        <p className="section-subtitle">
          Découvrez quelques-uns de nos projets récents en ventilation et climatisation
        </p>

        <div className="projects-grid">
          <article className="project-card">
            <img src="/real1.jpg" alt="Parking souterrain" />
            <h3>Installation d’un système d’extraction parking</h3>
            <p>Étude, fourniture et pose d’extracteurs et gaines métalliques.</p>
          </article>

          <article className="project-card">
            <img src="/real2.jpg" alt="Cuisine industrielle" />
            <h3>Ventilation d’une cuisine industrielle</h3>
            <p>Hotte, réseau de gaines et traitement d’air pour cuisine professionnelle.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;
