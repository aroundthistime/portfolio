import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../modules/root';
import {ProjectFiltererType} from '../../partials/Projects/useProjects';
import './projectFilterer.scss';

type Props = {
  filterer: ProjectFiltererType;
};

const ProjectFilterer = ({filterer}: Props) => {
  const currentFilterMethod = useSelector(
    (state: RootState) => state.projectFilterMethod,
  );
  const isSelected = filterer.method === currentFilterMethod;
  return (
    <li className={`project-filterer ${isSelected ? 'selected' : ''}`}>
      <button
        className="project-filterer__button"
        onClick={filterer.use}
        type="button">
        {filterer.method}
      </button>
    </li>
  );
};

export default ProjectFilterer;
