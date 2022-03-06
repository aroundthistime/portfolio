import React from 'react';
import SocialLinks from '../../partials/SocialLinks/SocialLinks';
import Skills from '../../partials/Skills/Skills';
import Projects from '../../partials/Projects/Projects';
import Greeting from '../../atoms/Greeting/Greeting';
import ErrorBoundary from '../../wrapper/ErrorBoundary';

function HomePage() {
  return (
    <main className="home">
      <Greeting />
      <SocialLinks />
      <Skills />
      <ErrorBoundary>
        <Projects />
      </ErrorBoundary>
    </main>
  );
}

export default HomePage;
