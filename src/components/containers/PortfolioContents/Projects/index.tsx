import { SectionTitle } from '@/types/enums/SectionTitle';
import PortfolioContentBox from '../Templates/PortfolioContentBox';
import PortfolioSection from '../Templates/PortfolioSection';
import LogoWithText from '@/components/LogoWithText';
import { NestedProjectList, ProjectClickGuidance } from './style';
import { MultiDepthData } from '@/types/MultiDepthData';

/**
 * Section for showing the previous projects that I've done
 */
const Projects = () => {
  const projects: MultiDepthData[] = [
    {
      title: (
        <LogoWithText text="SQUARS" logoSrc="/projects/squars/logo.jpeg" />
      ),
      items: ['WebAR platform with online editor & AR Viewer'],
    },
    {
      title: <LogoWithText text="TRACK" logoSrc="/projects/track/logo.jpeg" />,
      items: ['Cross-platform framework for AR projects'],
    },
    {
      title: (
        <LogoWithText
          text="3D Portfolio"
          logoSrc="/projects/portfolio/logo.jpeg"
        />
      ),
      items: ['Portfolio using Web 3D rendering'],
    },
    {
      title: <LogoWithText text="Owin" logoSrc="/projects/owin/logo.jpeg" />,
      items: [
        'Mobile POS application for shop owners of Owin In-car payment service',
      ],
    },
  ];

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
