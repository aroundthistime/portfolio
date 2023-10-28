/* eslint-disable no-param-reassign */

import useTypeWriter from '@/hooks/useTypeWriter';
import { IntroContainer, IntroHeadline, IntroSubtitle } from './style';
import useCameraStore from '@/components/store/useCameraStore';
import PortfolioSection from '../PortfolioSection';

const GREETING_TEXT = "Bienvenue, I'm Donghwan Yu";
const JOB_TITLE = 'Frontend Developer';

const Intro = () => {
  const { typingResult, restartTypeWriting } = useTypeWriter([
    GREETING_TEXT,
    JOB_TITLE,
  ]);

  const [greeting, jobTitle] = typingResult;

  const onIntersect = () => {
    useCameraStore.getState().setToDefault();
    restartTypeWriting();
  };

  return (
    <PortfolioSection onIntersect={onIntersect}>
      <IntroContainer>
        <IntroHeadline>{greeting}</IntroHeadline>
        <IntroSubtitle>{jobTitle}</IntroSubtitle>
      </IntroContainer>
    </PortfolioSection>
  );
};

export default Intro;
