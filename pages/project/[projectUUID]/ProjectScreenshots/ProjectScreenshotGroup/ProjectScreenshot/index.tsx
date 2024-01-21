import {
  ProjectScreenshotMediaType,
  ProjectScreenshot as ProjectScreenshotType,
} from '@/types/Project';
import { ProjectScreenshotContainer } from './style';
import LazyVideo from '@/components/LazyLoading/LazyVideo';

/**
 * Component for rendering a single screenshot item of project
 */
const ProjectScreenshot = ({ screenshot }: Props) => {
  const getClassName = () => {
    const DEFAULT_CLASSNAME = 'project-screenshot';
    return `${DEFAULT_CLASSNAME} ${DEFAULT_CLASSNAME}--${screenshot.type}`;
  };
  return (
    <ProjectScreenshotContainer>
      {screenshot.type === ProjectScreenshotMediaType.Image ? (
        <img
          src={screenshot.src}
          className={getClassName()}
          alt="Project screenshot"
        />
      ) : (
        <LazyVideo
          src={screenshot.src}
          className={getClassName()}
          autoPlay
          playsInline
          muted
          loop
        />
      )}
    </ProjectScreenshotContainer>
  );
};

interface Props {
  screenshot: ProjectScreenshotType;
}

export default ProjectScreenshot;
