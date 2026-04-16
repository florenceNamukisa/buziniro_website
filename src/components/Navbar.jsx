import { useEffect, useState } from 'react';
import logo from '../../Assets/images/uziniro logo.png';

const serviceLinks = [
  { label: 'Automotives', href: '/#services-automotives' },
  { label: 'Capital', href: '/#services-capital' },
  { label: 'Energy & Minerals', href: '/#services-energy-and-minerals' },
  { label: 'Hospitality', href: '/#services-hospitality' },
  { label: 'Manufacturing & Engineering', href: '/#services-manufacturing-engineering' },
  {
    label: 'Properties',
    href: '/#services-properties',
    children: [
      { label: 'Facility Management', href: '/facility' },
    ],
  },
];

function Chevron({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6 9.5L12 15.5L18 9.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopPropertiesOpen, setDesktopPropertiesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePropertiesOpen, setMobilePropertiesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);

    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', mobileMenuOpen);

    return () => document.body.classList.remove('menu-open');
  }, [mobileMenuOpen]);

  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setDesktopServicesOpen(false);
    setDesktopPropertiesOpen(false);
    setMobileServicesOpen(false);
    setMobilePropertiesOpen(false);
  };

  return (
    <header className={`site-navbar ${isScrolled ? 'site-navbar--scrolled' : ''}`}>
      <div className="container site-navbar__inner">
        <a className="site-brand" href="/" aria-label="Buziniro home">
          <img src={logo} alt="Buziniro logo" />
          <span>
            <strong>Buziniro</strong>
          </span>
        </a>

        <nav className="site-nav site-nav--desktop" aria-label="Primary">
<a href="/#about">About Us</a>

          <div
            className={`nav-dropdown ${desktopServicesOpen ? 'is-open' : ''}`}
            onMouseEnter={() => setDesktopServicesOpen(true)}
            onMouseLeave={() => {
              setDesktopServicesOpen(false);
              setDesktopPropertiesOpen(false);
            }}
          >
            <button
              type="button"
              className="nav-dropdown__trigger"
              aria-expanded={desktopServicesOpen}
              onClick={() => setDesktopServicesOpen((current) => !current)}
            >
              Services
              <Chevron />
            </button>

            <div className="dropdown-panel">
              {serviceLinks.map((item) =>
                item.children ? (
                  <div
                    className={`dropdown-submenu ${desktopPropertiesOpen ? 'is-open' : ''}`}
                    key={item.label}
                    onMouseEnter={() => setDesktopPropertiesOpen(true)}
                    onMouseLeave={() => setDesktopPropertiesOpen(false)}
                  >
                    <button
                      type="button"
                      className="dropdown-link dropdown-link--button"
                      aria-expanded={desktopPropertiesOpen}
                      onClick={() => setDesktopPropertiesOpen((current) => !current)}
                    >
                      {item.label}
                      <Chevron className="chevron chevron--side" />
                    </button>

                    <div className="dropdown-panel dropdown-panel--nested">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="dropdown-link"
                          onClick={closeAllMenus}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="dropdown-link"
                    onClick={closeAllMenus}
                  >
                    {item.label}
                  </a>
                ),
              )}
            </div>
          </div>

          <a href="/#contact">Contact Us</a>
          <a href="/#contact" className="button button--primary button--nav">
            Let's Talk
          </a>
        </nav>

        <button
          type="button"
          className={`site-nav-toggle ${mobileMenuOpen ? 'is-open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="container mobile-menu__inner">
          <a href="/#about" onClick={closeAllMenus}>
            About Us
          </a>
          <a href="/#brands" onClick={closeAllMenus}>
            Our Brands
          </a>

          <div className="mobile-menu__group">
            <button
              type="button"
              className="mobile-menu__toggle"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((current) => !current)}
            >
              Services
              <Chevron className={mobileServicesOpen ? 'chevron is-rotated' : 'chevron'} />
            </button>

            <div className={`mobile-submenu ${mobileServicesOpen ? 'is-open' : ''}`}>
              {serviceLinks.map((item) =>
                item.children ? (
                  <div key={item.label} className="mobile-menu__group mobile-menu__group--nested">
                    <button
                      type="button"
                      className="mobile-menu__toggle"
                      aria-expanded={mobilePropertiesOpen}
                      onClick={() => setMobilePropertiesOpen((current) => !current)}
                    >
                      {item.label}
                      <Chevron className={mobilePropertiesOpen ? 'chevron is-rotated' : 'chevron'} />
                    </button>

                    <div className={`mobile-submenu ${mobilePropertiesOpen ? 'is-open' : ''}`}>
                      {item.children.map((child) => (
                        <a key={child.label} href={child.href} onClick={closeAllMenus}>
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a key={item.label} href={item.href} onClick={closeAllMenus}>
                    {item.label}
                  </a>
                ),
              )}
            </div>
          </div>

          <a href="/#contact" onClick={closeAllMenus}>
            Contact Us
          </a>
          <a href="/#contact" className="button button--primary button--full" onClick={closeAllMenus}>
            Let's Talk
          </a>
        </div>
      </div>
    </header>
  );
}
