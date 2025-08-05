import { Project } from '@/types/project';
import { createContext, useContext, useState } from 'react';

const projectModalContext = createContext<{
  openedProject: Project | null;
  openProjectModal: (project: Project) => void;
  closeProjectModal: () => void;
} | null>(null);

export const ProjectModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openedProject, setOpenedProject] = useState<Project | null>(null);

  const openProjectModal = (project: Project) => {
    setOpenedProject(project);
  };

  const closeProjectModal = () => {
    setOpenedProject(null);
  };

  return (
    <projectModalContext.Provider
      value={{ openedProject, openProjectModal, closeProjectModal }}>
      {children}
    </projectModalContext.Provider>
  );
};

export const useProjectModal = () => {
  const context = useContext(projectModalContext);

  if (!context) {
    throw new Error(
      'useProjectModal must be used within a ProjectModalProvider',
    );
  }

  return context;
};
