import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { AboutSection } from './components/AboutSection.jsx';
import { ServicesSection } from './components/ServicesSection.jsx';
import { BrandsSection } from './components/BrandsSection.jsx';
import { ContactSection } from './components/ContactSection.jsx';
import { Footer } from './components/Footer.jsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.jsx';
import FacilityPage from './pages/FacilityPage.jsx';

function App() {
  const path = window.location.pathname;
  const hash = window.location.hash;
  
  if (path === '/facility' || path === '/facility.html' || path === '/facility/' || hash === '#/facility') {
    return <FacilityPage />;
  }

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <BrandsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
