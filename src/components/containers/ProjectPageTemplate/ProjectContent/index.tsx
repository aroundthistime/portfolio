import { Project } from '@/types/Project';
import ProjectSection from '../ProjectSection';
import { ProjectContentTextContainer } from './style';

/**
 * Component for rendering detailed explanation about the project
 */
const ProjectContent = ({ content }: Props) => {
  return (
    <ProjectSection>
      <ProjectSection.Title>Content</ProjectSection.Title>
      <ProjectSection.Content>
        <ProjectContentTextContainer>{content}</ProjectContentTextContainer>
      </ProjectSection.Content>
    </ProjectSection>
  );
};

interface Props {
  content: Project['content'];
}

export default ProjectContent;
