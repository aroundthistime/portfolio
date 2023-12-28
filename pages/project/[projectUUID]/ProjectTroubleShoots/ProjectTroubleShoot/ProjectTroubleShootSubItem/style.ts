import styled from 'styled-components';
import LogoWithText from '@/components/LogoWithText';

export const ProjectTroubleShootSubItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.layout.margin.vertical.xSmall};
`;

export const ProjectTroubleShootSubItemHeader = styled(LogoWithText)`
  font-size: ${props => props.theme.font.size.normal};
`;

export const ProjectTroubleShootSubItemBody = styled.p`
  white-space: pre-line;
`;
