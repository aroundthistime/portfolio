import styled, { css } from 'styled-components';

import { DeviceType, getResponsiveStyle } from '@/styles/responsive';

export const ProjectPageContainer = styled.main`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => {
    const { vertical, horizontal } = props.theme.layout.padding;

    return `${vertical.xLarge} ${horizontal.xLarge}`;
  }};
  line-height: 1.4;
  row-gap: ${props => props.theme.layout.margin.vertical.large};

  ${getResponsiveStyle(
    css`
      padding: ${props => {
        const { vertical, horizontal } = props.theme.layout.padding;

        return `${vertical.large} ${horizontal.normal}`;
      }};
    `,
    DeviceType.Mobile,
    DeviceType.Tablet,
  )}
`;
