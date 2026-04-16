import imageOne from '../../Assets/images/Buziniro-Group.pdf-image-024.jpg';
import imageTwo from '../../Assets/images/Buziniro-Group.pdf-image-030.jpg';
import imageThree from '../../Assets/images/0.jpg';
import { siteConfig } from '../siteConfig.js';
import { SectionHeading } from './SectionHeading.jsx';
import { SectionReveal } from './SectionReveal.jsx';

export function PropertiesSection() {
  return (
    <section className="section section--deep" id="properties">
      <div className="container properties">
        <SectionReveal className="properties__intro">
          <SectionHeading
            eyebrow="Properties"
            title="Building spaces that inspire."
            light
          />
        </SectionReveal>

        <div className="properties__layout">
          <SectionReveal className="properties__gallery" delay={80}>
            <div className="properties__gallery-main">
              <img src={imageOne} alt="Buziniro property exterior" />
            </div>
            <div className="properties__gallery-stack">
              <img src={imageTwo} alt="Buziniro property environment" />
              <img src={imageThree} alt="Buziniro property lifestyle scene" />
            </div>
          </SectionReveal>

          <SectionReveal className="properties__details" delay={140}>
            <div className="properties__lead-card">
              <span className="properties__tag">Facility Management</span>
              <h3>Operations that keep every asset polished, responsive, and reliable.</h3>
              <p>
                Facility management is presented as a core property capability rather than an
                afterthought. That gives the website a stronger commercial story for landlords,
                occupiers, partners, and investors alike.
              </p>

              <ul className="properties__features">
                {siteConfig.facilityHighlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="properties__solution-grid">
              {siteConfig.propertySolutions.map((item) => (
                <article key={item.title} className="property-solution">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
