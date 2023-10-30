import Intro from './Intro';
import PortfolioSection from './Templates/PortfolioSection';
import SkillSet from './SkillSet';
import { PortfolioContentsContainer } from './style';
import Projects from './Projects';

const PortfolioContents = () => {
  return (
    <PortfolioContentsContainer>
      <Intro />
      <SkillSet />
      <Projects />
      <PortfolioSection>3</PortfolioSection>
    </PortfolioContentsContainer>
  );
};

export default PortfolioContents;
