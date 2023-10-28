import { PropsWithChildren, useEffect, useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import { PortfolioSectionContainer } from './style';

/**
 * Component for wrapping a certain section in the portfolio.
 * Can pass callback to execute when the section gets intersected or no longer intersected
 */
const PortfolioSection = ({
  onIntersect,
  onExit,
  children,
}: PropsWithChildren<Props>) => {
  const sectionRef = useRef<HTMLElement>(null!);

  const intersection = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      if (onIntersect) onIntersect();
    } else if (onExit) onExit();
  }, [intersection]);

  return (
    <PortfolioSectionContainer ref={sectionRef}>
      {children}
    </PortfolioSectionContainer>
  );
};

interface Props {
  /**
   * Callback function triggered when current section gets intersected
   */
  onIntersect?: () => void;

  /**
   * Callback function triggered when current section is no longer intersected
   */
  onExit?: () => void;
}

export default PortfolioSection;