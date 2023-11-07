import axios from 'axios';
import { ProjectBriefDto } from '@/types/dto/ProjectDto';

/**
 * Get list of brief project information from server
 */
export const getProjects = async (): Promise<ProjectBriefDto[]> => {
  const data = await axios.get('/api/project/brief');
  const {
    data: { projects },
  } = data;

  return projects;
};
