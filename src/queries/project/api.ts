import axios from 'axios';
import { useRouter } from 'next/router';
import { ProjectBriefDto } from '@/types/dto/ProjectDto';

/**
 * Get list of brief project information from server
 */
export const getProjects = async (
  locale: string,
): Promise<ProjectBriefDto[]> => {
  // Temp approach for sending locale value to next.js built in api
  const data = await axios.get('/api/project/brief', {
    headers: {
      'Accept-Language': locale,
    },
  });
  const {
    data: { projects },
  } = data;

  return projects;
};
