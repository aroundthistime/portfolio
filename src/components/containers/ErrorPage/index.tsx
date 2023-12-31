import { FallbackProps } from 'react-error-boundary';
import { ErrorMessage, ErrorPageImage, ErrorPageWrapper } from './style';
import ErrorImage from '@/assets/images/error-image.gif';

/**
 * Component used as the default error fallback
 */
const ErrorPage = ({ error }: FallbackProps) => {
  const DEFAULT_ERROR_MESSAGE = 'Oops! Something went wrong :(';
  return (
    <ErrorPageWrapper>
      <ErrorPageImage
        src={ErrorImage.src}
        alt="error-logo"
        width={250}
        height={166.4}
      />
      <ErrorMessage>{error?.message ?? DEFAULT_ERROR_MESSAGE}</ErrorMessage>
    </ErrorPageWrapper>
  );
};

export default ErrorPage;
