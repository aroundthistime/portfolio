import { useTranslation } from 'next-i18next';
import { Project } from '@/types/Project';
import ProjectSection from '../ProjectSection';
import { ProjectSkillsContainer, SkillsNotUsedByMeGuide } from './style';
import ProjectSkill from './ProjectSkill';

/**
 * Component rendering a section about skills used in the project
 */
const ProjectSkills = ({ skills }: Props) => {
  const { t } = useTranslation(['projectPage', 'common']);

  /**
   * Get whether there is at least one skill that I didn't actually use
   * @returns {boolean} True if there is at least one skill in the list is not used by me
   */
  const containsSkillNotUsedByMe = () => {
    return skills.find(skill => !skill.byMe);
  };

  return (
    <ProjectSection>
      <ProjectSection.Title>
        {t('skills', { ns: 'common' })}
      </ProjectSection.Title>
      <ProjectSection.Content>
        {containsSkillNotUsedByMe() && (
          <SkillsNotUsedByMeGuide>
            {t('not-by-me-description', {
              itemName: t('skills', { ns: 'common' }).toLowerCase(),
            })}
          </SkillsNotUsedByMeGuide>
        )}
        <ProjectSkillsContainer>
          {skills.map(skill => (
            <ProjectSkill skill={skill} key={skill.skill.name} />
          ))}
        </ProjectSkillsContainer>
      </ProjectSection.Content>
    </ProjectSection>
  );
};

interface Props {
  skills: Project['skills'];
}

export default ProjectSkills;