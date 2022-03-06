import {collection, getDocs, orderBy, query} from 'firebase/firestore';
import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ProjectType} from '../../../@types/projectType';
import {firestore} from '../../../firebase';
import {
  changeFilterMethod,
  ProjectFilterMethodType,
  PROJECT_FILTER_METHODS,
} from '../../../modules/projectFilterMethod';
import {RootState} from '../../../modules/root';
import {isPersonalProject} from '../../../utils/projectHandlers';

type ReturnType = {
  loading: boolean;
  projects: ProjectType[];
  filterers: ProjectFiltererType[];
};

export type ProjectFiltererType = {
  method: ProjectFilterMethodType;
  use: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const useProjects = (): ReturnType => {
  const [loading, setLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const filterMethod = useSelector(
    (state: RootState) => state.projectFilterMethod,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const fetchedProjects: ProjectType[] = [];
    const q = query(collection(firestore, 'project'), orderBy('priority'));
    const docs = await getDocs(q);
    docs.forEach(doc => {
      const project = {
        id: doc.id,
        ...doc.data(),
      } as ProjectType;
      fetchedProjects.push(project);
    });
    setProjects(fetchedProjects);
    setLoading(false);
  };

  const filterProjects = () => {
    if (filterMethod === 'all') {
      return projects;
    }
    if (filterMethod === 'personal') {
      return projects.filter(project => isPersonalProject(project));
    }
    return projects.filter(project => !isPersonalProject(project));
  };

  const filteredProjects = useMemo(
    () => filterProjects(),
    [projects, filterMethod],
  );

  const filterers = useMemo(() => {
    return PROJECT_FILTER_METHODS.map((method: ProjectFilterMethodType) => {
      return {
        method,
        use: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          dispatch(changeFilterMethod(method)),
      };
    });
  }, []);

  return {
    loading,
    projects: filteredProjects,
    filterers,
  };
};
