import React from 'react';
import Section from '../Section/Section';
import './projects.scss';
import {useProjects} from './useProjects';

const Projects = () => {
  const {loading, projects, filterers} = useProjects();
  return (
    <Section>
      <Section.Title>Projects</Section.Title>
      <Section.Content>
        <ul className="projects" />
      </Section.Content>
    </Section>
  );
};

export default Projects;
