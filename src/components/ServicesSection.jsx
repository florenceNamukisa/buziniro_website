import propImg from '../../Assets/images/Buziniro-Group.pdf-image-024.jpg';
import hospImg from '../../Assets/images/Buziniro-Group.pdf-image-028.jpg';
import capitalImg from '../../Assets/images/Buziniro-Group.pdf-image-026.jpg';
import autoImg from '../../Assets/images/Buziniro-Group.pdf-image-030.jpg';
import mfgImg from '../../Assets/images/Buziniro-Group.pdf-image-034.jpg';
import energyImg from '../../Assets/images/Buziniro-Group.pdf-image-037.jpg';
import { SectionHeading } from './SectionHeading.jsx';
import { SectionReveal } from './SectionReveal.jsx';

const services = [
  {
    title: 'Properties',
    description: 'We combine extensive experience with forward-thinking creativity to deliver best-in-class, sustainable developments across residential, commercial, and hospitality sectors. Our portfolio includes high-end apartments, educational and industrial facilities, retail spaces, and resort complexes, all built with superior design, quality materials, and a commitment to industry best practices.',
    image: propImg,
    color: '#0d4fc2'
  },
  {
    title: 'Hospitality',
    description: 'We intentionally develop state-of-the-art hotels and recreational facilities that foster outstanding partnerships with operators. under the exclusive oversight of our dedicated asset management experts. Our Asset Management team works closely with all stakeholders— across every aspect—to ensure each asset reaches its full potential, delivering on the group\'s vision and upholding our shareholders\' values.',
    image: hospImg,
    color: '#e85d04'
  },
  {
    title: 'Capital',
    description: 'We pursue investments with stable cash flows, ensuring each venture meets or exceeds industry benchmarks and is strategically diversified across asset classes. We actively trade in regional stock markets, seeking attractive opportunities in both primary and secondary markets. Through close collaboration with our investment partners and management teams, we focus on creating long-term value for our holdings — and for society.',
    image: capitalImg,
    color: '#2d6a4f'
  },
  {
    title: 'Automotives',
    description: 'We selectively engage in a wide range of automotive solutions, including redesign, improvement, development, mechanics, servicing, marketing, and the sale of automobiles. We invest significantly in research and development to deliver innovative, future-ready solutions that stand the test of time.',
    image: autoImg,
    color: '#9c27b0'
  },
  {
    title: 'Manufacturing & Engineering',
    description: 'We offer state-of-the-art Manufacturing and Engineering services focused on developing, operating, and maintaining efficient production systems. By leveraging the latest technologies and processes, we manufacture and produce a wide range of high-quality products.',
    image: mfgImg,
    color: '#d4a017'
  },
  {
    title: 'Energy and Minerals',
    description: 'We engage in the responsible and legal extraction, Beneficiation, and processing of various naturally occurring solid minerals from the earth. We also produce and supply energy products and solutions including fossil fuels, renewables, and green energy which serve as key drivers of industrial growth, livelihoods, and the broader economy.',
    image: energyImg,
    color: '#c62828'
  }
];

export function ServicesSection() {
  return (
    <section className="section services-section" id="services">
      <div className="services-section__bg">
        <div className="services-section__orb"></div>
        <div className="services-section__orb services-section__orb--2"></div>
        <div className="services-section__grid"></div>
      </div>
      
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="Services"
            title="Sectors that drive progress."
            description="We are diversified across Properties, Hospitality, Capital, Automotives, Manufacturing & Engineering, and Energy & Minerals."
          />
        </SectionReveal>

        <div className="services-grid">
          {services.map((service, index) => (
            <SectionReveal key={service.title} className="service-card" id={`services-${service.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-')}`} animation={index % 2 === 0 ? 'pop' : 'slide-up'} style={{ '--service-color': service.color }} delay={index * 80}>
              <div className="service-card__media">
                <img src={service.image} alt={service.title} />
                <div className="service-card__overlay"></div>
                <div className="service-card__shine"></div>
                <div className="service-card__particles">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div className="service-card__body">
                <div className="service-card__badge" style={{ borderColor: service.color, color: service.color }}>0{index + 1}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-card__line" style={{ background: service.color }}></div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
