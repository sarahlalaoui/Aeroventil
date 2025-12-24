import { siteData } from "./data/siteData";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
import MapSection from "./components/MapsSection";
import Footer from "./components/Footer";
import QuickCTA from "./components/QuickCTA";

function App() {
  return (
    <>
      <Navbar brand={siteData.brand} />
     
  <main>
    <Hero />
    <Services />
    <Projects />
    <Contact />
    <MapSection />
  </main>
  <Footer brand={siteData.brand} />
  <QuickCTA />   {/* ← bouton flottant */}
    </>
  );
}

export default App;
