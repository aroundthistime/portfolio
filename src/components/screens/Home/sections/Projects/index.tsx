import MainSection from '../MainSection';
import { useState } from 'react';
import { getDeviceInfo } from '@/utils/device';
import { motion } from 'framer-motion';
import { ProjectModal } from '@/components/project-modal';
import { PROJECTS_DB } from '@/constants/contentDB/projects';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const deviceInfo = getDeviceInfo();

  const handleProjectClick = (projectId: string) => {
    if (deviceInfo?.isMobile) {
      window.location.href = `/projects/${projectId}`;
    } else {
      setSelectedProject(projectId);
    }
  };

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
            {Object.entries(PROJECTS_DB).map(([projectId, project], index) => (
              <ProjectCard
                key={projectId}
                project={project}
                index={index}
                onProjectClick={() => handleProjectClick(projectId)}
              />
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
