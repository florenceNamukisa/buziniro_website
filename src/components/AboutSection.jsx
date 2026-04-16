import aboutImage from '../../Assets/images/handshake-4608298_1280.jpg';
import atmosphereImage from '../../Assets/images/alesia-kazantceva-XLm6-fPwK5Q-unsplash-scaled.jpg';
import historyImage from '../../Assets/images/KANUNGUDD.png';
import { SectionHeading } from './SectionHeading.jsx';
import { SectionReveal } from './SectionReveal.jsx';

export function AboutSection() {
  return (
    <section className="section section--soft about-section" id="about">
      <div className="about__backdrop" style={{ backgroundImage: `url(${atmosphereImage})` }} />
      <div className="about__mesh" />

      <div className="container about">
        <SectionReveal className="about__content" animation="slide-left">
          <SectionHeading
            eyebrow="About Us"
            title="Building tomorrow's communities today."
          />

          <div className="about__info">
            <div className="about__item about__item--who">
              <h2 className="about__title">WHO WE ARE</h2>
              <p>
                We are a dynamic, diversified investment group with a variety of key interests in Properties, Automotive, and hospitality, Engineering, Manufacturing, Education and Capital Ventures among others. At Buziniro, we are built on the belief that a company like ours is not just about the buildings and facilities and what growth we accumulate.
              </p>
              <p>
                At its best it's about plans, strategies, solutions, spaces, events and places that improve lives and help businesses thrive; for the employees, citizens and communities that make impact matter. We strive to be our best at every project, helping people be more agile, thoughtful, innovative, inclusive, productive, prosperous and positive.
              </p>
            </div>

            <div className="about__philosophies">
              <h2 className="about__title">OUR PHILOSOPHIES!</h2>
              <ul className="about__list">
                <li>Professionalism & Integrity.</li>
                <li>Reliable and affordable.</li>
                <li>Compliance with the laws, rules and regulations.</li>
                <li>Adherence to partnerships.</li>
              </ul>
            </div>
          </div>
        </SectionReveal>

        <SectionReveal className="about__visual" delay={120} animation="slide-right">
          <div className="about__image-card">
            <img src={aboutImage} alt="Buziniro partnership moment" />
          </div>

          <div className="about__side-content">
            <div className="about__item about__item--vision">
              <h2 className="about__title">VISION</h2>
              <p>To do and be what contributes to the social and economic development and prosperity of the communities in which we operate.</p>
            </div>

            <div className="about__divider"></div>

            <div className="about__item about__item--mission">
              <h2 className="about__title">MISSION</h2>
              <p>To create sustainable solutions for growth that benefit society, partners, shareholders, and support socio-economic well-being.</p>
            </div>

            <a href="#history" className="about__read-more" onClick={(e) => {
              e.preventDefault();
              document.querySelector('.about__history')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Read More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </SectionReveal>

        <SectionReveal className="about__history" id="history" delay={180}>
          <div className="about__history-content">
            <h2 className="about__title about__title--history">OUR HISTORY</h2>
            <p>
              From the small hill-village community called Buziniro, is where the founder was born. The memorable experience of Buziniro is Love.
            </p>
            <p>
              Made of history and Inspired by Love, our daily inspiration is about impacting societies to overcome economic challenges, expand opportunities, and help communities thrive—through identifying and investing in projects that generate sustainable growth, impact, and returns for society, shareholders, and to contribute to the economic and social development of the areas in which we invest and operate.
            </p>
          </div>
          <div className="about__history-image">
            <img src={historyImage} alt="Buziniro heritage" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
