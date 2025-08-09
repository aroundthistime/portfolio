import Image from 'next/image';
import { Screenshot, ScreenshotOrientation } from '@/types/project';
import { cn } from '@/utils/styles';

interface Props {
  orientation: ScreenshotOrientation;
  screenshot: Screenshot;
  className?: string;
}

const ScreenshotItem = ({ orientation, screenshot, className }: Props) => {
  const alt = screenshot.description || 'screenshot';

  const mediaClassName = `object-cover rounded-lg ${orientation === 'portrait' ? 'aspect-[9/16] max-h-96 w-auto mx-auto' : 'aspect-[16/9] w-full'}`;

  const MediaComponent =
    screenshot.type === 'video' ? (
      <video
        src={screenshot.src}
        poster={screenshot.posterSrc}
        aria-label={alt}
        autoPlay
        loop
        muted
        playsInline
        className={mediaClassName}
      />
    ) : (
      <Image
        src={screenshot.src}
        alt={alt}
        width={800}
        height={400}
        className={mediaClassName}
      />
    );

  return (
    <div
      className={cn(
        'relative flex items-center justify-center p-4',
        className,
      )}>
      {MediaComponent}
      {screenshot.description && (
        <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white p-4 z-10 rounded-b-lg">
          <p className="text-sm text-center leading-relaxed">
            {screenshot.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default ScreenshotItem;
