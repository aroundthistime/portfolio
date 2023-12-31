import styled, { css } from 'styled-components';
import { DeviceType, getResponsiveStyle } from '@/styles/responsive';
import { notoSerifKR, playfairDisplayFont } from '@/styles/font';

export const ProjectSectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.layout.margin.vertical.normal};

  .not-by-me {
    opacity: ${props => props.theme.opacity.blur};

    &:hover {
      opacity: inherit;
    }
  }
`;

export const ProjectSectionTitle = styled.h3`
  font-family: ${playfairDisplayFont.style.fontFamily},
    ${notoSerifKR.style.fontFamily}, sans-serif;
  font-weight: 500;
  font-size: ${props => props.theme.font.size.xLarge};
  padding: ${props => {
    const { horizontal, vertical } = props.theme.layout.padding;

    return `${vertical.small} ${horizontal.normal}`;
  }};
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.1);

  ${getResponsiveStyle(
    css`
      padding: ${props => {
        const { horizontal, vertical } = props.theme.layout.padding;

        return `${vertical.small} ${horizontal.small}`;
      }};
    `,
    DeviceType.Mobile,
  )}
`;

export const ProjectSectionContent = styled.div`
  padding: 0 ${props => props.theme.layout.padding.horizontal.normal};

  ${getResponsiveStyle(
    css`
      padding: 0 ${props => props.theme.layout.padding.horizontal.small};
    `,
    DeviceType.Mobile,
  )}
`;
