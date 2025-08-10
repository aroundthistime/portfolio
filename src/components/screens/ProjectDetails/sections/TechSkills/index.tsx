import { CheckCircle, Users } from 'lucide-react';

import { Project } from '@/types/project';
import TechSkillsList from './TechSkillsList';
import { useMemo } from 'react';
import { hasCommonElements } from '@/utils/array';
import { TECH_SKILL_GROUPS, TechSkillGroup } from '@/types/techSkill';
import { MY_MAIN_ROLE } from '@/constants/contentDB/aboutMe';

type Props = {
  project: Project;
};

const TechSkillsSection = ({ project }: Props) => {
  const { techSkillsUsed, techSkillsExposed } = project;

  /**
   * To prevent the list from being too long, we simplify some groups by the characteristics of the project.
   */
  const groupsToSimplifyForPrimary = useMemo(() => {
    const groupsToSimplify: TechSkillGroup[] = [];

    const XR_OR_3D_TAGS = ['XR', '3D', 'WebGL', 'WebGPU', 'AR'];
    if (!hasCommonElements(project.tags, XR_OR_3D_TAGS)) {
      groupsToSimplify.push(TECH_SKILL_GROUPS.threeD);
    }

    const myRole = project.role ?? MY_MAIN_ROLE;
    if (myRole === MY_MAIN_ROLE) {
      groupsToSimplify.push(TECH_SKILL_GROUPS.database);
    }

    return groupsToSimplify;
  }, [project]);

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        기술 스택 정보
      </h2>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
          Primary Technologies
        </h3>
        <TechSkillsList
          techSkills={techSkillsUsed}
          isEmphasized
          groupsToSimplify={groupsToSimplifyForPrimary}
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Users className="h-5 w-5 text-blue-600 mr-2" />
          Technologies Worked With
        </h3>
        <TechSkillsList techSkills={techSkillsExposed} isEmphasized={false} />
      </div>
    </section>
  );
};

export default TechSkillsSection;
