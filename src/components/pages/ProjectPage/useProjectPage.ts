import {getDoc, doc} from 'firebase/firestore';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {ProjectType} from '../../../@types/projectType';
import {firestore} from '../../../firebase';

type ReturnType = {
  loading: boolean;
  project: ProjectType | undefined;
};

export const useProjectPage = (): ReturnType => {
  const [project, setProject] = useState<ProjectType>();
  const [loading, setLoading] = useState<boolean>(true);
  const params = useParams();
  const navigate = useNavigate();
  const {projectId} = params;

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    try {
      if (!projectId) {
        throw Error;
      }
      const docRef = doc(firestore, 'project', projectId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const fetchedProject = {
          id: docSnap.id,
          ...docSnap.data(),
        } as ProjectType;
        setProject(fetchedProject);
      } else {
        throw Error;
      }
    } catch (error) {
      navigateToErrorPage();
    } finally {
      setLoading(false);
    }
  };

  const navigateToErrorPage = () => {
    navigate('/error-page');
  };

  return {
    loading,
    project,
  };
};
