import { useCallback, useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  detectOnce?: boolean;
}

const DEFAULT_OPTIONS: IntersectionObserverOptions = {
  detectOnce: false,
};

const useIntersectionObserver = (
  options: IntersectionObserverOptions = DEFAULT_OPTIONS
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback((node: Element | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (!node) return;

    const { detectOnce, ...observerOptions } = options;

    if (node) {
      observerRef.current = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);

        if (detectOnce && entry.isIntersecting) {
          observerRef.current?.disconnect();
          observerRef.current = null;
        }
      }, observerOptions);

      observerRef.current.observe(node);
    } else {
      observerRef.current = null;
    }
  }, [options]);

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return {
    ref,
    isIntersecting,
  };
};

export default useIntersectionObserver;