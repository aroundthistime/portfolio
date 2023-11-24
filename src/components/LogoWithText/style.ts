import Image from 'next/image';
import styled from 'styled-components';

export const LogoWithTextContainer = styled.span`
  display: flex;
  align-items: center;
`;

export const Logo = styled(Image)`
  width: auto;
  height: 1em;
  margin-right: ${props => props.theme.layout.margin.horizontal.small};
`;
