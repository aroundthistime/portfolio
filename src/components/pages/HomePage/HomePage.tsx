import React from 'react';
import SocialLinks from '../../partials/SocialLinks/SocialLinks';
import Skills from '../../partials/Skills/Skills';
import './homePage.scss';

function HomePage() {
  return (
    <main className="home">
      <SocialLinks />
      <Skills />
    </main>
  );
}

export default HomePage;
