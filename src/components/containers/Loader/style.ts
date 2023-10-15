import styled from 'styled-components';

const LoaderWrapper = styled.div`
  width: 100vw;
  width: 100dvw;
  hegiht: 100vh;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 40px;

  .loader__image-container {
    position: relative;
    width: 150px;
    aspect-ratio: 1 / 1;
  }

  .loader__loading-text {
    font-size: 18px;
  }
`;

export default LoaderWrapper;
