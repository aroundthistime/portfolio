'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState, useRef, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Project } from '@/types/project';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import useIsHovered from '@/hooks/useIsHovered';
import { mergeRefs } from '@/utils/react';

interface Props {
  screenshots: Project['screenshots'];
}

const ProjectImageCarousel = ({ screenshots }: Props) => {
  const { images, type: screenshotType } = screenshots;
  const autoplayRef = useRef(
    Autoplay({
      delay: 5000,
    }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      containScroll: 'trimSnaps',
      slidesToScroll: 1,
    },
    [autoplayRef.current],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const { isHovered, hoverableElRef } = useIsHovered();
  const intersectionObserverOptions = useMemo(() => {
    return {
      threshold: 0.3,
    };
  }, []);
  const { ref: intersectionObserverRef, isIntersecting } =
    useIntersectionObserver(intersectionObserverOptions);

  /**
   * Control autoplay based on intersection observer and hover state
   * (for better performance and smooth user experience)
   *
   * @Note You can't use options for autoplay plugins for hover behavior because they will be be ignored by play method
   * In order to use the autoplay with custom behavior, you need to use explicit controls
   */
  useEffect(() => {
    if (isIntersecting && !isHovered) {
      autoplayRef.current.play();
    } else {
      autoplayRef.current.stop();
    }
  }, [isIntersecting, isHovered]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi]);

  // Determine if image is portrait (mobile screenshot) or landscape
  const getImageAspectClass = () => {
    return screenshotType === 'portrait'
      ? 'aspect-[9/16] max-h-96 w-auto mx-auto'
      : 'aspect-[16/9] w-full';
  };

  // Check if current image has description to adjust dots position
  const currentImage = screenshots.images[selectedIndex];
  const hasDescription = currentImage?.description;

  return (
    <div
      ref={mergeRefs(intersectionObserverRef, hoverableElRef)}
      className="rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {screenshots.images.map((image, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                <div className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
                  <Image
                    src={image.src || '/placeholder.svg'}
                    alt={image.description || `Project screenshot ${index + 1}`}
                    width={800}
                    height={400}
                    className={`object-cover rounded-lg ${getImageAspectClass()}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
              onClick={() => emblaApi?.scrollPrev()}>
              <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors z-10"
              onClick={() => emblaApi?.scrollNext()}>
              <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
          </>
        )}

        {/* Image Counter */}
        {images.length > 1 && (
          <div className="absolute top-6 right-6 bg-black/70 text-white px-3 py-1 rounded-full text-sm z-10">
            {selectedIndex + 1} / {images.length}
          </div>
        )}

        {/* Description Overlay - Always at bottom */}
        {hasDescription && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white p-4 z-10">
            <p className="text-sm text-center leading-relaxed">
              {currentImage.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectImageCarousel;
