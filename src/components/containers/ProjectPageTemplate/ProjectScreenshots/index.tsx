import { ProjectScreenshotGroup as ProjectScreenshotGroupType } from '@/types/Project';
import ProjectSection from '../ProjectSection';
import { ProjectScreenshotGroupsContainer } from './style';
import ProjectScreenshotGroup from './ProjectScreenshotGroup';

/**
 * Component for rendering a section containing screenshots of the project
 */
const ProjectScreenshots = ({ screenshotGroups }: Props) => {
  return (
    <ProjectSection>
      <ProjectSection.Title>Screenshots</ProjectSection.Title>
      <ProjectSection.Content>
        <ProjectScreenshotGroupsContainer>
          {screenshotGroups.map(screenshotGroup => (
            <ProjectScreenshotGroup
              screenshotGroup={screenshotGroup}
              key={screenshotGroup.title}
            />
          ))}
        </ProjectScreenshotGroupsContainer>
      </ProjectSection.Content>
    </ProjectSection>
  );
};

interface Props {
  screenshotGroups: ProjectScreenshotGroupType[];
}

export default ProjectScreenshots;
