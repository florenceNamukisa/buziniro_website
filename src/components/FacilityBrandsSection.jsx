import { useRef, useState, useEffect } from 'react';
import { SectionReveal } from './SectionReveal.jsx';
import clean1Logo from '../../Assets/images/clean1.png';
import clean2Logo from '../../Assets/images/clean2.png';
import clean3Logo from '../../Assets/images/clean3.png';
import clean4Logo from '../../Assets/images/clean4.jpg';
import clean6Logo from '../../Assets/images/clean6.jpeg';
import clean7Logo from '../../Assets/images/clean7.png';

const facilityBrands = [
  { id: 1, name: 'clean1', logo: clean1Logo },
  { id: 2, name: 'clean2', logo: clean2Logo },
  { id: 3, name: 'clean3', logo: clean3Logo },
  { id: 4, name: 'clean4', logo: clean4Logo },
  { id: 5, name: 'clean6', logo: clean6Logo },
  { id: 6, name: 'clean7', logo: clean7Logo },
];

export function FacilityBrandsSection({ id }) {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const handleArrowClick = (direction) => {
    if (sliderRef.current) {
      const cardWidth = 180 + 24;
      const scrollAmount = direction === 'left' ? -cardWidth * 3 : cardWidth * 3;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const getPositionX = (event) => {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
  };

  const animation = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${currentTranslate}px)`;
    }
  };

  const startDrag = (position) => {
    setIsDragging(true);
    setStartPos(position);
  };

  const duringDrag = (position) => {
    if (isDragging) {
      const currentPosition = position;
      setCurrentTranslate(prevTranslate + currentPosition - startPos);
    }
  };

  const endDrag = () => {
    if (isDragging) {
      setIsDragging(false);
      setPrevTranslate(currentTranslate);
    }
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    startDrag(getPositionX(e));
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      e.preventDefault();
      duringDrag(getPositionX(e));
    }
  };

  const handleMouseUp = () => {
    endDrag();
  };

  const handleTouchStart = (e) => {
    startDrag(getPositionX(e));
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      e.preventDefault();
      duringDrag(getPositionX(e));
    }
  };

  const handleTouchEnd = () => {
    endDrag();
  };

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        if (sliderRef.current) {
          sliderRef.current.scrollBy({ left: 220, behavior: 'smooth' });
        }
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoPlay]);

  const handleMouseEnter = () => {
    setAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setAutoPlay(true);
  };

  return (
    <section id={id} className="facility-brands">
      <div className="container">
        <SectionReveal animation="pop">
          <div className="facility-brands__header">
            <span className="facility-brands__eyebrow">Our Partners</span>
            <h2 className="facility-brands__title">Trusted by Industry Leaders</h2>
            <p className="facility-brands__desc">
              We proudly partner with leading brands across various sectors to deliver exceptional cleaning and facility management solutions.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal animation="slide-up" delay={100}>
          <div className="facility-brands__track">
            <div
              className="facility-brands__slider"
              ref={sliderRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
               {[...facilityBrands, ...facilityBrands, ...facilityBrands].map((brand, index) => (
                 <div key={`${brand.id}-${index}`} className="facility-brands__card">
                   <div className="facility-brands__logo">
                     {brand.logo ? (
                       <img src={brand.logo} alt={brand.name} />
                     ) : (
                       <div className="facility-brands__logo-placeholder">
                         <span className="facility-brands__logo-text">{brand.name}</span>
                       </div>
                     )}
                   </div>
                 </div>
               ))}
            </div>
            <div className="facility-brands__controls">
              <button
                type="button"
                className="brands-arrow brands-arrow--left"
                onClick={() => handleArrowClick('left')}
                aria-label="Previous brands"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                  <path d="M14.5 5L7.5 12L14.5 19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                className="brands-arrow brands-arrow--right"
                onClick={() => handleArrowClick('right')}
                aria-label="Next brands"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                  <path d="M9.5 5L16.5 12L9.5 19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
