import { SectionTitle } from '@/types/enums/SectionTitle';
import PortfolioContentBox from '../Templates/PortfolioContentBox';
import PortfolioSection from '../Templates/PortfolioSection';

/**
 * Section for showing the previous projects that I've done
 */
const Projects = () => {
  return (
    <PortfolioSection sectionTitle={SectionTitle.Projects}>
      <PortfolioContentBox>
        <PortfolioContentBox.Header>Projects</PortfolioContentBox.Header>
        <PortfolioContentBox.Body />
      </PortfolioContentBox>
    </PortfolioSection>
  );
};

export default Projects;
