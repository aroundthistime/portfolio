import styled from 'styled-components';
import LogoWithText from '@/components/LogoWithText';

export const ProjectSkillContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ProjectSkillWithLogo = styled(LogoWithText)`\
  font-size: ${props => props.theme.font.size.normal};
`;
