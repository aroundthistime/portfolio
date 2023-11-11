import { useTranslation } from 'next-i18next';
import { Project } from '@/types/Project';
import ProjectSection from '../ProjectSection';
import { ProjectContentTextContainer } from './style';

/**
 * Component for rendering detailed explanation about the project
 */
const ProjectContent = ({ content }: Props) => {
  const { t } = useTranslation('projectPage');
  return (
    <ProjectSection>
      <ProjectSection.Title>{t('content')}</ProjectSection.Title>
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
