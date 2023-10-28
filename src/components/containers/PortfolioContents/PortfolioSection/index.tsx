import { PropsWithChildren, useEffect, useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import { PortfolioSectionContainer } from './style';

/**
 * Component for wrapping a certain section in the portfolio.
 * Can pass callback to execute if it gets intersected
 */
const PortfolioSection = ({
  onIntersect,
  children,
}: PropsWithChildren<Props>) => {
  const sectionRef = useRef<HTMLElement>(null!);

  const intersection = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
  });

  useEffect(() => {
    if (intersection?.isIntersecting && onIntersect) {
      onIntersect();
    }
  }, [intersection]);

  return (
    <PortfolioSectionContainer ref={sectionRef}>
      {children}
    </PortfolioSectionContainer>
  );
};

interface Props {
  /**
   * Callback function when current section gets intersected
   */
  onIntersect?: () => void;
}

export default PortfolioSection;
