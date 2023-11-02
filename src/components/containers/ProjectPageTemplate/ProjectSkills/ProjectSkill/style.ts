import styled from 'styled-components';
import LogoWithText from '@/components/LogoWithText';

export const ProjectSkillContainer = styled.div`
  display: flex;
  align-items: center;

  &.not-by-me {
    opacity: ${props => props.theme.opacity.blur};
  }
`;

export const ProjectSkillWithLogo = styled(LogoWithText)`\
  font-size: ${props => props.theme.font.size.normal};
`;
