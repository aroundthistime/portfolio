import { Project } from '@/types/Project';
import { ProjectTitleContainer, ProjectTitleWithLogo } from './style';

/**
 * Component for rendering title of the project page
 */
const ProjectTitle = ({ project }: Props) => {
  return (
    <ProjectTitleContainer>
      <ProjectTitleWithLogo logoSrc={project.logo} text={project.title} />
    </ProjectTitleContainer>
  );
};

interface Props {
  project: Project;
}

export default ProjectTitle;
