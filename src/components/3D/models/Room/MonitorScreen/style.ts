import { animated } from '@react-spring/web';
import styled from 'styled-components';

export const MonitorScreenContainer = styled(animated.div)`
  width: 1585px;
  height: 915px;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const MonitorScreenTitleBar = styled.header`
  width: 100%;
  height: 42px;
  background-color: #38393a;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 8px;
  padding: 0 20px;
`;

export const MonitorScreenButton = styled.button<{
  $buttonColor: string;
}>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.$buttonColor};
  border: 1px solid #d06561;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  svg {
    width: 12px;
    opacity: 0.7;
  }

  &:hover {
    svg {
      opacity: 0.9;
    }
  }
`;

export const MonitorScreenWebview = styled.iframe`
  width: 100%;
  flex-grow: 1;
`;
