import Image from 'next/image';
import LoaderWrapper from './style';
import LoaderImage from '@/assets/images/loading-simpson.gif';

/**
 * Full screen loader component
 */
const Loader = ({ loadingText }: Props) => {
  const DEFAULT_LOADING_TEXT = "Hold on! I'm on my way";

  return (
    <LoaderWrapper>
      <div className="loader__image-container">
        <Image
          src={LoaderImage.src}
          alt="loading-image"
          fill
          className="loader__loading-image"
        />
      </div>
      <p className="loader__loading-text">
        {loadingText || DEFAULT_LOADING_TEXT}
      </p>
    </LoaderWrapper>
  );
};

interface Props {
  loadingText?: string;
}

export default Loader;
