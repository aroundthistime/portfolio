'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { groupBy } from '@/utils/array';
import { TechSkill } from '@/types/techSkill';
import { Badge, BadgeProps } from '@/components/ui/badge';

interface Props {
  techSkills: readonly TechSkill[];
  isEmphasized: boolean;
}

const TechSkillsList = ({ techSkills, isEmphasized }: Props) => {
  const groupedSkillsMap = useMemo(() => {
    return groupBy([...techSkills], tech => tech.group ?? 'Others');
  }, [techSkills]);

  if (!techSkills.length) {
    return null;
  }

  return (
    <div className="space-y-4">
      {Array.from(groupedSkillsMap.entries()).map(([groupName, skills]) => (
        <div key={groupName}>
          <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
            {groupName}
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
