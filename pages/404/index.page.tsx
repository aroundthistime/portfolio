import ErrorPage from '@/components/containers/ErrorPage';

/**
 * Custom page component for 404 errors throughout the application
 */
const Custom404Page = () => {
  return (
    <ErrorPage
      error={
        new Error(
          'Could not find the requested resource. Please check your URL :(',
        )
      }
      resetErrorBoundary={() => {}}
    />
  );
};

export default Custom404Page;
