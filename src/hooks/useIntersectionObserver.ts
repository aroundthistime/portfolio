import { useCallback, useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (
  options?: IntersectionObserverInit
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback((node: Element | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (node) {
      observerRef.current = new IntersectionObserver(([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      }, options);

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