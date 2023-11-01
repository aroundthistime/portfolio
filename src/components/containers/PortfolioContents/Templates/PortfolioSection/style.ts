import styled from 'styled-components';

export const PortfolioSectionContainer = styled.section`
  width: 50vw;
  width: 50dvw;
  height: 100vh;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => {
    const { horizontal, vertical } = props.theme.layout.padding;

    return `${vertical.normal} ${horizontal.large}`;
  }};
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;
