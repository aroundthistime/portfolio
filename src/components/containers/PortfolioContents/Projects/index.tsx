import { SectionTitle } from '@/types/enums/SectionTitle';
import PortfolioContentBox from '../Templates/PortfolioContentBox';
import PortfolioSection from '../Templates/PortfolioSection';
import NestedList, { MultiDepthData } from '@/components/NestedList';
import LogoWithText from '@/components/LogoWithText';
import { NestedProjectList } from './style';

/**
 * Section for showing the previous projects that I've done
 */
const Projects = () => {
  const projects: MultiDepthData[] = [
    {
      title: (
        <LogoWithText
          text="SQUARS"
          logoSrc="/images/projects/squars/logo.jpeg"
        />
      ),
      items: ['WebAR platform with online editor & AR Viewer'],
    },
    {
      title: (
        <LogoWithText text="TRACK" logoSrc="/images/projects/track/logo.jpeg" />
      ),
      items: ['Cross-platform framework for AR projects'],
    },
    {
      title: (
        <LogoWithText text="Owin" logoSrc="/images/projects/owin/logo.jpeg" />
      ),
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
        </PortfolioContentBox.Body>
      </PortfolioContentBox>
    </PortfolioSection>
  );
};

export default Projects;
