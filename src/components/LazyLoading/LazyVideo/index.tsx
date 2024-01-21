/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';

/**
 * Video component loaded after being exposed to the screen.
 * The component uses data-src attribute for temporarily storing src,
 * therefore the attribute should not be customized.
 */
const LazyVideo = ({
  src,
  ...restProps
}: React.HTMLProps<HTMLVideoElement>) => {
  const ref = useRef<HTMLVideoElement>(null!);

  const intersection = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
  });

  useEffect(() => {
    if (intersection?.isIntersecting) {
      ref.current.src = ref.current.dataset.src;
    }
  }, [intersection]);

  return <video {...restProps} data-src={src} ref={ref} />;
};

export default LazyVideo;
