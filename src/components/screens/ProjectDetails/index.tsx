import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
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
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-6xl flex flex-col gap-8">
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

        {/* Navigation */}
        <div className="flex justify-center">
          <Link href="/" className="cursor-pointer">
            <Button size="lg">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsScreen;
