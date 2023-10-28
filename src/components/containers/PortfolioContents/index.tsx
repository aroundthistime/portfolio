import Intro from './Intro';
import PortfolioSection from './PortfolioSection';
import { PortfolioContentsContainer } from './style';

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
