import { useEffect, useMemo, useState } from 'react';
import { SectionHeading } from './SectionHeading.jsx';
import { SectionReveal } from './SectionReveal.jsx';

function Arrow({ direction = 'left' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d={direction === 'left' ? 'M14.5 5L7.5 12L14.5 19' : 'M9.5 5L16.5 12L9.5 19'}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FacebookFeedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const linkedInCompanyId = 'buziniro-ltd';

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/in.js';
    script.async = true;
    script.onload = () => setIsLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const slides = useMemo(() => {
    return [
      {
        id: 'feed',
        type: 'embed',
        title: 'Company Updates',
        description: 'Latest posts and news from Buziniro Ltd.',
      },
      {
        id: 'follow',
        type: 'link',
        title: 'Follow Us',
        description: 'Stay updated with our latest news and opportunities.',
        href: 'https://www.linkedin.com/company/buziniro-ltd/',
      },
    ];
  }, []);

  useEffect(() => {
    if (slides.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5500);

    return () => window.clearInterval(intervalId);
  }, [slides.length]);

  const goToSlide = (index) => setActiveIndex(index);
  const goToPrevious = () =>
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  const goToNext = () => setActiveIndex((current) => (current + 1) % slides.length);

  return (
    <section className="section section--soft" id="linkedin-updates">
      <div className="container">
        <SectionReveal>
          <SectionHeading
            eyebrow="LinkedIn Updates"
            title="Latest from Buziniro on LinkedIn."
          />
        </SectionReveal>

        <SectionReveal className="facebook-carousel-wrap" delay={100}>
          <div className="facebook-carousel__controls">
            <button type="button" onClick={goToPrevious} aria-label="Previous slide">
              <Arrow direction="left" />
            </button>
            <button type="button" onClick={goToNext} aria-label="Next slide">
              <Arrow direction="right" />
            </button>
          </div>

          <div className="facebook-carousel">
            <div
              className="facebook-carousel__track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {slides.map((slide) => (
                <article key={slide.id} className="facebook-slide">
                  <div className="facebook-slide__content">
                    <span className="facebook-slide__eyebrow">LinkedIn</span>
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>

                    {slide.type === 'link' && (
                      <a
                        className="button button--primary"
                        href={slide.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open LinkedIn Page
                      </a>
                    )}
                  </div>

                  <div className="facebook-slide__frame">
                    {slide.type === 'embed' && isLoaded && window.IN ? (
                      <div className="linkedin-widget">
                        <script
                          type="IN/CompanyProfile"
                          data-id={linkedInCompanyId}
                          data-format="inline"
                          data-width="100%"
                        ></script>
                      </div>
                    ) : (
                      <div className="facebook-slide__placeholder">
                        <div>
                          <span>LinkedIn</span>
                          <strong>Company page feed loads here.</strong>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="facebook-carousel__dots" role="tablist" aria-label="Slides">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={activeIndex === index ? 'is-active' : ''}
                onClick={() => goToSlide(index)}
                aria-label={`Go to ${slide.title}`}
                aria-selected={activeIndex === index}
              />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
