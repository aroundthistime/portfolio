import { useEffect, useState } from 'react';

const useTypeWriter = (fullString: string) => {
  const [typingResult, setTypingResult] = useState('');

  const TYPEWRITE_SPEED = 100;

  const typeWrite = () => {
    if (typingResult.length >= fullString.length) return;

    setTypingResult(prev => prev + fullString[prev.length]);
  };

  const restartTypeWriting = () => {
    setTypingResult('');
  };

  useEffect(() => {
    setTimeout(() => {
      typeWrite();
    }, TYPEWRITE_SPEED);
  }, [typingResult]);

  return {
    typingResult,
    restartTypeWriting,
  };
};

export default useTypeWriter;
