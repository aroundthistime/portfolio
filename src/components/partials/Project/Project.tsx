import React from 'react';
import {ProjectType} from '../../../@types/projectType';
import './project.scss';

type Props = {
  project: ProjectType;
};

const Project = ({project}: Props) => (
  <li className="projects__project">{project.title}</li>
);

export default Project;
