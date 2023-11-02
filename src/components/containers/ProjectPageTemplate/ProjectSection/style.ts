import styled from 'styled-components';

export const ProjectSectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.layout.margin.vertical.normal};
`;

export const ProjectSectionTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-weight: 500;
  font-size: ${props => props.theme.font.size.xLarge};
  font-style: italic;
  padding: ${props => {
    const { horizontal, vertical } = props.theme.layout.padding;

    return `${vertical.small} ${horizontal.normal}`;
  }};
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.1);
`;

export const ProjectSectionContent = styled.div`
  padding: 0 ${props => props.theme.layout.padding.horizontal.normal};
`;
