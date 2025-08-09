import { CheckCircle, Users } from 'lucide-react';

import { Project } from '@/types/project';
import TechSkillsList from './TechSkillsList';

type Props = Pick<Project, 'techSkillsUsed' | 'techSkillsExposed'>;

const TechSkillsSection = ({ techSkillsUsed, techSkillsExposed }: Props) => {
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
        <TechSkillsList techSkills={techSkillsUsed} isEmphasized />
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
