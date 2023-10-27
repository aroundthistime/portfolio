/* eslint-disable no-param-reassign */
import { useIntersectionObserver } from 'usehooks-ts';
import { useEffect, useRef } from 'react';
import { Vector3 } from 'three';
import useTypeWriter from '@/hooks/useTypeWriter';
import { PortfolioSection } from '../style';
import { IntroContainer, IntroHeadline, IntroSubtitle } from './style';
import useCameraStore from '@/components/store/useCameraStore';

const GREETING_TEXT = "Bienvenue, I'm Donghwan Yu";
const JOB_TITLE = 'Frontend Developer';

const Intro = () => {
  const { typingResult } = useTypeWriter([GREETING_TEXT, JOB_TITLE]);
  const introSectionRef = useRef<HTMLElement>();

  const intersection = useIntersectionObserver(introSectionRef, {
    threshold: 0.1,
  });

  const [greeting, jobTitle] = typingResult;

  useEffect(() => {
    if (intersection?.isIntersecting) {
      useCameraStore.getState().setToDefault();
    }
  }, [intersection]);

  return (
    <PortfolioSection ref={introSectionRef}>
      <IntroContainer>
        <IntroHeadline>{greeting}</IntroHeadline>
        <IntroSubtitle>{jobTitle}</IntroSubtitle>
      </IntroContainer>
    </PortfolioSection>
  );
};

export default Intro;
