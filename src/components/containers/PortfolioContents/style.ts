import styled from 'styled-components';

export const PortfolioContentsContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  width: 100dvw;
  height: 100vh;
  height: 100dvh;
  padding-left: 50%;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  scrollbar-gutter: stable;
  z-index: 1;
`;
