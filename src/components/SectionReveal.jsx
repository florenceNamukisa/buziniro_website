import { useEffect, useRef, useState } from 'react';

const animationTypes = {
  fade: { opacity: 0, transform: 'translateY(28px)' },
  pop: { opacity: 0, transform: 'scale(0.8)' },
  slideLeft: { opacity: 0, transform: 'translateX(-60px)' },
  slideRight: { opacity: 0, transform: 'translateX(60px)' },
  slideUp: { opacity: 0, transform: 'translateY(60px)' },
};

export function SectionReveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  animation = 'fade',
  style,
  ...props
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const anim = animationTypes[animation] || animationTypes.fade;

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ 
        ...style, 
        '--reveal-delay': `${delay}ms`,
        '--reveal-from': `translate(${anim.transform.split('(')[1]?.replace(')', '') || '28px'})`,
      }}
      {...props}
    >
      {children}
    </Tag>
  );
}
