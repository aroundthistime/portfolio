import Image from 'next/image';
import { ErrorMessage, ErrorPageImage, ErrorPageWrapper } from './style';
import ErrorImage from '@/assets/images/error-image.gif';

/**
 * Component used as the default error fallback
 */
const ErrorPage = ({ errorMessage = 'Oops! Something went wrong :(' }) => {
  return (
    <ErrorPageWrapper>
      <ErrorPageImage src={ErrorImage.src} alt="error-logo" />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </ErrorPageWrapper>
  );
};

interface Props {
  errorMessage?: string;
}

export default ErrorPage;
