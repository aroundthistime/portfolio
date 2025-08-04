import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Props {
  description: string;
  allKeywords: string[];
  highlightDurationMs?: number;
  highlightIntervalMs?: number;
  repeatCount?: number;
}

const KeywordHighlighterText = ({
  description,
  allKeywords,
  highlightDurationMs = 1000,
  highlightIntervalMs = 400,
  repeatCount = 1,
}: Props) => {
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);

  useEffect(() => {
    if (!allKeywords.length || repeatCount === 0) return;

    let currentIndex = 0;
    let highlightCount = 0;
    const maxHighlights = allKeywords.length * repeatCount;
    const cycleTime = highlightDurationMs + highlightIntervalMs;

    // Immediately highlight the first keyword on mount
    setActiveKeyword(allKeywords[currentIndex]);
    highlightCount++;
    currentIndex++;

    const intervalId = setInterval(() => {
      // De-highlight current one to start the pause
      setActiveKeyword(null);

      const timeoutId = setTimeout(() => {
        // Stop if we've reached the repeat count
        if (highlightCount >= maxHighlights) {
          clearInterval(intervalId);
          clearTimeout(timeoutId);
          return;
        }

        setActiveKeyword(allKeywords[currentIndex]);
        highlightCount++;
        currentIndex = (currentIndex + 1) % allKeywords.length;
      }, highlightIntervalMs);

      // This is for cleanup if the component unmounts during the pause
      return () => clearTimeout(timeoutId);
    }, cycleTime);

    return () => {
      setActiveKeyword(null);
      clearInterval(intervalId);
    };
  }, [allKeywords, highlightDurationMs, highlightIntervalMs, repeatCount]);

  if (!allKeywords.length) {
    return <>{description}</>;
  }

  const escapedKeywords = allKeywords.map(k =>
    k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  );
  const regex = new RegExp(`(${escapedKeywords.join('|')})`, 'gi');
  const parts = description.split(regex);

  const highlightPartIndex = activeKeyword
    ? parts.findIndex(
        part => part.toLowerCase() === activeKeyword.toLowerCase(),
      )
    : -1;

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        const isKeyword = allKeywords.some(
          k => k.toLowerCase() === part.toLowerCase(),
        );
        const isHighlighted = i === highlightPartIndex;

        if (isKeyword) {
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

        // For non-keywords, skip wrapping with motion.span for performance reasons
        return part;
      })}
    </>
  );
};

export default KeywordHighlighterText;
