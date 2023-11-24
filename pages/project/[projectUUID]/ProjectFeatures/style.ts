import styled from 'styled-components';
import NestedList from '@/components/NestedList';

export const FeaturesNotDoneByMeGuide = styled.p`
  margin-bottom: ${props => props.theme.layout.margin.vertical.small};
`;

export const ProjectFeaturesNestedList = styled(NestedList)`
  .nested-list__bullet-point:has(~ .not-by-me) {
    opacity: ${props => props.theme.opacity.blur};
  }
`;
