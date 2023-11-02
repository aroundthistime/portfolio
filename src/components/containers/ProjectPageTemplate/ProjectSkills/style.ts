import styled from 'styled-components';

export const ProjectSkillsContainer = styled.ul`
  margin-top: ${props => props.theme.layout.margin.vertical.small};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: ${props => props.theme.layout.margin.horizontal.normal};
  row-gap: ${props => props.theme.layout.margin.vertical.small};
`;
