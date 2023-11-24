import styled from 'styled-components';

export const ProjectScreenshotGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.layout.margin.vertical.normal};
`;

export const ProjectScreenshotGroupTitle = styled.p`
  font-size: ${props => props.theme.font.size.normal};
  font-weight: bold;
`;

export const ProjectScreenshotsContainer = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  column-gap: ${props => props.theme.layout.margin.horizontal.normal};
  row-gap: ${props => props.theme.layout.margin.vertical.small};
`;
