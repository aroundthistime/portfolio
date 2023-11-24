import styled from 'styled-components';
import LogoWithText from '@/components/LogoWithText';
import { playfairDisplayFont } from '@/styles/font';

export const ProjectTitleContainer = styled.header`
  position: relative;
  width: 100%;
  font-size: ${props => props.theme.font.size.xxLarge};
  font-weight: 700;
  font-family: ${playfairDisplayFont.style.fontFamily}, sans-serif;
`;

export const ProjectTitleWithLogo = styled(LogoWithText)`
  .logo {
    margin-right: ${props => props.theme.layout.margin.horizontal.normal};
  }
`;
