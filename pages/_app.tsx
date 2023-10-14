/* eslint-disable react/jsx-props-no-spreading */
import type {AppProps} from 'next/app';
import '@/styles/reset.scss';

/**
 * Custom app component for initializing all pages
 */
const App = ({Component, pageProps}: AppProps) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
