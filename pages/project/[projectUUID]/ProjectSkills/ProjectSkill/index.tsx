import classNames from 'classnames';
import { SkillUsedInProject } from '@/types/Project';
import { ProjectSkillContainer, ProjectSkillWithLogo } from './style';

/**
 * Component rendering information about a skill used in the project
 */
const ProjectSkill = ({ skill: skillInfo }: Props) => {
  const { skill, byMe } = skillInfo;
  return (
    <ProjectSkillContainer className={classNames({ 'not-by-me': !byMe })}>
      <ProjectSkillWithLogo text={skill.name} logoSrc={skill.logoSrc} />
    </ProjectSkillContainer>
  );
};

interface Props {
  skill: SkillUsedInProject;
}

export default ProjectSkill;
