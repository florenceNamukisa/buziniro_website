import { useState } from 'react';

export function LazyImage({ src, alt, className, ...props }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      className={`${className || ''} ${loaded ? 'loaded' : ''}`}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      onError={() => setError(true)}
      style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
      {...props}
    />
  );
}
