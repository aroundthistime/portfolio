import styled from 'styled-components';
import NestedList from '@/components/NestedList';

export const NestedProjectList = styled(NestedList)`
  .nested-list__title {
    cursor: pointer;

    &:hover {
      font-size: 1.5rem;
      transition: font-size 0.2s;
    }
  }

  .nested-list__item {
    .nested-list__bullet-point {
      display: none;
    }
  }
`;

export const ProjectClickGuidance = styled.p`
  margin-top: ${props => props.theme.layout.margin.vertical.normal};
`;
