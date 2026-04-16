import { SectionHeading } from './SectionHeading.jsx';
import { SectionReveal } from './SectionReveal.jsx';

const services = [
  {
    icon: '🧹',
    title: 'Janitorial Services',
    desc: 'Professional daily and periodic cleaning for offices, commercial spaces, and residential buildings.'
  },
  {
    icon: '🏭',
    title: 'Industrial & Warehouse Cleaning',
    desc: 'Specialized cleaning for factories, warehouses, and industrial facilities with heavy-duty equipment.'
  },
  {
    icon: '🦟',
    title: 'Fumigation & Pest Control',
    desc: 'Comprehensive pest management solutions to keep your facilities safe and hygienic.'
  },
  {
    icon: '🛡️',
    title: 'Trained & Vetted Team',
    desc: 'Well-trained, experienced staff with thorough vetting and full labor compliance.'
  },
  {
    icon: '🌿',
    title: 'Eco-Friendly Approach',
    desc: 'Green cleaning chemicals, microfiber technology, and HEPA-powered systems for superior results.'
  },
  {
    icon: '📋',
    title: 'Customized Schedules',
    desc: 'Tailored cleaning schedules to fit your specific needs and operational requirements.'
  }
];

const features = [
  'Strict color-coding systems to prevent cross-contamination',
  'Continuous staff training through structured programs',
  'Strong health and safety policies',
  'Modern equipment and advanced cleaning technology',
  'Due diligence with thoroughly vetted staff',
  'Long-term client relationships built on trust'
];

export function FacilityManagementSection() {
  return (
    <section className="section section--deep facility-section" id="facility-management">
      <div className="facility-section__bg">
        <div className="facility-section__pattern"></div>
      </div>
      
      <div className="container">
        <SectionReveal>
          <div className="facility-section__header">
            <span className="facility-section__eyebrow">Facility Management</span>
            <h2 className="facility-section__title">Professional Cleaning & Maintenance Solutions</h2>
            <p className="facility-section__lead">
              Facility management is at the core of what we do at Buziniro, delivering professional, reliable, and high-quality cleaning and maintenance solutions across Uganda.
            </p>
          </div>
        </SectionReveal>

        <div className="facility-grid">
          {services.map((service, index) => (
            <SectionReveal key={service.title} className="facility-card" delay={index * 80}>
              <div className="facility-card__icon">{service.icon}</div>
              <h3 className="facility-card__title">{service.title}</h3>
              <p className="facility-card__desc">{service.desc}</p>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal className="facility-features" delay={200}>
          <div className="facility-features__content">
            <h3>Our Commitment</h3>
            <p>
              Our approach is built on professionalism, safety, and sustainability. We implement strict protocols and maintain high standards to protect both our employees and clients while delivering trusted, consistent services.
            </p>
            <ul className="facility-features__list">
              {features.map((feature) => (
                <li key={feature}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="facility-features__cta">
            <a href="#contact" className="button button--primary">Request a Quote</a>
            <p>Building long-term, valuable relationships with our clients</p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}