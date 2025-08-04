import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Props {
  description: string;
  allKeywords: string[];
  highlightDurationMs?: number;
  highlightIntervalMs?: number;
}

const KeywordHighlighterText = ({
  description,
  allKeywords,
  highlightDurationMs = 1000,
  highlightIntervalMs = 400,
}: Props) => {
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);

  useEffect(() => {
    if (!allKeywords.length) return;

    let currentIndex = 0;
    // Immediately highlight the first keyword on mount
    setActiveKeyword(allKeywords[currentIndex]);
    currentIndex++;

    const cycleTime = highlightDurationMs + highlightIntervalMs;

    const intervalId = setInterval(() => {
      // De-highlight current one to start the pause
      setActiveKeyword(null);

      // After the pause, highlight the next one
      const timeoutId = setTimeout(() => {
        setActiveKeyword(allKeywords[currentIndex]);
        currentIndex = (currentIndex + 1) % allKeywords.length;
      }, highlightIntervalMs);

      // This is for cleanup if the component unmounts during the pause
      return () => clearTimeout(timeoutId);
    }, cycleTime);

    return () => {
      setActiveKeyword(null);
      clearInterval(intervalId);
    };
  }, [allKeywords, highlightDurationMs, highlightIntervalMs]);

  if (!allKeywords.length) {
    return <>{description}</>;
  }

  const escapedKeywords = allKeywords.map(k =>
    k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  );
  const regex = new RegExp(`(${escapedKeywords.join('|')})`, 'gi');
  const parts = description.split(regex);

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        const isKeyword = allKeywords.some(
          k => k.toLowerCase() === part.toLowerCase(),
        );

        if (isKeyword) {
          const isHighlighted =
            part.toLowerCase() === activeKeyword?.toLowerCase();
          return (
            <motion.span
              key={i}
              initial={{ fontWeight: 400 }}
              animate={{
                fontWeight: isHighlighted ? 700 : 400,
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}>
              {part}
            </motion.span>
          );
        }
        return part;
      })}
    </>
  );
};

export default KeywordHighlighterText;
