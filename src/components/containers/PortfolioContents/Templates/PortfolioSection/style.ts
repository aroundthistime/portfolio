import styled, { css } from 'styled-components';
import { DeviceType, getResponsiveStyle } from '@/styles/responsive';

export const PortfolioSectionContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => {
    const { horizontal, vertical } = props.theme.layout.padding;

    return `${vertical.normal} ${horizontal.large}`;
  }};
  scroll-snap-align: start;
  scroll-snap-stop: always;

  ${getResponsiveStyle(
    css`
      padding: ${props => {
        const { horizontal, vertical } = props.theme.layout.padding;
        return `${vertical.normal} ${horizontal.normal}`;
      }};
    `,
    DeviceType.Mobile,
    DeviceType.Tablet,
  )}
`;
