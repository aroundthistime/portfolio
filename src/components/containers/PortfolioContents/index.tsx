import Intro from './Intro';
import { PortfolioContentsContainer, PortfolioSection } from './style';

const PortfolioContents = () => {
  return (
    <PortfolioContentsContainer>
      <Intro />
      <PortfolioSection>1</PortfolioSection>
      <PortfolioSection>2</PortfolioSection>
      <PortfolioSection>3</PortfolioSection>
    </PortfolioContentsContainer>
  );
};

export default PortfolioContents;
