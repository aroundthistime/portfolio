import Link from 'next/link';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { DeviceType, getResponsiveStyle } from '@/styles/responsive';

export const LanguageSelectorLink = styled(Link)`
  opacity: 0.4;
  display: flex;
  column-gap: ${props => props.theme.layout.margin.horizontal.small};
  text-decoration: none;

  &:hover,
  &.language-selector--selected {
    opacity: 0.8;
  }
`;

export const LanguageIcon = styled(Image)``;

export const LanguageName = styled.p`
  color: black;
  font-weight: bold;

  ${getResponsiveStyle(
    css`
      display: none;
    `,
    DeviceType.Mobile,
  )}
`;
