import React from 'react';
import {ProjectFiltererType} from '../../partials/Projects/useProjects';
import './projectFilterer.scss';

type Props = {
  filterer: ProjectFiltererType;
};

const ProjectFilterer = ({filterer}: Props) => (
  <li className="project-filterer">
    <button
      className="project-filterer__button"
      onClick={filterer.use}
      type="button">
      {filterer.method}
    </button>
  </li>
);

export default ProjectFilterer;
