import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { getProjects } from './api';

/**
 * Query hook for getting a list of brief project information
 */
export const useBriefProjectsQuery = () => {
  const { locale, defaultLocale } = useRouter();
  return useQuery({
    queryKey: ['projects-brief'],
    queryFn: () => getProjects(locale ?? defaultLocale),
  });
};
