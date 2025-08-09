import { notFound } from 'next/navigation';
import { PROJECTS_DB } from '@/constants/contentDB/projects';
import ProjectDetailsScreen from '@/components/screens/ProjectDetails';
import { Header } from '@/components/layout/Header';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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

  return (
    <>
      <Header />
      <ProjectDetailsScreen project={project} />
      <footer className="flex justify-center pt-8 pb-16">
        <Link href="/" className="cursor-pointer">
          <Button size="lg">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
      </footer>
    </>
  );
}
