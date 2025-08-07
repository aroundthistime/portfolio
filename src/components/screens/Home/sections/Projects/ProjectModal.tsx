'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  ExternalLink,
  Github,
  CheckCircle,
  Lightbulb,
  Code2,
  Users,
  Maximize2,
  X,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useProjectModal } from './context';

// Technology icons mapping
const techIcons = {
  'Next.js': '⚛️',
  'Next.js 14': '⚛️',
  React: '⚛️',
  'React 18': '⚛️',
  'React Native': '📱',
  'React Native Web': '📱',
  TypeScript: '🔷',
  JavaScript: '🟨',
  'Tailwind CSS': '🎨',
  'Styled Components': '💅',
  CSS: '🎨',
  HTML: '🌐',
  'Node.js': '🟢',
  Python: '🐍',
  PostgreSQL: '🐘',
  MongoDB: '🍃',
  Redis: '🔴',
  Docker: '🐳',
  AWS: '☁️',
  Git: '📝',
  Jest: '🃏',
  Cypress: '🌲',
};

// Technology grouping
const groupTechnologies = (technologies: string[]) => {
  const groups = {
    'Frontend Frameworks': [] as string[],
    'Styling & UI': [] as string[],
    'Backend & Database': [] as string[],
    Testing: [] as string[],
    'DevOps & Tools': [] as string[],
    Other: [] as string[],
  };

  technologies.forEach(tech => {
    const lowerTech = tech.toLowerCase();
    if (
      lowerTech.includes('react') ||
      lowerTech.includes('next') ||
      lowerTech.includes('vue') ||
      lowerTech.includes('angular')
    ) {
      groups['Frontend Frameworks'].push(tech);
    } else if (
      lowerTech.includes('css') ||
      lowerTech.includes('tailwind') ||
      lowerTech.includes('styled') ||
      lowerTech.includes('sass') ||
      lowerTech.includes('emotion')
    ) {
      groups['Styling & UI'].push(tech);
    } else if (
      lowerTech.includes('node') ||
      lowerTech.includes('python') ||
      lowerTech.includes('postgresql') ||
      lowerTech.includes('mongodb') ||
      lowerTech.includes('redis') ||
      lowerTech.includes('mysql') ||
      lowerTech.includes('graphql')
    ) {
      groups['Backend & Database'].push(tech);
    } else if (
      lowerTech.includes('jest') ||
      lowerTech.includes('cypress') ||
      lowerTech.includes('testing') ||
      lowerTech.includes('test')
    ) {
      groups['Testing'].push(tech);
    } else if (
      lowerTech.includes('docker') ||
      lowerTech.includes('aws') ||
      lowerTech.includes('jenkins') ||
      lowerTech.includes('github') ||
      lowerTech.includes('git')
    ) {
      groups['DevOps & Tools'].push(tech);
    } else {
      groups['Other'].push(tech);
    }
  });

  // Filter out empty groups
  return Object.entries(groups).filter(([_, techs]) => techs.length > 0);
};

export function ProjectModal() {
  const { openedProject: project, closeProjectModal } = useProjectModal();
  if (!project) return null;

  const primaryTechGroups = groupTechnologies(
    project.techSkillsUsed.map(tech => tech.name),
  );
  const exposedTechGroups = groupTechnologies(
    project.techSkillsExposed.map(tech => tech.name),
  );

  return (
    <Dialog open onOpenChange={closeProjectModal}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="sticky top-0 z-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h2>
            </div>
            <div className="flex items-center gap-1">
              <Link href={`/projects/${project.id}`}>
                <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Maximize2 className="h-5 w-5" />
                </button>
              </Link>
              <button
                onClick={closeProjectModal}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Project Summary */}
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.links.live && (
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
                  asChild>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Live Site
                  </a>
                </Button>
              )}
              {project.links.github &&
                project.links.github !== 'Private Repository' && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="cursor-pointer bg-transparent"
                    asChild>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-2" />
                      GitHub
                    </a>
                  </Button>
                )}
            </div>
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              width={600}
              height={300}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>

            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3 flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                Primary Technologies
              </h4>
              <div className="space-y-3">
                {primaryTechGroups.map(([groupName, techs]) => (
                  <div key={groupName}>
                    <h5 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                      {groupName}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {techs.map(tech => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="px-2 py-1 text-xs">
                          {techIcons[tech as keyof typeof techIcons] && (
                            <span className="mr-1">
                              {techIcons[tech as keyof typeof techIcons]}
                            </span>
                          )}
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-3 flex items-center">
                <Users className="h-4 w-4 text-blue-600 mr-2" />
                Technologies Worked With
              </h4>
              <div className="space-y-3">
                {exposedTechGroups.map(([groupName, techs]) => (
                  <div key={groupName}>
                    <h5 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                      {groupName}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {techs.map(tech => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="px-2 py-1 text-xs">
                          {techIcons[tech as keyof typeof techIcons] && (
                            <span className="mr-1">
                              {techIcons[tech as keyof typeof techIcons]}
                            </span>
                          )}
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
            <Card className="border-0 shadow-sm bg-gray-50/50 dark:bg-gray-800/50">
              <CardContent className="pt-4">
                <div className="prose max-w-none">
                  {project.detailedExplanation
                    .split('\n\n')
                    .map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
            <div className="grid gap-3">
              {project.features.slice(0, 4).map((feature, index) => (
                <Card
                  key={index}
                  className={`${feature.myContribution ? 'border-blue-200 bg-blue-50/50' : ''} border shadow-sm`}>
                  <CardContent className="pt-3 pb-3">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-medium">{feature.name}</h4>
                      {feature.myContribution && (
                        <Badge className="bg-blue-500 text-white text-xs">
                          My Contribution
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Challenge */}
          {project.troubleshoots.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Challenge</h3>
              <Card className="border-0 shadow-sm bg-yellow-50/50 dark:bg-yellow-900/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center">
                    <Lightbulb className="h-4 w-4 text-yellow-500 mr-2" />
                    {project.troubleshoots[0].title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1">
                      Challenge:
                    </h4>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      {project.troubleshoots[0].problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1">
                      Solution:
                    </h4>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      {project.troubleshoots[0].solution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
