import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import dynamic from 'next/dynamic';
import { PROJECTS } from '@/dummyData/project';
import { MultiLanguageProject, Project } from '@/types/Project';
import { getCacheDisabledURL, normalizeURLParam } from '@/utils/url';
import { ProjectPageContainer } from './style';
import { localizeData } from '@/utils/localization';
import { MultiLanguageString } from '@/types/utilTypes/Localization';
import { cartesian } from '@/utils/array';
import { LOCALES } from '@/types/Locale';
import ProjectTitle from './ProjectTitle';
import ProjectSummary from './ProjectSummary';
import ProjectSkills from './ProjectSkills';
import ProjectContent from './ProjectContent';
import ProjectFeatures from './ProjectFeatures';

const ProjectTroubleShoots = dynamic(() => import('./ProjectTroubleShoots'));
const ProjectScreenshots = dynamic(() => import('./ProjectScreenshots'));

interface Props {
  project: Project | null;
}

const ProjectPage = ({ project }: Props) => {
  const faviconUrl = getCacheDisabledURL(project.logo);

  return (
    <>
      <Head>
        <title>{project.title}</title>
        <link rel="shortcut icon" href={faviconUrl} suppressHydrationWarning />
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

export const getStaticProps = (async ({ params, locale }) => {
  const { projectUUID } = params;
  const normalizedProjectUUID = normalizeURLParam(projectUUID);

  const projectBeforeLocalization = PROJECTS[normalizedProjectUUID];

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
}) satisfies GetStaticProps<Props>;

export const getStaticPaths = (async () => {
  const paths = cartesian(
    Object.keys(PROJECTS),
    LOCALES as unknown as any[],
  ).map(([projectUUID, locale]) => {
    return {
      params: {
        projectUUID,
      },
      locale,
    };
  });

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export default ProjectPage;
