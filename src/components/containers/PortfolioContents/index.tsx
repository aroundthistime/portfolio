import React, { useEffect, useRef } from 'react';
import { PortfolioContentsContainer } from './style';
import use3DSceneStore from '@/store/use3DSceneStore';
import { SectionTitle } from '@/types/enums/SectionTitle';
import Intro from './Intro';
import SkillSet from './SkillSet';
import Projects from './Projects';
import ContactMe from './ContactMe';

const PortfolioContents = () => {
  // Root container element with all portfolio contents
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    use3DSceneStore.subscribe(state => {
      const monitorIsTurnedOn =
        state.currentSection.title === SectionTitle.Projects &&
        state.currentSection.monitorScreenUrl;

      if (!ref.current) return;

      // Do not show project contents whe monitor screen is turned on and focused
      if (monitorIsTurnedOn) {
        ref.current.style.visibility = 'hidden';
      } else {
        ref.current.style.visibility = 'visible';
      }
    });
  }, []);

  return (
    <PortfolioContentsContainer
      ref={ref}
      data-testid="portfolio-contents-container">
      <Intro />
      <SkillSet />
      <Projects />
      <ContactMe />
    </PortfolioContentsContainer>
  );
};

export default React.memo(PortfolioContents);
