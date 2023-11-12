import styled from 'styled-components';

export const LanguageSelectorsContainer = styled.ul`
  display: flex;
  column-gap: ${props => props.theme.layout.margin.horizontal.normal};
  position: fixed;
  top: ${props => props.theme.layout.padding.horizontal.normal};
  left: ${props => props.theme.layout.padding.horizontal.normal};
  z-index: 1;
`;
