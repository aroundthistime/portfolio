import React from 'react';
import SocialLinks from '../../partials/SocialLinks/SocialLinks';
import Skills from '../../partials/Skills/Skills';
import Projects from '../../partials/Projects/Projects';
import Greeting from '../../atoms/Greeting/Greeting';

function HomePage() {
  return (
    <main className="home">
      <Greeting />
      <SocialLinks />
      <Skills />
      <Projects />
    </main>
  );
}

export default HomePage;
