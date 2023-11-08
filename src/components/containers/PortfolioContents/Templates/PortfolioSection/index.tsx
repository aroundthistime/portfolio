import { PropsWithChildren, useEffect, useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import { PortfolioSectionContainer } from './style';
import { SectionTitle } from '@/types/enums/SectionTitle';
import useSectionDetection from '@/hooks/useSectionDetection';
import use3DSceneStore from '@/store/use3DSceneStore';
import { CAMERA_FIXED_SECTION_TITLES } from '@/constants/3d';

/**
 * Component for wrapping a certain section in the portfolio.
 * Can pass callback to execute when the section gets intersected or no longer intersected
 */
const PortfolioSection = ({
  sectionTitle,
  onIntersect,
  onExit,
  children,
}: PropsWithChildren<Props>) => {
  const sectionRef = useRef<HTMLElement>(null!);
  const { updateQueryParameterToCurrentSection } =
    useSectionDetection(sectionTitle);

  const intersection = useIntersectionObserver(sectionRef, {
    threshold: 0.1,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      updateQueryParameterToCurrentSection();

      const { updateCurrentSection, getCameraIsFixed, fixCamera, unfixCamera } =
        use3DSceneStore.getState();

      updateCurrentSection(sectionTitle);

      if (CAMERA_FIXED_SECTION_TITLES.includes(sectionTitle)) {
        // Camera isn't fixed yet when it's supposed to
        if (!getCameraIsFixed()) {
          fixCamera();
        }
        // Camera is fixed when it's not supposed to
      } else if (getCameraIsFixed()) {
        unfixCamera();
      }

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
   * Title of this section
   */
  sectionTitle: SectionTitle;

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
