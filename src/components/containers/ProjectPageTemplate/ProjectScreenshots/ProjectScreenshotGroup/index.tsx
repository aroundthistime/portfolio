import { Project } from '@/types/Project';
import {
  ProjectScreenshotGroupContainer,
  ProjectScreenshotGroupTitle,
  ProjectScreenshotsContainer,
} from './style';
import ProjectScreenshot from './ProjectScreenshot';

/**
 * Component for rendering a group of project screenshots
 */
const ProjectScreenshotGroup = ({ screenshotGroup }: Props) => {
  return (
    <ProjectScreenshotGroupContainer>
      {screenshotGroup.title && (
        <ProjectScreenshotGroupTitle>
          {screenshotGroup.title}
        </ProjectScreenshotGroupTitle>
      )}
      <ProjectScreenshotsContainer>
        {screenshotGroup.screenshots.map(screenshot => (
          <ProjectScreenshot screenshot={screenshot} key={screenshot.src} />
        ))}
      </ProjectScreenshotsContainer>
    </ProjectScreenshotGroupContainer>
  );
};

interface Props {
  screenshotGroup: Project['screenshotGroups'][0];
}

export default ProjectScreenshotGroup;
