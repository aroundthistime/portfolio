import { render } from '@testing-library/react';
import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GLOBAL_THEME } from '@/styles/theme';

const queryClient = new QueryClient();

/**
 * This is a file containing every utility logic required for running test.
 * This filere-exports every logic inside RTL.
 * Therefore RTL related methods should be imported from here instead of direct import from RTL
 */

const AllTheProviders = ({ children }) => {
  return (
    <MemoryRouterProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={GLOBAL_THEME}>{children}</ThemeProvider>
      </QueryClientProvider>
    </MemoryRouterProvider>
  );
};

/**
 * Custom render function which contains every providers included in the application
 */
const customRender = (
  ui: Parameters<typeof render>[0],
  options: Omit<Parameters<typeof render>[1], 'wrapper'> = {},
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
