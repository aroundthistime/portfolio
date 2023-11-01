/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import '@/styles/reset.scss';
import '@/styles/index.scss';
import { ThemeProvider } from 'styled-components';
import { GLOBAL_THEME } from '@/styles/theme';

/**
 * Custom app component for initializing all pages
 */
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <ThemeProvider theme={GLOBAL_THEME}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
};

export default App;
