import { useTranslation } from 'next-i18next';

import { Project } from '@/types/Project';
import { ArrayElement } from '@/types/utilTypes/Array';
import { TroubleShootContent, TroubleShootTitle } from './style';
import ProjectTroubleShootSubItem from './ProjectTroubleShootSubItem';
import alertIcon from '@/assets/icons/alert.png';
import ideaIcon from '@/assets/icons/idea.png';

const ProjectTroubleShoot = ({ troubleShoot }: Props) => {
  const { t } = useTranslation('projectPage');

  return (
    <li>
      <TroubleShootTitle>{troubleShoot.title}</TroubleShootTitle>
      <TroubleShootContent>
        <ProjectTroubleShootSubItem
          logoSrc={alertIcon.src}
          title={t('problem')}
          content={troubleShoot.problem}
        />
        <ProjectTroubleShootSubItem
          logoSrc={ideaIcon.src}
          title={t('solution')}
          content={troubleShoot.solution}
        />
      </TroubleShootContent>
    </li>
  );
};

interface Props {
  troubleShoot: ArrayElement<Project['troubleShoots']>;
}

export default ProjectTroubleShoot;
