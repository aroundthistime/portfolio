import styled from 'styled-components';
import LogoWithText from '@/components/LogoWithText';

export const ProjectSummaryItem = styled.p``;

export const ProjectSummaryItemLabel = styled.span`
  &:before {
    content: '• ';
  }

  &:after {
    content: ' : ';
  }
`;

export const ProjectLinkLogoWithText = styled(LogoWithText)`
  display: inline-flex;
  align-items: normal;
`;
