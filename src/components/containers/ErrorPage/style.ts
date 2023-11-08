import styled from 'styled-components';

export const ErrorPageWrapper = styled.div`
  width: 100vw;
  width: 100dvw;
  height: 100vh;
  height: 100dvh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: ${props => props.theme.layout.margin.vertical.xLarge};
  background-color: #ffd299;
`;

export const ErrorPageImage = styled.img`
  width: 250px;
`;

export const ErrorMessage = styled.p`
  font-size: ${props => props.theme.font.size.large};
  font-weight: bold;
`;
