import { PropsWithChildren } from 'react';
import {
  ProjectSectionContainer,
  ProjectSectionContent,
  ProjectSectionTitle,
} from './style';

/**
 * Component for rendering a section of project information
 */
const ProjectSection = ({ children }: PropsWithChildren) => {
  return <ProjectSectionContainer>{children}</ProjectSectionContainer>;
};

ProjectSection.Title = ProjectSectionTitle;
ProjectSection.Content = ProjectSectionContent;

export default ProjectSection;
