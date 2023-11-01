import { GLOBAL_THEME } from '@/styles/theme';
import 'styled-components';

type CustomTheme = typeof GLOBAL_THEME;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
