import { Button } from '@/components/ui/button';
import { Project } from '@/types/project';
import { Apple, ExternalLink as ExternalLinkIcon, Github } from 'lucide-react';
import PlayStoreIcon from '@/assets/images/icons/playstore.svg';
import Image from 'next/image';
import { ComponentType } from 'react';
import { getTypedObjectEntries } from '@/types/utils';
import ExternalLink from '@/components/common/ExternalLink';

const PROJECT_LINK_STYLES = {
  live: {
    Icon: ExternalLinkIcon,
    label: 'View Live Project',
    className:
      'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
  },
  appStore: {
    Icon: Apple,
    label: 'App Store',
    className: 'bg-brandColor-appStore hover:bg-brandColor-appStore-hover',
  },
  playStore: {
    Icon: PlayStoreIcon,
    label: 'Play Store',
    className: 'bg-brandColor-playStore hover:bg-brandColor-playStore-hover',
  },
  github: {
    Icon: Github,
    label: 'GitHub',
    className:
      'bg-brandColor-github hover:bg-brandColor-github-hover dark:bg-gray-700 dark:hover:bg-gray-600',
  },
} as const satisfies {
  [key in keyof Project['links']]: {
    Icon: ComponentType<{ className?: string }>;
    label: string;
    className: string;
  };
};

interface Props {
  project: Project;
}

const IntroSection = ({ project }: Props) => {
  return (
    <section>
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
      <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
        {getTypedObjectEntries(project.links).map(([key, link]) => {
          const style = PROJECT_LINK_STYLES[key];

          const { Icon, label, className } = style;

          return (
            <Button
              key={key}
              className={`w-full sm:w-auto cursor-pointer text-white ${className}`}
              asChild>
              <ExternalLink href={link}>
                <Icon className="h-4 w-4 mr-2" />
                {label}
              </ExternalLink>
            </Button>
          );
        })}
      </div>
    </section>
  );
};

export default IntroSection;
