import { useEffect, useRef, memo } from 'react';
import Intro from './Intro';
import SkillSet from './SkillSet';
import { PortfolioContentsContainer } from './style';
import Projects from './Projects';
import use3DSceneStore from '@/store/use3DSceneStore';
import ContactMe from './ContactMe';
import { SectionTitle } from '@/types/enums/SectionTitle';

const PortfolioContents = () => {
  // Root container element with all portfolio contents
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    use3DSceneStore.subscribe(state => {
      const monitorIsTurnedOn =
        state.currentSection.title === SectionTitle.Projects &&
        state.currentSection.monitorScreenUrl;

      // Do not show project contents when monitor screen is turned on and focused
      if (monitorIsTurnedOn) {
        ref.current.style.visibility = 'hidden';
      } else {
        ref.current.style.visibility = 'visible';
      }
    });
  }, []);

  return (
    <PortfolioContentsContainer ref={ref}>
      <Intro />
      <SkillSet />
      <Projects />
      <ContactMe />
    </PortfolioContentsContainer>
  );
};

export default memo(PortfolioContents);
