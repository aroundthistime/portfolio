'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Maximize2, X } from 'lucide-react';
import Link from 'next/link';
import { useProjectModal } from './context';
import ProjectDetailsScreen from '@/components/screens/ProjectDetails';

export function ProjectModal() {
  const { openedProject: project, closeProjectModal } = useProjectModal();
  if (!project) return null;

  return (
    <Dialog open onOpenChange={closeProjectModal}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="sticky top-0 z-10 flex items-center justify-end gap-1 border-b border-gray-200 bg-white/95 px-6 py-4 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/95">
          <Link href={`/projects/${project.id}`}>
            <button className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
              <Maximize2 className="h-5 w-5" />
            </button>
          </Link>
          <button
            onClick={closeProjectModal}
            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6">
          <ProjectDetailsScreen project={project} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
