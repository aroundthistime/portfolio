import styled from 'styled-components';
import { ysabeauOfficeFont } from '@/styles/font';

export const SpeechBubbleContainer = styled.div`
  font-family: ${ysabeauOfficeFont.style.fontFamily}, cursive;
  font-weight: 600;
  background-position: center;
  background-repeat: no-repeat !important;
  background-size: 100% 100%;
  background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/speech-bubble.svg);
  width: max-content;
  padding: 15px;
  padding-bottom: 35px;
  margin-left: 140px;
  margin-bottom: 120px;
  text-align: center;
  box-sizing: content-box;
`;

export const SpeechBubbleContent = styled.span``;
