import styled from 'styled-components';
import NestedList from '@/components/NestedList';

export const NestedProjectList = styled(NestedList)`
  .nested-list__item {
    .nested-list__bullet-point {
      display: none;
    }
  }
`;
