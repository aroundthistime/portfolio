import styled from 'styled-components';
import { playfairDisplayFont } from '@/styles/font';

export const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  row-gap: 15%;
  font-family: ${playfairDisplayFont.style.fontFamily}, sans-serif;
  font-style: italic;
`;

export const IntroHeadline = styled.h1`
  font-size: ${props => props.theme.font.size.xxxLarge};
  font-weight: 700;
`;

export const IntroSubtitle = styled.h3`
  font-size: ${props => props.theme.font.size.xxLarge};
  font-weight: 500;
  align-self: end;
`;
