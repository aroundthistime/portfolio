import styled from 'styled-components';

const LoaderWrapper = styled.div`
  width: 100vw;
  width: 100dvw;
  height: 100vh;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: ${props => props.theme.layout.margin.vertical.xLarge};

  .loader__image-container {
    position: relative;
    width: 150px;
    aspect-ratio: 1 / 1;
  }

  .loader__loading-text {
    font-size: ${props => props.theme.font.size.normal};
  }
`;

export default LoaderWrapper;
