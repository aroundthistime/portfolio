import React from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PROJECTS } from '@/dummyData/project';
import { MultiLanguageProject, Project } from '@/types/Project';
import { getCacheDisabledURL, normalizeURLParam } from '@/utils/url';
import { ProjectPageContainer } from './style';
import { localizeData } from '@/utils/localization';
import { MultiLanguageString } from '@/types/utilTypes/Localization';
import ProjectTroubleShoots from './ProjectTroubleShoots';

const ErrorPage = React.lazy(() => import('@/components/containers/ErrorPage'));
const ProjectTitle = React.lazy(
  () => import('pages/project/[projectUUID]/ProjectTitle'),
);
const ProjectSummary = React.lazy(
  () => import('pages/project/[projectUUID]/ProjectSummary'),
);
const ProjectSkills = React.lazy(
  () => import('pages/project/[projectUUID]/ProjectSkills'),
);
const ProjectContent = React.lazy(
  () => import('pages/project/[projectUUID]/ProjectContent'),
);
const ProjectFeatures = React.lazy(
  () => import('pages/project/[projectUUID]/ProjectFeatures'),
);
const ProjectScreenshots = React.lazy(
  () => import('pages/project/[projectUUID]/ProjectScreenshots'),
);

interface Props {
  project: Project | null;
}

const ProjectPage = ({ project }: Props) => {
  if (!project) {
    // Directly render error page (cannot use error boundary because of SSR)
    return (
      <ErrorPage
        error={
          new Error(
            'Could not find the requested project. Please check your URL :(',
          )
        }
        resetErrorBoundary={() => {}}
      />
    );
  }

  const faviconUrl = getCacheDisabledURL(project.logo);
  return (
    <>
      <Head>
        <title>{project.title}</title>
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
        {project.troubleShoots && (
          <ProjectTroubleShoots troubleShoots={project.troubleShoots} />
        )}
        {project.screenshotGroups && (
          <ProjectScreenshots screenshotGroups={project.screenshotGroups} />
        )}
      </ProjectPageContainer>
    </>
  );
};

export const getServerSideProps = (async ({ params, locale }) => {
  const { projectUUID } = params;
  const normalizedProjectUUID = normalizeURLParam(projectUUID);

  const projectBeforeLocalization = PROJECTS[normalizedProjectUUID];

  if (!projectBeforeLocalization) {
    return {
      props: {
        project: null,
      },
    };
  }

  const localizedProject = localizeData<MultiLanguageProject>(
    projectBeforeLocalization,
    locale as keyof MultiLanguageString,
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'projectPage'])),
      project: localizedProject,
    },
  };
}) satisfies GetServerSideProps<Props>;

export default ProjectPage;
