'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/types/project';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useProjectModal } from './context';
import { getDeviceInfo } from '@/utils/device';
import { IMAGE_PLACEHOLDER } from '@/constants/media';
import useIsHovered from '@/hooks/useIsHovered';

interface Props {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: Props) => {
  const [highlightedTag, setHighlightedTag] = useState<string | null>(null);
  const { hoverableElRef, isHovered } = useIsHovered();
  const { openProjectModal } = useProjectModal();
  const deviceInfo = getDeviceInfo();

  const handleClickDetails = () => {
    if (deviceInfo?.isMobile) {
      window.location.href = `/projects/${project.id}`;
    } else {
      openProjectModal(project);
    }
  };

  useEffect(() => {
    setHighlightedTag(null);
    if (!isHovered || !project.tags.length) {
      return;
    }

    let currentIndex = 0;
    const highlightCurrentTag = () => {
      setHighlightedTag(project.tags[currentIndex]);
    };
    highlightCurrentTag();

    const interval = setInterval(() => {
      if (currentIndex < project.tags.length) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      highlightCurrentTag();
    }, 1100);

    return () => {
      clearInterval(interval);
    };
  }, [isHovered, project.tags]);

  return (
    <motion.div
      ref={hoverableElRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group">
      <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer">
        <div className="relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}>
            <Image
              src={project.screenshots.images[0].src}
              alt={project.title}
              placeholder={IMAGE_PLACEHOLDER}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardHeader>
          <CardTitle className="text-xl group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription className="dark:text-gray-300">
            {project.summary}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map(tag => (
              <Badge
                key={tag}
                variant="outline"
                className={`text-xs border-purple-200 dark:border-purple-700 transition-all duration-300 ${
                  highlightedTag === tag
                    ? 'bg-purple-100 border-purple-400 text-purple-700 dark:bg-purple-900/40 dark:border-purple-500 dark:text-purple-300 shadow-md transform scale-110'
                    : 'hover:bg-purple-50 dark:hover:bg-purple-900/20'
                }`}>
                {tag}
              </Badge>
            ))}
          </div>
          <div onClick={handleClickDetails} className="cursor-pointer">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 border-0 shadow-lg group/btn cursor-pointer">
              View Project Details
              <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
