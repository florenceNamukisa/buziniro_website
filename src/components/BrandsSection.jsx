import { useRef } from 'react';
import brand3 from '../../Assets/images/Buziniro1.jpeg';
import brand7 from '../../Assets/images/Buziniro2.jpeg';
import brand11 from '../../Assets/images/Buziniro3.jpeg';
import brand13 from '../../Assets/images/Buziniro4.jpeg';
import brand15 from '../../Assets/images/Buziniro5.jpeg';
import brand17 from '../../Assets/images/Buziniro6.jpeg';
import brand19 from '../../Assets/images/Buziniro7.jpeg';
import brand21 from '../../Assets/images/Buziniro8.jpeg';
import brand23 from '../../Assets/images/Buziniro9.jpeg';
import brand25 from '../../Assets/images/Buziniro11.jpeg';
import brand27 from '../../Assets/images/Buziniro12.jpeg';
import brand29 from '../../Assets/images/Buziniro13.jpeg';
import brand31 from '../../Assets/images/Buziniro14.jpeg';
import { SectionReveal } from './SectionReveal.jsx';

const brands = [
  { name: 'Brand Three', logo: brand3 },
  { name: 'Brand Seven', logo: brand7 },
  { name: 'Brand Eleven', logo: brand11 },
  { name: 'Brand Thirteen', logo: brand13 },
  { name: 'Brand Fifteen', logo: brand15 },
  { name: 'Brand Seventeen', logo: brand17 },
  { name: 'Brand Nineteen', logo: brand19 },
  { name: 'Brand Twenty-One', logo: brand21 },
  { name: 'Brand Twenty-Three', logo: brand23 },
  { name: 'Brand Twenty-Five', logo: brand25 },
  { name: 'Brand Twenty-Seven', logo: brand27 },
  { name: 'Brand Twenty-Nine', logo: brand29 },
  { name: 'Brand Thirty-One', logo: brand31 },
];

export function BrandsSection() {
  const sliderRef = useRef(null);

  const handleArrowClick = (direction) => {
    if (sliderRef.current) {
      const cardWidth = 180 + 24; // width + gap
      const scrollAmount = direction === 'left' ? -cardWidth * 3 : cardWidth * 3;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="section brands-section" id="brands">
      <div className="brands-section__bg">
        <div className="brands-section__orb"></div>
      </div>
      
      <div className="container">
        <SectionReveal animation="pop">
          <div className="brands-section__header">
            <span className="brands-section__eyebrow">Our Brands</span>
            <h2 className="brands-section__title">Trusted by industry leaders</h2>
            <p className="brands-section__desc">
              We partner with renowned brands across diverse sectors to deliver exceptional results.
            </p>
          </div>
        </SectionReveal>

        <div className="brands-section__track">
          <div className="brands-section__slider" ref={sliderRef}>
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="brands-section__card">
                <div className="brands-section__logo">
                  <img src={brand.logo} alt={brand.name} />
                </div>
              </div>
            ))}
          </div>
          <div className="brands-section__controls">
            <button type="button" className="brands-arrow brands-arrow--left" onClick={() => handleArrowClick('left')} aria-label="Previous brands">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path d="M14.5 5L7.5 12L14.5 19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" className="brands-arrow brands-arrow--right" onClick={() => handleArrowClick('right')} aria-label="Next brands">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path d="M9.5 5L16.5 12L9.5 19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}