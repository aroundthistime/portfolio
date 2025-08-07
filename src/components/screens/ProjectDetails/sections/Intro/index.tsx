import { Button } from '@/components/ui/button';
import { Project } from '@/types/project';
import { Code2, ExternalLink } from 'lucide-react';
import Image from 'next/image';

interface Props {
  project: Project;
}

const IntroSection = ({ project }: Props) => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={project.iconUrl}
          alt={`${project.title} logo`}
          width={64}
          height={64}
          className="w-16 h-16 rounded-xl shadow-lg"
        />
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
          src={project.image}
          alt={project.title}
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default IntroSection;
