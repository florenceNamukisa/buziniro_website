import { useEffect, useState } from 'react';
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
  const [page, setPage] = useState('home');
  
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      setPage(hash === '#/facility' || hash === '#facility' ? 'facility' : 'home');
    };
    
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);
  
  if (page === 'facility') {
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
