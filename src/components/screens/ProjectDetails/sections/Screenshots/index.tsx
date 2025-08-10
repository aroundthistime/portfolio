import { Project } from '@/types/project';
import Screenshot from './Screenshot';
import ProjectImageCarousel from './Carousel';

interface Props {
  screenshots: Project['screenshots'];
}

const ProjectScreenshotsSection = ({ screenshots }: Props) => {
  const { items, orientation } = screenshots;

  return (
    <section className="-mt-2">
      {items.length > 1 ? (
        <ProjectImageCarousel screenshots={screenshots} />
      ) : (
        <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
          <Screenshot screenshot={items[0]} orientation={orientation} />
        </div>
      )}
    </section>
  );
};

export default ProjectScreenshotsSection;
