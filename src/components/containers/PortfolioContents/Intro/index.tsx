import useTypeWriter from '@/hooks/useTypeWriter';
import { PortfolioSection } from '../style';
import { IntroContainer, IntroHeadline, IntroSubtitle } from './style';

const Intro = () => {
  const { typingResult } = useTypeWriter([
    "Bienvenue, I'm Donghwan Yu",
    'Frontend Developer',
  ]);

  const [greeting, jobTitle] = typingResult;

  return (
    <PortfolioSection>
      <IntroContainer>
        <IntroHeadline>{greeting}</IntroHeadline>
        <IntroSubtitle>{jobTitle}</IntroSubtitle>
      </IntroContainer>
    </PortfolioSection>
  );
};

export default Intro;
