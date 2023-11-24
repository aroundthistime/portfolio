import styled from 'styled-components';

export const SkillsNotUsedByMeGuide = styled.p`
  margin-bottom: ${props => props.theme.layout.margin.vertical.small};
`;

export const ProjectSkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: ${props => props.theme.layout.margin.horizontal.normal};
  row-gap: ${props => props.theme.layout.margin.vertical.small};
`;
