'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { groupBy } from '@/utils/array';
import { TechSkill, TechSkillGroup } from '@/types/techSkill';
import { Badge } from '@/components/ui/badge';

const FALLBACK_GROUP = 'Others';

interface Props {
  techSkills: readonly TechSkill[];
  isEmphasized: boolean;
  groupsToSimplify?: readonly TechSkillGroup[];
}

const TechSkillsList = ({
  techSkills,
  isEmphasized,
  groupsToSimplify,
}: Props) => {
  const skillGroupsSortedByPriority = useMemo(() => {
    const groupsToSimplifySet = new Set(groupsToSimplify);

    const simplifiedTechSkills = techSkills.map(techSkill => {
      const { group, ...rest } = techSkill;

      return group && !groupsToSimplifySet.has(group)
        ? techSkill
        : {
            ...rest,
            group: undefined,
          };
    });

    const groupedSkillsMap = groupBy(
      simplifiedTechSkills,
      techSkill => techSkill.group,
    );

    const getGroupPriority = (group?: TechSkillGroup) => {
      if (!group) return 999;
      switch (group) {
        case 'Languages & Frameworks':
          return 0;
        case 'State Management':
          return 1;
        case 'Styling & UI':
          return 2;
        case 'Testing':
          return 3;
        case 'API & Protocol':
          return 4;
        case 'Database':
        case 'Devops & Infrastructure':
          return 5;
        case '3D & Web Graphics':
        case 'Build Tools':
        case 'Working Tools':
          return 6;
        default:
          return 7;
      }
    };

    return Array.from(groupedSkillsMap.entries()).sort(([groupA], [groupB]) => {
      const aPriority = getGroupPriority(groupA);
      const bPriority = getGroupPriority(groupB);
      return aPriority - bPriority;
    });
  }, [techSkills, groupsToSimplify]);

  return (
    <div className="space-y-4">
      {skillGroupsSortedByPriority.map(([groupName, skills]) => (
        <div key={groupName}>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            {groupName ?? FALLBACK_GROUP}
          </h4>
          <div className="flex flex-wrap gap-3">
            {skills.map(tech => (
              <Badge
                key={tech.name}
                variant={isEmphasized ? 'outline' : 'secondary'}
                className="px-3 py-1 text-sm cursor-default bg-white/80 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-purple-50 dark:hover:bg-gray-600">
                {tech.iconUrl && (
                  <Image
                    src={tech.iconUrl}
                    alt={tech.name}
                    width={16}
                    height={16}
                    className="mr-2"
                  />
                )}
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechSkillsList;
