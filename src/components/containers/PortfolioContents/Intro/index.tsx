/* eslint-disable no-param-reassign */

import useTypeWriter from '@/hooks/useTypeWriter';
import { IntroContainer, IntroHeadline, IntroSubtitle } from './style';
import PortfolioSection from '../Templates/PortfolioSection';
import use3DSceneStore from '@/components/store/use3DSceneStore';

const GREETING_TEXT = "Bienvenue, I'm Donghwan Yu";
const JOB_TITLE = 'Frontend Developer';

const Intro = () => {
  const { typingResult, restartTypeWriting } = useTypeWriter([
    GREETING_TEXT,
    JOB_TITLE,
  ]);

  const [greeting, jobTitle] = typingResult;

  const onIntersect = () => {
    use3DSceneStore.getState().putSceneAtCenter();
    restartTypeWriting();
  };

  const onExit = () => {
    use3DSceneStore.getState().putSceneAside();
  };

  return (
    <PortfolioSection onIntersect={onIntersect} onExit={onExit}>
      <IntroContainer>
        <IntroHeadline>{greeting}</IntroHeadline>
        <IntroSubtitle>{jobTitle}</IntroSubtitle>
      </IntroContainer>
    </PortfolioSection>
  );
};

export default Intro;
