import { useQuery } from '@tanstack/react-query';
import { getProjects } from './api';

/**
 * Query hook for getting a list of brief project information
 */
export const useBriefProjectsQuery = () => {
  return useQuery({
    queryKey: ['projects-brief'],
    queryFn: getProjects,
  });
};
