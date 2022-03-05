import React from 'react';
import Section from '../../partials/Section/Section';
import './greeting.scss';
import {useGreeting} from './useGreeting';

const Greeting = () => {
  const {greetingMessage1, greetingMessage2} = useGreeting();
  return (
    <Section className="greeting no-drag">
      <h2 className="greeting__message greeting__message-1">
        {greetingMessage1}
      </h2>
      <h3 className="greeting__message greeting__message-2">
        &nbsp;{greetingMessage2}
      </h3>
    </Section>
  );
};

export default Greeting;
