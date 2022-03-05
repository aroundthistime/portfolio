import {useEffect, useState} from 'react';

type ReturnType = {
  greetingMessage1: string;
  greetingMessage2: string;
};

const TYPEWRITE_SPEED = 100;

export const useGreeting = (): ReturnType => {
  const fullGreetingMessage1 = 'Bienvenue,';
  const fullGreetingMessage2 = 'I am Donghwan Yu';
  const [greetingMessage1, setGreetingMessage1] = useState<string>(
    fullGreetingMessage1[0],
  );
  const [greetingMessage2, setGreetingMessage2] = useState<string>('');

  const typeWriter = () => {
    if (greetingMessage1.length < fullGreetingMessage1.length) {
      setGreetingMessage1(prev => prev + fullGreetingMessage1[prev.length]);
    } else if (greetingMessage2.length < fullGreetingMessage2.length) {
      setGreetingMessage2(prev => prev + fullGreetingMessage2[prev.length]);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      typeWriter();
    }, TYPEWRITE_SPEED);
  }, [greetingMessage1, greetingMessage2]);

  return {
    greetingMessage1,
    greetingMessage2,
  };
};
