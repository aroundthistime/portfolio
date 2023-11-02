import Link from 'next/link';
import { Project, ProjectDateInfo } from '@/types/Project';
import {
  ProjectLinkLogoWithText,
  ProjectSummaryItem,
  ProjectSummaryItemLabel,
} from './style';
import { addBetweenElements } from '@/utils/array';
import ProjectSection from '../ProjectSection';
import LogoWithText from '@/components/LogoWithText';

/**
 * Component which contains summary of a project
 */
const ProjectSummary = ({ summary }: Props) => {
  /**
   * Get working period in formatted string.
   * If 'till' property is not given, it will be formatted as 'Now'
   */
  const formatWorkingPeriod = () => {
    const formatProjectDateInfo = (dateInfo: ProjectDateInfo) => {
      return `${dateInfo.year}-${dateInfo.month}`;
    };

    const { from, till } = summary.period;

    const formattedFrom = formatProjectDateInfo(from);
    const formattedTill = till ? formatProjectDateInfo(till) : 'Now';

    return `${formattedFrom} ~ ${formattedTill}`;
  };

  /**
   * Get an array of project links with comma in between as separators.
   * Didn't use ::after of css because unwanted styles were being added to separators
   */
  const getProjectLinks = () => {
    const ProjectLinks = summary.links.map(link => (
      <Link href={link.url} key={link.title}>
        {link.image ? (
          <ProjectLinkLogoWithText logoSrc={link.image} text={link.title} />
        ) : (
          link.title
        )}
      </Link>
    ));

    const SEPARATOR = ', ';

    return addBetweenElements<JSX.Element, string>(ProjectLinks, SEPARATOR);
  };

  return (
    <ProjectSection>
      <ProjectSection.Title>Summary</ProjectSection.Title>
      <ProjectSection.Content>
        <ProjectSummaryItem>
          <ProjectSummaryItemLabel>What is it?</ProjectSummaryItemLabel>
          {summary.brief}
        </ProjectSummaryItem>
        <ProjectSummaryItem>
          <ProjectSummaryItemLabel>Working period</ProjectSummaryItemLabel>
          {formatWorkingPeriod()}
        </ProjectSummaryItem>
        {summary.links && summary.links.length > 0 && (
          <ProjectSummaryItem>
            <ProjectSummaryItemLabel>Related Links</ProjectSummaryItemLabel>
            {getProjectLinks()}
          </ProjectSummaryItem>
        )}
      </ProjectSection.Content>
    </ProjectSection>
  );
};

interface Props {
  summary: Project['summary'];
}

export default ProjectSummary;
