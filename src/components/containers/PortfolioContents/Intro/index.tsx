import useTypeWriter from '@/hooks/useTypeWriter';
import { PortfolioSection } from '../style';

const Intro = () => {
  const { typingResult } = useTypeWriter("Bienvenue, I'm Donghwan Yu");
  return (
    <PortfolioSection>
      <h1>{typingResult}</h1>
      <h3>Frontend Developer</h3>
    </PortfolioSection>
  );
};

export default Intro;
