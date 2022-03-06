import React from 'react';
import {Link} from 'react-router-dom';
import {ProjectType} from '../../../@types/projectType';
import Card from '../Card/Card';
import './project.scss';

type Props = {
  project: ProjectType;
};

const Project = ({project}: Props) => (
  <li className="projects__project">
    <Link to={`/project/${project.id}`}>
      <Card>
        <Card.Default>
          <img
            src={project.thumbnail}
            className="project__thumbnail"
            alt={project.title}
          />
        </Card.Default>
        <Card.OnHover>{project.title}</Card.OnHover>
      </Card>
    </Link>
  </li>
);

export default Project;
