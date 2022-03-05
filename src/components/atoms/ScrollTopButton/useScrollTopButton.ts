import React, {useEffect, useState} from 'react';

type ReturnType = {
  isVisible: boolean;
  scrollToTop: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const useScrollTopButton = (): ReturnType => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollTopButtonVisibility);
    return () => {
      window.removeEventListener('scroll', handleScrollTopButtonVisibility);
    };
  }, []);

  const handleScrollTopButtonVisibility = (event: Event) => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return {
    isVisible,
    scrollToTop,
  };
};
