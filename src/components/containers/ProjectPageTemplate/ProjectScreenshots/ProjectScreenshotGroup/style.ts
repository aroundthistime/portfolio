import styled from 'styled-components';

export const ProjectScreenshotGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.layout.margin.vertical.small};
`;

export const ProjectScreenshotGroupTitle = styled.p``;

export const ProjectScreenshotsContainer = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: ${props => props.theme.layout.margin.horizontal.normal};
  row-gap: ${props => props.theme.layout.margin.vertical.small};
`;
