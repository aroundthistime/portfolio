import { notFound } from 'next/navigation';
import { PROJECTS_DB } from '@/constants/contentDB/projects';
import ProjectDetailsScreen from '@/components/screens/ProjectDetails';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetail({ params }: PageProps) {
  const project = PROJECTS_DB.find(project => project.id === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsScreen project={project} />;
}
