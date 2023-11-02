import { GetServerSideProps } from 'next';
import { PROJECTS } from '@/dummyData/project';
import { Project } from '@/types/Project';
import { normalizeURLParam } from '@/utils/url';
import { ProjectPageContainer, ProjectTitle } from './style';
import ProjectSummary from '@/components/containers/ProjectPageTemplate/ProjectSummary';

interface Props {
  /**
   * Data of the project with given UUID
   */
  project: Project;
}

const ProjectPage = ({ project }: Props) => {
  return (
    <ProjectPageContainer>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectSummary summary={project.summary} />
    </ProjectPageContainer>
  );
};

export const getServerSideProps = (async ({ params }) => {
  const { projectUUID } = params;
  const normalizedProjectUUID = normalizeURLParam(projectUUID);

  const project = PROJECTS[normalizedProjectUUID];
  return {
    props: {
      project,
    },
  };
}) satisfies GetServerSideProps<Props>;

export default ProjectPage;
