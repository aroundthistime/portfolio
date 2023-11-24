/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import '@/styles/reset.scss';
import '@/styles/index.scss';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { appWithTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { GLOBAL_THEME } from '@/styles/theme';
import ErrorPage from '@/components/containers/ErrorPage';
import LanguageSelectors from '@/components/LanguageSelectors';
import { GlobalStyles } from '@/styles/global';

const queryClient = new QueryClient();

/**
 * Custom app component for initializing all pages
 */
const App = ({ Component, pageProps }: AppProps) => {
  // Whether the page is being rendered inside an iframe as a webview
  const [isWebview, setIsWebview] = useState<boolean>();

  useEffect(() => {
    setIsWebview(window.self !== window.top);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={GLOBAL_THEME}>
        <ErrorBoundary FallbackComponent={ErrorPage}>
          <GlobalStyles />
          <Component {...pageProps} />
          {/* Do not provide language selectors to prevent nested UI */}
          {isWebview === false && <LanguageSelectors />}
        </ErrorBoundary>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default appWithTranslation(App);
