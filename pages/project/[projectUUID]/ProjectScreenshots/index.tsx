import { useTranslation } from 'next-i18next';
import React, { useRef } from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import { Project } from '@/types/Project';
import ProjectSection from '../ProjectSection';
import { ProjectScreenshotGroupsContainer } from './style';

const ProjectScreenshotGroup = React.lazy(
  () => import('./ProjectScreenshotGroup'),
);

/**
 * Component for rendering a section containing screenshots of the project
 */
const ProjectScreenshots = ({ screenshotGroups }: Props) => {
  const { t } = useTranslation('projectPage');

  const screenshotsContainerRef = useRef<HTMLUListElement>(null!);

  const shouldRenderRef = useRef<boolean>(false);

  const intersection = useIntersectionObserver(screenshotsContainerRef, {});

  if (intersection?.isIntersecting) {
    shouldRenderRef.current = true;
  }
  return (
    <ProjectSection>
      <ProjectSection.Title>{t('screenshots')}</ProjectSection.Title>
      <ProjectSection.Content>
        <ProjectScreenshotGroupsContainer ref={screenshotsContainerRef}>
          {shouldRenderRef.current && (
            <>
              {screenshotGroups.map(screenshotGroup => (
                <ProjectScreenshotGroup
                  screenshotGroup={screenshotGroup}
                  key={screenshotGroup.title}
                />
              ))}
            </>
          )}
        </ProjectScreenshotGroupsContainer>
      </ProjectSection.Content>
    </ProjectSection>
  );
};

interface Props {
  screenshotGroups: Project['screenshotGroups'];
}

export default ProjectScreenshots;
