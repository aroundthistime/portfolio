import MainSection from './MainSection';
import { useEffect, useRef, useState } from 'react';
import { getDeviceInfo } from '@/utils/device';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { ProjectModal } from '@/components/project-modal';
import { Badge } from '@/components/ui/badge';
import { PROJECTS_DB } from '@/constants/contentDB/projects';

const BRIEF_PROJECTS = Object.entries(PROJECTS_DB).map(([id, project]) => ({
  id,
  title: project.title,
  summary: project.summary,
  image: project.image,
  mainSkills: project.techSkillsUsed
    .filter(skill => skill.isMain)
    .map(skill => skill.name),
}));

const ProjectsSection = () => {
  // Remove the current skill highlighting logic and replace with tag highlighting
  const [highlightedTags, setHighlightedTags] = useState<{
    projectId: string;
    tags: string[];
  }>({
    projectId: '',
    tags: [],
  });
  const highlightIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const deviceInfo = getDeviceInfo();

  const handleProjectClick = (projectId: string) => {
    if (deviceInfo?.isMobile) {
      window.location.href = `/projects/${projectId}`;
    } else {
      setSelectedProject(projectId);
    }
  };

  // Tag highlighting functions
  const startTagHighlighting = (projectId: string, tags: string[]) => {
    let currentIndex = 0;

    const highlightNext = () => {
      if (currentIndex < tags.length) {
        setHighlightedTags({ projectId, tags: [tags[currentIndex]] });
        currentIndex++;
      } else {
        currentIndex = 0;
        setHighlightedTags({ projectId, tags: [tags[currentIndex]] });
        currentIndex++;
      }
    };

    highlightNext(); // Start immediately
    highlightIntervalRef.current = setInterval(highlightNext, 800);
  };

  const stopTagHighlighting = () => {
    if (highlightIntervalRef.current) {
      clearInterval(highlightIntervalRef.current);
      highlightIntervalRef.current = null;
    }
    setHighlightedTags({ projectId: '', tags: [] });
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (highlightIntervalRef.current) {
        clearInterval(highlightIntervalRef.current);
      }
    };
  }, []);

  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <>
      <MainSection id="projects" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {BRIEF_PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
                onMouseEnter={() =>
                  startTagHighlighting(project.id, project.mainSkills)
                }
                onMouseLeave={stopTagHighlighting}>
                <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer">
                  <div className="relative overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}>
                      <Image
                        src={project.image || '/placeholder.svg'}
                        alt={project.title}
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
                      {project.mainSkills.map(skill => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className={`text-xs border-purple-200 dark:border-purple-700 transition-all duration-300 ${
                            highlightedTags.projectId === project.id &&
                            highlightedTags.tags.includes(skill)
                              ? 'bg-purple-100 border-purple-400 text-purple-700 dark:bg-purple-900/40 dark:border-purple-500 dark:text-purple-300 shadow-md transform scale-110'
                              : 'hover:bg-purple-50 dark:hover:bg-purple-900/20'
                          }`}>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div
                      onClick={() => handleProjectClick(project.id)}
                      className="cursor-pointer">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 border-0 shadow-lg group/btn cursor-pointer">
                        View Project Details
                        <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </MainSection>
      <ProjectModal
        projectId={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default ProjectsSection;
