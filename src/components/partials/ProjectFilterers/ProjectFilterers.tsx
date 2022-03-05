import React from 'react';
import ProjectFilterer from '../../atoms/ProjectFilterer/ProjectFilterer';
import {ProjectFiltererType} from '../Projects/useProjects';
import './projectFilterers.scss';

type Props = {
  filterers: ProjectFiltererType[];
};

const ProjectFilterers = ({filterers}: Props) => (
  <ul className="project-filterers">
    {filterers.map(filterer => (
      <ProjectFilterer filterer={filterer} key={filterer.method} />
    ))}
  </ul>
);

export default ProjectFilterers;
