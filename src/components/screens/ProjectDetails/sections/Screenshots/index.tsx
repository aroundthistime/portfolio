import { Project } from '@/types/project';
import Image from 'next/image';
import ProjectImageCarousel from './Carousel';

interface Props {
  screenshots: Project['screenshots'];
}

const ProjectScreenshotsSection = ({ screenshots }: Props) => {
  const { images, type: screenshotType } = screenshots;

  const getImageAspectClass = () => {
    return screenshotType === 'portrait'
      ? 'aspect-[9/16] max-h-96 w-auto mx-auto'
      : 'aspect-[16/9] w-full';
  };

  if (images.length === 1) {
    const [image] = images;
    return (
      <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
        <div className="flex items-center justify-center p-4">
          <Image
            src={image.src}
            alt={image.description || 'screenshot'}
            width={800}
            height={400}
            className={`object-cover rounded-lg ${getImageAspectClass()}`}
          />
        </div>
        {image.description && (
          <div className="px-4 pb-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center italic">
              {image.description}
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <section className="mb-12">
      {images.length > 1 ? (
        <ProjectImageCarousel screenshots={screenshots} />
      ) : (
        <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
          <div className="flex items-center justify-center p-4">
            <Image
              src={images[0].src}
              alt={images[0].description || 'screenshot'}
              width={800}
              height={400}
              className={`object-cover rounded-lg ${getImageAspectClass()}`}
            />
          </div>
          {images[0].description && (
            <div className="px-4 pb-4">
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center italic">
                {images[0].description}
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ProjectScreenshotsSection;
