import { Button } from '@/components/ui/button';
import { Project } from '@/types/project';
import { Apple, ExternalLink, Github } from 'lucide-react';
import PlayStoreIcon from '@/assets/images/icons/playstore.svg';
import Image from 'next/image';

interface Props {
  project: Project;
}

const IntroSection = ({ project }: Props) => {
  return (
    <div className="mb-12">
      <div className="flex flex-col items-center md:flex-row gap-3 md:gap-4 mb-4">
        <Image
          src={project.iconUrl}
          alt={`${project.title} logo`}
          width={64}
          height={64}
          className="w-16 h-16 rounded-xl shadow-lg flex-shrink-0"
        />
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h1>
        </div>
      </div>
      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 text-center md:text-left">
        {project.summary}
      </p>
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-6 md:mb-8">
        {project.links.live && (
          <Button
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 cursor-pointer text-white w-full sm:w-auto"
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
        {project.links.appStore && (
          <Button
            variant="outline"
            asChild
            className="cursor-pointer bg-transparent w-full sm:w-auto">
            <a
              href={project.links.appStore}
              target="_blank"
              rel="noopener noreferrer">
              <Apple className="h-4 w-4 mr-2" />
              App Store
            </a>
          </Button>
        )}
        {project.links.playStore && (
          <Button
            variant="outline"
            asChild
            className="cursor-pointer bg-transparent w-full sm:w-auto">
            <a
              href={project.links.playStore}
              target="_blank"
              rel="noopener noreferrer">
              <PlayStoreIcon className="h-4 w-4 mr-2" />
              Play Store
            </a>
          </Button>
        )}
        {project.links.github ? (
          <Button
            variant="outline"
            asChild
            className="cursor-pointer bg-transparent w-full sm:w-auto">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </a>
          </Button>
        ) : (
          <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start">
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
