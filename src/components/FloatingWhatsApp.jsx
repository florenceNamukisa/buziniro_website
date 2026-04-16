import { siteConfig } from '../siteConfig.js';

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.whatsappMessage,
  )}`;

  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Buziniro on WhatsApp"
    >
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
        <path
          d="M16 4C9.38 4 4 9.28 4 15.8C4 18.28 4.78 20.58 6.12 22.47L4.5 28L10.24 26.49C12.03 27.62 13.99 28.2 16 28.2C22.62 28.2 28 22.92 28 16.4C28 9.88 22.62 4 16 4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 12.3C11.5 11.68 11.86 11.08 12.42 10.81L13.62 10.25C13.94 10.1 14.31 10.22 14.49 10.52L15.66 12.45C15.82 12.72 15.79 13.05 15.57 13.28L14.72 14.15C15.1 14.98 15.64 15.73 16.35 16.39C17.08 17.08 17.89 17.62 18.79 18L19.58 17.17C19.81 16.93 20.17 16.88 20.46 17.05L22.55 18.21C22.88 18.39 23.02 18.79 22.87 19.13L22.31 20.37C22.05 20.95 21.45 21.33 20.8 21.33H20.09C17.94 21.33 15.89 20.51 14.32 18.97L13.83 18.49C12.29 16.98 11.5 14.96 11.5 12.85V12.3Z"
          fill="currentColor"
        />
      </svg>
      <span>WhatsApp</span>
    </a>
  );
}
