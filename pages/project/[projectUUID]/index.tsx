import { GetServerSideProps } from 'next';
import { PROJECTS } from '@/dummyData/project';
import { Project } from '@/types/Project';
import { normalizeURLParam } from '@/utils/url';
import { ProjectPageContainer } from './style';
import ProjectSummary from '@/components/containers/ProjectPageTemplate/ProjectSummary';
import ProjectTitle from '@/components/containers/ProjectPageTemplate/ProjectTitle';

interface Props {
  /**
   * Data of the project with given UUID
   */
  project: Project;
}

const ProjectPage = ({ project }: Props) => {
  return (
    <ProjectPageContainer>
      <ProjectTitle project={project} />
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
