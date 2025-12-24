import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert("Configuration EmailJS manquante (.env).");
      return;
    }
    try {
      setLoading(true);
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        { publicKey: PUBLIC_KEY }
      );
      setSent(true);
      formRef.current.reset();
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error(err);
      alert("❌ Échec de l’envoi. Vérifie la console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section fancy-bg">
      <div className="container contact-wrap">

        {/* bloc titre */}
        <header className="contact-head">
          <span className="badge">Parlons de votre projet</span>
          <h2 className="section-title">Contact & Devis</h2>
          <p className="section-subtitle">
            Études, installation, entretien et maintenance — réponse rapide et personnalisée.
          </p>
        </header>

        <div className="contact-grid">

          {/* Carte infos */}
          <aside className="card glass info-card reveal">
            <ul className="info-list">
              <li>
                <span className="info-icon"><FiMapPin /></span>
                <div>
                  <strong>Adresse</strong>
                  <p>Paris, France</p>
                </div>
              </li>
              <li>
                <span className="info-icon"><FiPhone /></span>
                <div>
                  <strong>Téléphone</strong>
                  <p>+33 00 00 00 00</p>
                </div>
              </li>
              <li>
                <span className="info-icon"><FiMail /></span>
                <div>
                  <strong>Email</strong>
                  <p>aeroventil@gmail.com</p>
                </div>
              </li>
            </ul>

            <div className="mini-hint">
              Besoin d’une intervention urgente ? Appelez-nous directement.
            </div>
          </aside>

          {/* Formulaire */}
          <div className="card glass form-card reveal">
            <form ref={formRef} onSubmit={onSubmit} className="fancy-form">
              <div className="field">
                <input name="name" id="name" type="text" placeholder=" " required />
                <label htmlFor="name">Votre nom</label>
              </div>

              <div className="field">
                <input name="email" id="email" type="email" placeholder=" " required />
                <label htmlFor="email">Votre email</label>
              </div>

              <div className="field">
                <input name="phone" id="phone" type="tel" placeholder=" " />
                <label htmlFor="phone">Téléphone (optionnel)</label>
              </div>

              <div className="field">
                <textarea name="message" id="message" rows="4" placeholder=" " required />
                <label htmlFor="message">
                  Décrivez votre besoin (entretien, pompe de relevage, extracteur parking, CTA…)
                </label>
              </div>

              <button type="submit" className={`btn primary send ${loading ? "loading" : ""}`}>
                {loading ? "Envoi en cours..." : "Envoyer"}
                <FiSend className="btn-ico" />
              </button>
            </form>
          </div>
        </div>

        {/* Toast succès */}
        {sent && (
          <div className="toast success">
            <FiCheckCircle />
            <span>Message envoyé ! Nous vous répondons rapidement.</span>
          </div>
        )}
      </div>
    </section>
  );
}
