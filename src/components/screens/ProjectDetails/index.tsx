import { Project } from '@/types/project';
import TechSkillsSection from './sections/TechSkills';
import IntroSection from './sections/Intro';
import ProjectMetaSection from './sections/Meta';
import ProjectScreenshotsSection from './sections/Screenshots';
import ProjectOverviewSection from './sections/Overview';
import ProjectFeaturesSection from './sections/Features';
import dynamic from 'next/dynamic';

const ProjectTroubleshootsSection = dynamic(
  () => import('./sections/Troubleshoots'),
);

interface Props {
  project: Project;
}

const ProjectDetailsScreen = ({ project }: Props) => {
  return (
    <div className="container mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8">
      <IntroSection project={project} />
      <ProjectScreenshotsSection screenshots={project.screenshots} />
      <ProjectMetaSection project={project} />
      <TechSkillsSection
        techSkillsUsed={project.techSkillsUsed}
        techSkillsExposed={project.techSkillsExposed}
      />
      <ProjectOverviewSection
        detailedExplanation={project.detailedExplanation}
      />
      <ProjectFeaturesSection features={project.features} />
      {project.troubleshoots && (
        <ProjectTroubleshootsSection troubleshoots={project.troubleshoots} />
      )}
    </div>
  );
};

export default ProjectDetailsScreen;
