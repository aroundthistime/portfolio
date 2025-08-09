import { Badge } from '@/components/ui/badge';
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

interface Props {
  project: Project;
}

const ProjectDetailsScreen = ({ project }: Props) => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
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
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Project Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <Card
                key={index}
                className={`${
                  feature.myContribution ? 'border-blue-200 bg-blue-50/50' : ''
                } border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm`}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base text-gray-900 dark:text-white">
                      {feature.name}
                    </CardTitle>
                    {feature.myContribution && (
                      <Badge className="bg-blue-500 text-white hover:bg-blue-600 text-xs">
                        My Contribution
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Troubleshoots */}
        {project.troubleshoots && (
          <section className="mb-12">
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
