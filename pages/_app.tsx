/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import '@/styles/reset.scss';
import '@/styles/index.scss';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GLOBAL_THEME } from '@/styles/theme';

const queryClient = new QueryClient();

/**
 * Custom app component for initializing all pages
 */
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={GLOBAL_THEME}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
