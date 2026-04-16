import { useRef } from 'react';
import brand1 from '../../Assets/images/1.png';
import brand2 from '../../Assets/images/2.png';
import brand3 from '../../Assets/images/Buziniro-Group.pdf-image-040.png';
import brand4 from '../../Assets/images/4.png';
import brand5 from '../../Assets/images/5.png';
import brand6 from '../../Assets/images/6.png';
import brand7 from '../../Assets/images/Buziniro-Group.pdf-image-044.png';
import brand8 from '../../Assets/images/8.png';
import brand9 from '../../Assets/images/9.png';
import brand10 from '../../Assets/images/10.jpg';
import brand11 from '../../Assets/images/Buziniro-Group.pdf-image-039.png';
import brand12 from '../../Assets/images/Buziniro-Group.pdf-image-041.png';
import brand13 from '../../Assets/images/Buziniro-Group.pdf-image-042.png';
import { SectionReveal } from './SectionReveal.jsx';

const brands = [
  { name: 'Brand One', logo: brand1 },
  { name: 'Brand Two', logo: brand2 },
  { name: 'Brand Three', logo: brand3 },
  { name: 'Brand Four', logo: brand4 },
  { name: 'Brand Five', logo: brand5 },
  { name: 'Brand Six', logo: brand6 },
  { name: 'Brand Seven', logo: brand7 },
  { name: 'Brand Eight', logo: brand8 },
  { name: 'Brand Nine', logo: brand9 },
  { name: 'Brand Ten', logo: brand10 },
  { name: 'Brand Eleven', logo: brand11 },
  { name: 'Brand Twelve', logo: brand12 },
  { name: 'Brand Thirteen', logo: brand13 },
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