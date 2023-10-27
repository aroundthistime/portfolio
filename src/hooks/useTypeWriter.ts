import { useEffect, useState } from 'react';

/**
 * Hook for simulating typewriter effect with given string(s).
 * If given input is an array of string, the typing would start based on the order inside the array
 * @param {string | string[]} inputStr String(s) that you want to add typewriting effect
 */
const useTypeWriter = (inputStr: string | string[]) => {
  // Partial of fullString below
  const [typingResult, setTypingResult] = useState<string>('');
  // Change parameter to one long string for processing
  const fullString =
    typeof inputStr === 'string' ? inputStr : inputStr.join('');

  // Interval the typewriter would type a new letter (in milliseconds)
  const TYPEWRITE_SPEED = 100;

  /**
   * Type the next letter unless typing is done
   */
  const typeWrite = () => {
    if (typingResult.length >= fullString.length) return;

    setTypingResult(prev => prev + fullString[prev.length]);
  };

  /**
   * Convert the one long string used for internal processing to the parameter of the format
   * @returns {string | string[]} If the given parameter is a string, string is returned. Otherwise, an array of string.
   */
  const convertResultToInputFormat = () => {
    if (typeof inputStr === 'string') {
      return typingResult;
    }
    const result = [];
    let remaining: string = typingResult;

    inputStr.forEach(subString => {
      if (remaining.startsWith(subString)) {
        result.push(remaining.slice(0, subString.length));
      } else {
        result.push(remaining);
      }
      remaining = remaining.slice(subString.length);
    });

    return result;
  };

  /**
   * Delete all the letters and start typing from the beginning
   */
  const restartTypeWriting = () => {
    setTypingResult('');
  };

  useEffect(() => {
    setTimeout(() => {
      typeWrite();
    }, TYPEWRITE_SPEED);
  }, [typingResult]);

  return {
    typingResult: convertResultToInputFormat(),
    restartTypeWriting,
  };
};

export default useTypeWriter;
