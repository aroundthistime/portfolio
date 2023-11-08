import Image from 'next/image';
import { ErrorMessage, ErrorPageImage, ErrorPageWrapper } from './style';
import ErrorImage from '@/assets/images/error-image.gif';

/**
 * Component used as the default error fallback
 */
const ErrorPage = () => {
  return (
    <ErrorPageWrapper>
      <ErrorPageImage src={ErrorImage.src} alt="error-logo" />
      <ErrorMessage>Oops! Something went wrong :(</ErrorMessage>
    </ErrorPageWrapper>
  );
};

export default ErrorPage;
