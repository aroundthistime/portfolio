import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { SectionTitle } from '@/types/enums/SectionTitle';
import PortfolioContentBox from '../Templates/PortfolioContentBox';
import PortfolioSection from '../Templates/PortfolioSection';
import LogoWithText from '@/components/LogoWithText';
import { NestedProjectList, ProjectClickGuidance } from './style';
import { MultiDepthData } from '@/types/MultiDepthData';
import use3DSceneStore from '@/store/use3DSceneStore';
import { ProjectBriefDto } from '@/types/dto/ProjectDto';
import { ProjectsSection } from '@/store/use3DSceneStore/types';
import { useBriefProjectsQuery } from '@/queries/project/useProjectQuery';
import { isMobileDevice } from '@/utils/device';

/**
 * Section for showing the previous projects that I've done
 */
const Projects = () => {
  const { t } = useTranslation(['3d', 'common']);
  const router = useRouter();

  const { data: projectDTOs, refetch, isLoading } = useBriefProjectsQuery();
  const [projects, setProjects] = useState<MultiDepthData[]>([]);
  /**
   * Set for storing urls of the preloaded project detail pages.
   * This also distinguishes applied locale of the page
   */
  const preloadedProjectSetRef = useRef<Set<string>>(new Set());

  /**
   * Convert project DTOs suitable for rendering
   */
  const convertProjectsDTOForRendering = () => {
    const convertedProjects: MultiDepthData[] = projectDTOs.map(
      (projectDto: ProjectBriefDto) => {
        const projectPageUrl = `/project/${projectDto.uuid}`;

        const getLocalizedProjectPageUrl = () => {
          return `/${router.locale}${projectPageUrl}`;
        };

        /**
         * Preload project detail page of the hovered
         */
        const onProjectHover = () => {
          const localizedProjectPageUrl = getLocalizedProjectPageUrl();

          if (preloadedProjectSetRef.current.has(localizedProjectPageUrl)) {
            return;
          }

          preloadedProjectSetRef.current.add(localizedProjectPageUrl);

          const iframe = document.createElement('iframe');
          iframe.src = localizedProjectPageUrl;
          iframe.style.display = 'none';
          document.body.appendChild(iframe);
          iframe.onload = () => {
            document.body.removeChild(iframe);
          };
        };

        const onProjectClick = () => {
          const localizedProjectPageUrl = getLocalizedProjectPageUrl();

          // In mobile devices, new tabs will open without using 3D monitors due to screen size issues
          // Maintain current locale for opening project page
          if (isMobileDevice()) {
            window.open(localizedProjectPageUrl, '_blank');
          } else {
            const { openMonitor } = use3DSceneStore.getState()
              .currentSection as ProjectsSection;

            if (openMonitor) {
              openMonitor(projectPageUrl);
            }
          }
        };

        return {
          title: (
            <button
              onClick={onProjectClick}
              onMouseEnter={onProjectHover}
              type="button">
              <LogoWithText text={projectDto.title} logoSrc={projectDto.logo} />
            </button>
          ),
          items: [projectDto.brief],
        };
      },
    );

    setProjects(convertedProjects);
  };

  useEffect(() => {
    if (projectDTOs) {
      convertProjectsDTOForRendering();
    }
  }, [projectDTOs]);

  useEffect(() => {
    if (router.locale && !isLoading) {
      refetch();
    }
  }, [router.locale]);

  return (
    <PortfolioSection sectionTitle={SectionTitle.Projects}>
      <PortfolioContentBox>
        <PortfolioContentBox.Header>
          {t('projects', { ns: 'common' })}
        </PortfolioContentBox.Header>
        <PortfolioContentBox.Body>
          <NestedProjectList multiDepthDataList={projects} />
          <ProjectClickGuidance>{t('inductive-phrase')}</ProjectClickGuidance>
        </PortfolioContentBox.Body>
      </PortfolioContentBox>
    </PortfolioSection>
  );
};

export default Projects;
