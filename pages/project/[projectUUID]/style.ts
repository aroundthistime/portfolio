import styled from 'styled-components';

export const ProjectPageContainer = styled.main`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => {
    const { vertical, horizontal } = props.theme.layout.padding;

    return `${vertical.xLarge} ${horizontal.xLarge}`;
  }};
  line-height: 1.3;
  row-gap: ${props => props.theme.layout.margin.vertical.large};
`;
