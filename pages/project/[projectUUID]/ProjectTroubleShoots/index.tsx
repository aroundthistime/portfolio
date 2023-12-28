import { useTranslation } from 'next-i18next';
import ProjectSection from '../ProjectSection';
import { Project } from '@/types/Project';
import { ProjectTroubleShootsContainer } from './style';
import ProjectTroubleShoot from './ProjectTroubleShoot';

/**
 * Component for rendering trouble shoots that experienced during the project
 */
const ProjectTroubleShoots = ({ troubleShoots }: Props) => {
  const { t } = useTranslation('projectPage');

  return (
    <ProjectSection>
      <ProjectSection.Title>{t('trouble-shoots')}</ProjectSection.Title>
      <ProjectSection.Content>
        <ProjectTroubleShootsContainer>
          {troubleShoots.map(troubleShoot => (
            <ProjectTroubleShoot
              troubleShoot={troubleShoot}
              key={troubleShoot.title}
            />
          ))}
        </ProjectTroubleShootsContainer>
      </ProjectSection.Content>
    </ProjectSection>
  );
};

interface Props {
  troubleShoots: Project['troubleShoots'];
}

export default ProjectTroubleShoots;
