import {collection, getDocs} from 'firebase/firestore';
import React, {useEffect} from 'react';
import {firestore} from '../../../firebase';
import Section from '../Section/Section';
import './projects.scss';

const Projects = () => {
  const getData = async () => {
    console.log('!');
    const data: any[] = [];
    const snapshot = await getDocs(collection(firestore, 'project'));
    snapshot.forEach(s => data.push(s.data()));
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
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
