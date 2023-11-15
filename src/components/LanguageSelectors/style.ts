import styled, { css } from 'styled-components';
import { DeviceType, getResponsiveStyle } from '@/styles/responsive';

export const LanguageSelectorsContainer = styled.ul`
  display: flex;
  column-gap: ${props => props.theme.layout.margin.horizontal.normal};
  position: fixed;
  top: ${props => props.theme.layout.padding.horizontal.normal};
  left: ${props => props.theme.layout.padding.horizontal.normal};
  z-index: 1;

  ${getResponsiveStyle(
    css`
      top: 15px;
      left: auto;
      right: 15px;
    `,
    DeviceType.Mobile,
    DeviceType.Tablet,
  )}
`;
