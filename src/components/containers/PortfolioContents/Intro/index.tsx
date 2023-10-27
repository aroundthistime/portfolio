import useTypeWriter from '@/hooks/useTypeWriter';
import { PortfolioSection } from '../style';

const Intro = () => {
  const { typingResult } = useTypeWriter([
    "Bienvenue, I'm Donghwan Yu",
    'Frontend Developer',
  ]);

  const [greeting, jobTitle] = typingResult;

  return (
    <PortfolioSection>
      <h1>{greeting}</h1>
      <h3>{jobTitle}</h3>
    </PortfolioSection>
  );
};

export default Intro;
