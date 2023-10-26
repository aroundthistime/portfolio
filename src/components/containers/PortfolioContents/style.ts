import styled from 'styled-components';

export const PortfolioContentsContainer = styled.div`
  width: 50vw;
  width: 50dvw;
  height: 100vh;
  height: 100dvh;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y proximity;
  scroll-behavior: smooth;
  scrollbar-gutter: stable;
`;

export const PortfolioSection = styled.section`
  width: 50vw;
  width: 50dvw;
  height: 100vh;
  height: 100dvh;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;
