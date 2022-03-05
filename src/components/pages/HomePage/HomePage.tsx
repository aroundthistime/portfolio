import React from 'react';
import SocialLinks from '../../partials/SocialLinks/SocialLinks';
import Skills from '../../partials/Skills/Skills';
import './homePage.scss';
import Projects from '../../partials/Projects/Projects';

function HomePage() {
  return (
    <main className="home">
      <SocialLinks />
      <Skills />
      <Projects />
    </main>
  );
}

export default HomePage;
