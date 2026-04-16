import logo from '../../Assets/images/uziniro logo.png';
import { siteConfig } from '../siteConfig.js';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__top">
          <a className="site-footer__brand" href="#home">
            <img src={logo} alt="Buziniro logo" />
            <span>Buziniro</span>
          </a>

          <div className="site-footer__links">
            <div className="site-footer__column">
              <h4>Company</h4>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#brands">Our Brands</a>
            </div>
            <div className="site-footer__column">
              <h4>Contact</h4>
              <a href="#contact">Contact Us</a>
              <a href={`mailto:${siteConfig.contactEmail}`}>Email Us</a>
              <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>

          <div className="site-footer__social">
            <a href="https://www.linkedin.com/company/buziniro-ltd/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>&copy; {currentYear} Buziniro. All rights reserved.</p>
          <p>Mutungo Hill Ring Road, Plot 628, Ssentongo Close</p>
        </div>
      </div>
    </footer>
  );
}