import Intro from './Intro';
import PortfolioSection from './Templates/PortfolioSection';
import SkillSet from './SkillSet';
import { PortfolioContentsContainer } from './style';

const PortfolioContents = () => {
  return (
    <PortfolioContentsContainer>
      <Intro />
      <SkillSet />
      <PortfolioSection>2</PortfolioSection>
      <PortfolioSection>3</PortfolioSection>
    </PortfolioContentsContainer>
  );
};

export default PortfolioContents;
