import styled from 'styled-components';

export const ProjectSummaryItem = styled.p``;

export const ProjectSummaryItemLabel = styled.span`
  &:before {
    content: '• ';
  }

  &:after {
    content: ' : ';
  }
`;
