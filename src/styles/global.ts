import { createGlobalStyle, css } from 'styled-components';
import { DeviceType, getResponsiveStyle } from './responsive';

export const GlobalStyles = createGlobalStyle`
    body {
        ${getResponsiveStyle(
          css`
            font-size: ${props => props.theme.font.size.small};
          `,
          DeviceType.Mobile,
        )}
    }
`;
