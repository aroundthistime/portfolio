/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import '@/styles/reset.scss';
import '@/styles/index.scss';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { appWithTranslation } from 'next-i18next';
import { GLOBAL_THEME } from '@/styles/theme';
import ErrorPage from '@/components/containers/ErrorPage';

const queryClient = new QueryClient();

/**
 * Custom app component for initializing all pages
 */
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={GLOBAL_THEME}>
        <ErrorBoundary FallbackComponent={ErrorPage}>
          <Component {...pageProps} />
        </ErrorBoundary>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default appWithTranslation(App);
