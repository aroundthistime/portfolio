import Image from 'next/image';
import { FallbackProps } from 'react-error-boundary';
import { ErrorMessage, ErrorPageImage, ErrorPageWrapper } from './style';
import ErrorImage from '@/assets/images/error-image.gif';

/**
 * Component used as the default error fallback
 */
const ErrorPage = ({
  errorMessage = 'Oops! Something went wrong :(',
}: Props) => {
  return (
    <ErrorPageWrapper>
      <ErrorPageImage src={ErrorImage.src} alt="error-logo" />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </ErrorPageWrapper>
  );
};

interface Props extends FallbackProps {
  errorMessage?: string;
}

export default ErrorPage;
