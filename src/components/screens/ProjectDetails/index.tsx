import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Lightbulb,
  Code2,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';
import { Project } from '@/types/project';

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

// Technology grouping function
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

interface Props {
  project: Project;
}

export default function ProjectDetailsScreen({ project }: Props) {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <Code2 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.links.live && (
              <Button
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
                asChild>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live Project
                </a>
              </Button>
            )}

            {project.links.github &&
              project.links.github === 'Private Repository' && (
                <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                  <span>Source code not available (Company project)</span>
                </div>
              )}
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Tech Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Technologies Used
          </h2>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              Primary Technologies
            </h3>
            <div className="space-y-4">
              {groupTechnologies(project.techSkillsUsed).map(
                ([groupName, techs]) => (
                  <div key={groupName}>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      {groupName}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {techs.map(tech => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="px-3 py-1 text-sm">
                          {techIcons[tech as keyof typeof techIcons] && (
                            <span className="mr-2">
                              {techIcons[tech as keyof typeof techIcons]}
                            </span>
                          )}
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Users className="h-5 w-5 text-blue-600 mr-2" />
              Technologies Worked With
            </h3>
            <div className="space-y-4">
              {groupTechnologies(project.techSkillsExposed).map(
                ([groupName, techs]) => (
                  <div key={groupName}>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      {groupName}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {techs.map(tech => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="px-3 py-1 text-sm">
                          {techIcons[tech as keyof typeof techIcons] && (
                            <span className="mr-2">
                              {techIcons[tech as keyof typeof techIcons]}
                            </span>
                          )}
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Detailed Explanation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Project Overview & My Contributions
          </h2>
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="prose max-w-none">
                {project.detailedExplanation
                  .split('\n\n')
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
              </div>
            </CardContent>
          </Card>
        </section>

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
}
