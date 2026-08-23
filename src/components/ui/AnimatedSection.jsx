import { useEffect, useRef, useState } from 'react';

const observerMap = new Map();

const DEFAULT_OPTIONS = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

const observeElement = (element, callback, options = DEFAULT_OPTIONS) => {
  if (typeof window === 'undefined' || !window.IntersectionObserver) {
    return () => {};
  }

  const key = JSON.stringify(options);
  let entry = observerMap.get(key);

  if (!entry) {
    const callbacks = new Map();
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entryItem) => {
        if (entryItem.isIntersecting) {
          const cb = callbacks.get(entryItem.target);
          if (cb) {
            cb(entryItem);
          }
        }
      });
    }, options);

    entry = { observer, callbacks };
    observerMap.set(key, entry);
  }

  const { observer, callbacks } = entry;
  callbacks.set(element, callback);
  observer.observe(element);

  return () => {
    callbacks.delete(element);
    observer.unobserve(element);
    if (callbacks.size === 0) {
      observer.disconnect();
      observerMap.delete(key);
    }
  };
};

export const AnimatedSection = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const unobserve = observeElement(ref.current, (entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        unobserve();
      }
    });

    return unobserve;
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
      }}
    >
      {children}
    </div>
  );
};
