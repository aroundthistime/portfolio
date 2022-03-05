import {ProjectType} from '../@types/projectType';

export const isPersonalProject = (project: ProjectType): boolean => {
  return project.summary.participants.count === 1;
};
