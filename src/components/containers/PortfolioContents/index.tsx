import { useEffect, useRef } from 'react';
import Intro from './Intro';
import PortfolioSection from './Templates/PortfolioSection';
import SkillSet from './SkillSet';
import { PortfolioContentsContainer } from './style';
import Projects from './Projects';
import use3DSceneStore from '@/store/use3DSceneStore';

const PortfolioContents = () => {
  // Root container element with all portfolio contents
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    use3DSceneStore.subscribe(state => {
      // Do not show project contents when monitor screen is turned on and focused
      if (state.monitorScreenUrl) {
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
      <PortfolioSection>3</PortfolioSection>
    </PortfolioContentsContainer>
  );
};

export default PortfolioContents;
