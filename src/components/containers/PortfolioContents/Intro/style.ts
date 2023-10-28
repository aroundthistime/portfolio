import styled from 'styled-components';

export const IntroContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  row-gap: 15%;
  font-family: 'Playfair Display', serif;
  font-style: italic;
`;

export const IntroHeadline = styled.h1`
  font-size: 60px;
  font-weight: 700;
`;

export const IntroSubtitle = styled.h3`
  font-size: 40px;
  font-weight: 500;
  align-self: end;
`;
