import { useState } from 'react';
import logo from '../../Assets/images/uziniro logo.png';
import heroImg from '../../Assets/images/cleaning.png';
import aboutImg from '../../Assets/images/about.png';
import facilityImg from '../../Assets/images/facility.png';
import cleanerImg from '../../Assets/images/cleaner.png';
import industryImg from '../../Assets/images/industry.png';
import pestImg from '../../Assets/images/pest.png';
import { Navbar } from '../components/Navbar.jsx';
import { Footer } from '../components/Footer.jsx';

function Hero() {
  return (
    <section className="facility-hero">
      <div className="facility-hero__bg">
        <img src={heroImg} alt="Facility Management" className="facility-hero__img" />
        <div className="facility-hero__overlay"></div>
      </div>
      <div className="container facility-hero__content">
        <span className="facility-hero__badge">Facility Management</span>
        <h1>Professional Cleaning & Maintenance Solutions</h1>
        <p>Facility management is at the core of what we do at Buziniro, delivering professional, reliable, and high-quality cleaning and maintenance solutions across Uganda.</p>
        <div className="facility-hero__actions">
          <a href="/#contact" className="button button--primary">Get a Quote</a>
          <a href="/#about" className="button button--ghost">Learn More</a>
        </div>
      </div>
    </section>
  );
}

function AboutSection({ id }) {
  return (
    <section id={id} className="facility-about">
      <div className="container">
        <div className="facility-about__layout">
          <div className="facility-about__left">
            <div className="facility-about__intro">
              <h2>Professional Cleaning Services in Uganda</h2>
              <p>
                We are a professional commercial cleaning company in Uganda well placed as an excellent cleaning service provider with systems, processes and workforce skill set at industry standard locally and globally.
              </p>
            </div>
            
            <div className="facility-about__section">
              <h3>OUR CLIENT ENGAGEMENT PHILOSOPHY</h3>
              <p>To provide the highest quality cleaning solutions that build long-term valuable relationships with clients.</p>
            </div>
            
            <div className="facility-about__section">
              <h3>OUR APPROACH</h3>
              <div className="facility-approach-items">
                <span className="facility-approach-item facility-approach-item--1">Professionalism</span>
                <span className="facility-approach-item facility-approach-item--2">Safety</span>
                <span className="facility-approach-item facility-approach-item--3">Sustainability</span>
              </div>
            </div>
            
            <div className="facility-about__section facility-about__section--last">
              <h3>SERVICE MANDATE</h3>
              <ul className="facility-mandate-list">
                <li>Facility Management</li>
                <li>Janitorial Services</li>
                <li>Industrial and Warehouse Cleaning</li>
                <li>Fumigation and Pest Control</li>
              </ul>
            </div>
          </div>
          
          <div className="facility-about__right">
            <div className="facility-about__image">
              <img src={aboutImg} alt="About Buziniro Facility Management" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: 'Facility Management',
    description: 'Comprehensive facility management services ensuring your property is always in top condition with professional oversight and maintenance.',
    image: facilityImg,
  },
  {
    title: 'Janitorial Services',
    description: 'Professional daily and periodic cleaning services for offices, commercial spaces, and residential buildings with dedicated staff.',
    image: cleanerImg,
  },
  {
    title: 'Industrial & Warehouse Cleaning',
    description: 'Specialized cleaning for factories, warehouses, and industrial facilities using heavy-duty equipment and industry-compliant protocols.',
    image: industryImg,
  },
  {
    title: 'Fumigation & Pest Control',
    description: 'Comprehensive pest management solutions to keep your facilities safe, hygienic, and compliant with health regulations.',
    image: pestImg,
  }
];

function ServicesSection({ id }) {
  return (
    <section id={id} className="facility-services">
      <div className="container">
        <div className="facility-services__header">
          <span className="facility-services__eyebrow">Our Services</span>
          <h2>SERVICE MANDATE</h2>
          <p>We deliver comprehensive cleaning and facility management solutions across Uganda.</p>
        </div>

        <div className="facility-services__grid">
          {services.map((service, index) => (
            <div key={service.title} className="facility-service-card" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="facility-service-card__image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="facility-service-card__body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({ id }) {
  const features = [
    { title: 'OPERATION METHODOLOGY', desc: 'A well-trained and experienced cleaning crew with comprehensive customized cleaning schedule and top-of-the-line cleaning tools.' },
    { title: 'MICROFIBER TECHNOLOGY', desc: 'Anti-microbial impregnated micro-fiber system which cleans greener and dryer while removing more dust contaminants.' },
    { title: 'BUFFER AND VACCUM TECHNOLOGY', desc: 'Modern and powerful equipment systems by HEPA Technology effective both in safety and convenience.' },
    { title: 'HEALTH & ENVIRONMENTALY SAFE CHEMICALS', desc: 'Working with framework set for Human and environmental safety using modern Science of Disinfecting.' },
    { title: 'COLOUR CODING ESSENTIALS', desc: 'Strict colour coding of cleaning equipment and materials both at use and in storage to prevent cross contamination.' },
    { title: 'EMPLOYMENT TRAINING PROGRAMMES', desc: 'Four stages: Induction Training, On Site Training, and Continuous Training.' },
    { title: 'HEALTH AND SAFETY POLICY', desc: 'Committed to providing a healthy and safe environment for all employees and people affected by cleaning activities.' },
    { title: 'DUE DILLIGENCE', desc: 'All staff are vetted and fit to work in accordance to labour laws and regulations with no prior criminal records.' },
  ];

  return (
    <section id={id} className="facility-features">
      <div className="container">
        <div className="facility-features__header">
          <span className="facility-features__eyebrow">Why Choose Us</span>
          <h2>OPERATION METHODOLOGY</h2>
        </div>

        <div className="facility-features__grid">
          {features.map((feature, index) => (
            <div key={feature.title} className="facility-feature-card">
              <div className="facility-feature-card__number">{String(index + 1).padStart(2, '0')}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="facility-features__cta">
          <h3>Ready to Transform Your Facility?</h3>
          <p>Contact us today for a customized cleaning solution</p>
          <a 
            href="https://wa.me/256793192760?text=Hello%20Buziniro,%20I%20would%20like%20to%20discuss%20a%20facility%20management%20project." 
            className="button button--primary"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ id }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('interest', 'Facility Management');
      formData.append('message', `Phone: ${form.phone}\n\n${form.message}`);

      const response = await fetch('/submit-form.php', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.status === 'success') {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id={id} className="facility-contact">
      <div className="container">
        <div className="facility-contact__header">
          <span className="facility-contact__eyebrow">Contact Us</span>
          <h2>Get In Touch</h2>
          <p>Let's discuss how we can help maintain your facility.</p>
        </div>

        <form className="facility-contact__form" onSubmit={handleSubmit}>
          <div className="facility-contact__grid">
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" required />
          </div>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your facility and cleaning needs..." rows="5" required></textarea>
          
          <button type="submit" className="button button--primary button--full" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
          </button>
          
          {status === 'success' && <p className="facility-contact__success">Thank you! We'll be in touch soon.</p>}
          {status === 'error' && <p className="facility-contact__error">Failed to send. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}

export default function FacilityPage() {
  return (
    <div className="facility-page">
      <Navbar />
      <main>
        <Hero />
        <AboutSection id="about" />
        <ServicesSection id="services" />
        <FeaturesSection id="why-us" />
      </main>
      <Footer />
    </div>
  );
}