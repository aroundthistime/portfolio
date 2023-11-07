import { useEffect, useState } from 'react';
import axios from 'axios';
import { SectionTitle } from '@/types/enums/SectionTitle';
import PortfolioContentBox from '../Templates/PortfolioContentBox';
import PortfolioSection from '../Templates/PortfolioSection';
import LogoWithText from '@/components/LogoWithText';
import { NestedProjectList, ProjectClickGuidance } from './style';
import { MultiDepthData } from '@/types/MultiDepthData';
import use3DSceneStore from '@/store/use3DSceneStore';
import { ProjectBriefDto } from '@/types/dto/ProjectDto';
import { ProjectsSection } from '@/store/use3DSceneStore/types';

/**
 * Section for showing the previous projects that I've done
 */
const Projects = () => {
  const [projects, setProjects] = useState<MultiDepthData[]>([]);

  /**
   * Get list of brief project information from server
   */
  const getProjects = async () => {
    const data = await axios.get('/api/project/brief');
    const {
      data: { projects: projectDtos },
    } = data;

    // Convert project dtos suitable for rendering
    const projectsToRender: MultiDepthData[] = projectDtos.map(
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

    setProjects(projectsToRender);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <PortfolioSection sectionTitle={SectionTitle.Projects}>
      <PortfolioContentBox>
        <PortfolioContentBox.Header>Projects</PortfolioContentBox.Header>
        <PortfolioContentBox.Body>
          <NestedProjectList multiDepthDataList={projects} />
          <ProjectClickGuidance>
            (You can click the name of the project to see details)
          </ProjectClickGuidance>
        </PortfolioContentBox.Body>
      </PortfolioContentBox>
    </PortfolioSection>
  );
};

export default Projects;
