import { Project } from '../Project';

/**
 * Dto containing brief version of information about certain project
 */
export interface ProjectBriefDto
  extends Pick<Project, 'title' | 'uuid' | 'logo'> {
  brief: Project['summary']['brief'];
}
