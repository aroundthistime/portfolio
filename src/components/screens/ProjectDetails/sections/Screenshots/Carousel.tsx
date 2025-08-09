'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Project } from '@/types/project';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import useIsHovered from '@/hooks/useIsHovered';
import { mergeRefs } from '@/utils/react';
import { getDeviceInfo } from '@/utils/device';
import Screenshot from './Screenshot';

interface Props {
  screenshots: Project['screenshots'];
}

const ProjectImageCarousel = ({ screenshots }: Props) => {
  const { items: screenshotItems, orientation } = screenshots;
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

  const { isHovered, ref: hoverableElRef } = useIsHovered();

  const { ref: intersectionObserverRef, isIntersecting } =
    useIntersectionObserver({
      threshold: 0.3,
    });

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

  return (
    <div
      ref={
        // Do not apply hover effect on mobile because it will last if no other interaction is made
        getDeviceInfo()?.isMobile
          ? intersectionObserverRef
          : mergeRefs(intersectionObserverRef, hoverableElRef)
      }
      className="rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {screenshotItems.map((screenshotItem, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 relative bg-gray-50 dark:bg-gray-900">
                <Screenshot
                  screenshot={screenshotItem}
                  orientation={orientation}
                  className={'bg-gray-50 dark:bg-gray-900'}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        {screenshotItems.length > 1 && (
          <>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors z-5"
              onClick={() => emblaApi?.scrollPrev()}>
              <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-800 transition-colors z-5"
              onClick={() => emblaApi?.scrollNext()}>
              <ChevronRight className="h-5 w-5 text-gray-700 dark:text-gray-300" />
            </button>
          </>
        )}
        {/* Image Counter */}
        {screenshotItems.length > 1 && (
          <div className="absolute top-6 right-6 bg-black/70 text-white px-3 py-1 rounded-full text-sm z-5">
            {selectedIndex + 1} / {screenshotItems.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectImageCarousel;
