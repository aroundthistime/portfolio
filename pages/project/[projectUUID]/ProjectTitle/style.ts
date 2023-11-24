import styled from 'styled-components';
import LogoWithText from '@/components/LogoWithText';

export const ProjectTitleContainer = styled.header`
  position: relative;
  width: 100%;
  font-size: ${props => props.theme.font.size.xxLarge};
  font-weight: 700;
  font-family: 'Playfair Display', serif;
`;

export const ProjectTitleWithLogo = styled(LogoWithText)`
  .logo {
    margin-right: ${props => props.theme.layout.margin.horizontal.normal};
  }
`;
