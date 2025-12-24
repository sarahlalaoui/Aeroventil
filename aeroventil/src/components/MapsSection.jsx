// src/components/MapSection.jsx
function MapSection() {
  return (
    <section id="map" className="section">
      <div className="container">
        <h2 className="section-title">Localisation</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.429445064796!2d3.050000!3d36.750000!2m3!1f0!2f0!3f0!3m2!1sfr!2sdz!4v0000000000000"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation Aero Ventil"
        ></iframe>
      </div>
    </section>
  );
}

export default MapSection;
