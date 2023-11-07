import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { PROJECTS } from '@/dummyData/project';
import { Project } from '@/types/Project';
import { getCacheDisabledURL, normalizeURLParam } from '@/utils/url';
import { ProjectPageContainer } from './style';
import ProjectSummary from '@/components/containers/ProjectPageTemplate/ProjectSummary';
import ProjectTitle from '@/components/containers/ProjectPageTemplate/ProjectTitle';
import ProjectSkills from '@/components/containers/ProjectPageTemplate/ProjectSkills';
import ProjectContent from '@/components/containers/ProjectPageTemplate/ProjectContent';
import ProjectFeatures from '@/components/containers/ProjectPageTemplate/ProjectFeatures';
import ProjectScreenshots from '@/components/containers/ProjectPageTemplate/ProjectScreenshots';

interface Props {
  /**
   * Data of the project with given UUID
   */
  project: Project;
}

const ProjectPage = ({ project }: Props) => {
  const faviconUrl = getCacheDisabledURL(project.logo);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={faviconUrl} />
        <meta name="title" content={project.title} />
        <meta name="description" content={project.summary.brief} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={project.logo} />
      </Head>
      <ProjectPageContainer>
        <ProjectTitle project={project} />
        <ProjectSummary summary={project.summary} />
        <ProjectSkills skills={project.skills} />
        <ProjectContent content={project.content} />
        <ProjectFeatures features={project.features} />
        {project.screenshotGroups && (
          <ProjectScreenshots screenshotGroups={project.screenshotGroups} />
        )}
      </ProjectPageContainer>
    </>
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
