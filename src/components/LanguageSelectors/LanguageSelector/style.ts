import Link from 'next/link';
import styled from 'styled-components';

export const LanguageSelectorLink = styled(Link)`
  opacity: 0.4;
  display: flex;
  column-gap: ${props => props.theme.layout.margin.horizontal.small};
  text-decoration: none;

  &:hover,
  &.language-selector--selected {
    opacity: 0.8;
  }
`;

export const LanguageIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const LanguageName = styled.p`
  color: black;
  font-weight: bold;
`;
