import React from 'react';
import Loader from '../Loader/Loader';
import Project from '../Project/Project';
import ProjectFilterers from '../ProjectFilterers/ProjectFilterers';
import Section from '../Section/Section';
import './projects.scss';
import {useProjects} from './useProjects';

const Projects = () => {
  const {loading, projects, filterers} = useProjects();
  return (
    <Section>
      <Section.Title>
        Projects
        <ProjectFilterers filterers={filterers} />
      </Section.Title>
      <Section.Content>
        {loading ? (
          <Loader />
        ) : (
          <ul className="projects">
            {projects.map(project => (
              <Project project={project} key={project.title} />
            ))}
          </ul>
        )}
      </Section.Content>
    </Section>
  );
};

export default Projects;
