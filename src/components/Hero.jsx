import heroOne from '../../Assets/images/hero.png';
import heroTwo from '../../Assets/images/hero2.png';
import heroThree from '../../Assets/images/hero3.png';
import heroFour from '../../Assets/images/Buziniro-Group.pdf-image-024.jpg';
import { SectionReveal } from './SectionReveal.jsx';

export function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero__bg-grid">
        <div className="hero__bg-img" style={{ backgroundImage: `url(${heroOne})` }}>
          <div className="hero__glare"></div>
          <div className="hero__shine"></div>
          <div className="hero__particles">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
        <div className="hero__bg-img" style={{ backgroundImage: `url(${heroTwo})` }}>
          <div className="hero__glare"></div>
          <div className="hero__shine"></div>
          <div className="hero__particles">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
        <div className="hero__bg-img" style={{ backgroundImage: `url(${heroThree})` }}>
          <div className="hero__glare"></div>
          <div className="hero__shine"></div>
          <div className="hero__particles">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
        <div className="hero__bg-img" style={{ backgroundImage: `url(${heroFour})` }}>
          <div className="hero__glare"></div>
          <div className="hero__shine"></div>
          <div className="hero__particles">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
        <div className="hero__glow"></div>
      </div>
      
      <div className="container hero__content">
        <SectionReveal className="hero__card" delay={60}>
          <span className="hero__badge">Premium</span>
          <h1>
            Dynamic. Evolved.
            <br />
            Diversified Investments.
          </h1>

          <div className="hero__actions">
            <a href="#contact" className="button button--primary">
              Contact Us
            </a>
            <a href="#about" className="button button--ghost">
              Learn More
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
