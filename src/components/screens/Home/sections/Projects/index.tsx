import MainSection from '../MainSection';
import { motion } from 'framer-motion';
import { ProjectModal } from '@/components/project-modal';
import { PROJECTS_DB } from '@/constants/contentDB/projects';
import ProjectCard from './ProjectCard';
import { ProjectModalProvider } from './context';

const ProjectsSection = () => {
  return (
    <ProjectModalProvider>
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
            {PROJECTS_DB.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </MainSection>
      <ProjectModal />
    </ProjectModalProvider>
  );
};

export default ProjectsSection;
