import React from 'react';
import Section from '../../partials/Section/Section';
import SocialLinks from '../../partials/SocialLinks/SocialLinks';
import Skills from '../../partials/Skills/Skills';
import './homePage.scss';

function HomePage() {
  return (
    <main className="home">
      <Skills />
      <SocialLinks />
    </main>
  );
}

export default HomePage;
