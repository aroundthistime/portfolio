import styled from 'styled-components';
import LogoWithText from '@/components/LogoWithText';

export const TroubleShootTitle = styled.p`
  font-size: ${props => props.theme.font.size.normal};
  font-weight: bold;
  margin-bottom: ${props => props.theme.layout.margin.vertical.small};

  &:before {
    content: '• ';
  }
`;

export const TroubleShootContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.layout.margin.vertical.large};
`;

export const TroubleShootItemHeader = styled(LogoWithText)``;
