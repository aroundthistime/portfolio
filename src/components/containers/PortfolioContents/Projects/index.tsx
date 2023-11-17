import { useEffect, useState } from 'react';
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

/**
 * Section for showing the previous projects that I've done
 */
const Projects = () => {
  const { t } = useTranslation('3d');
  const router = useRouter();

  const { data: projectDTOs, refetch, isLoading } = useBriefProjectsQuery();
  const [projects, setProjects] = useState<MultiDepthData[]>([]);
  /**
   * Convert project DTOs suitable for rendering
   */
  const convertProjectsDTOForRendering = () => {
    const convertedProjects: MultiDepthData[] = projectDTOs.map(
      (projectDto: ProjectBriefDto) => {
        const onProjectClick = () => {
          const { openMonitor } = use3DSceneStore.getState()
            .currentSection as ProjectsSection;

          if (openMonitor) {
            openMonitor(`/project/${projectDto.uuid}`);
          }
        };
        return {
          title: (
            <button onClick={onProjectClick} type="button">
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
        <PortfolioContentBox.Header>Projects</PortfolioContentBox.Header>
        <PortfolioContentBox.Body>
          <NestedProjectList multiDepthDataList={projects} />
          <ProjectClickGuidance>{t('inductive-phrase')}</ProjectClickGuidance>
        </PortfolioContentBox.Body>
      </PortfolioContentBox>
    </PortfolioSection>
  );
};

export default Projects;
