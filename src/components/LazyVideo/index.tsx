'use client';

import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { HTMLProps } from 'react';

type Props = HTMLProps<HTMLVideoElement>;

/**
 * Start loading the video only when the element has been intersected with the viewport
 */
const LazyVideo = ({ src, ...props }: Props) => {
  const { ref, isIntersecting: shouldStartLoading } = useIntersectionObserver({
    detectOnce: true,
  });

  return (
    <video {...props} ref={ref} src={shouldStartLoading ? src : undefined} />
  );
};

export default LazyVideo;
