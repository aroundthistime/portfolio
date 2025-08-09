import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Project } from '@/types/project';
import TechSkillsSection from './sections/TechSkills';
import IntroSection from './sections/Intro';
import ProjectMetaSection from './sections/Meta';
import ProjectScreenshotsSection from './sections/Screenshots';
import ProjectOverviewSection from './sections/Overview';
import ProjectFeaturesSection from './sections/Features';

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
        {/* Features */}
        <ProjectFeaturesSection features={project.features} />

        {/* Troubleshoots */}
        {project.troubleshoots && (
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Challenges & Solutions
            </h2>
            <div className="space-y-8">
              {project.troubleshoots.map((item, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center text-gray-900 dark:text-white">
                      <Lightbulb className="h-6 w-6 text-yellow-500 mr-3" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        The Challenge:
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        My Solution:
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
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
