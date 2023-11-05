import { Html } from '@react-three/drei';
import styled from 'styled-components';

export const MonitorScreenContainer = styled(Html)`
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
  padding: 0 20px;
`;

export const MonitorScreenCloseButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ff6057;
  border: 1px solid #d06561;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    visibility: hidden;
    width: 12px;
  }

  &:hover {
    svg {
      visibility: visible;
    }
  }
`;

export const MonitorScreenWebview = styled.iframe`
  width: 100%;
  flex-grow: 1;
`;
