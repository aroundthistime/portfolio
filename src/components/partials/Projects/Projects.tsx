import React from 'react';
import Section from '../Section/Section';
import './projects.scss';

const Projects = () => (
  <Section>
    <Section.Title>Projects</Section.Title>
    <Section.Content>
      <ul className="projects" />
    </Section.Content>
  </Section>
);

export default Projects;
