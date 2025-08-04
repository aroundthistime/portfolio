import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Props {
  description: string;
  allKeywords: string[];
  highlightIntervalMs?: number;
}

const KeywordHighlighterText = ({
  description,
  allKeywords,
  highlightIntervalMs = 1000,
}: Props) => {
  const [highlightedKeywordIndex, setHighlightedKeywordIndex] = useState(0);

  useEffect(() => {
    // reset on props change
    setHighlightedKeywordIndex(0);
  }, [allKeywords]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHighlightedKeywordIndex(prev => (prev + 1) % allKeywords.length);
    }, highlightIntervalMs);
    return () => {
      clearTimeout(intervalId);
    };
  }, [allKeywords, highlightIntervalMs]);

  if (!allKeywords.length) {
    return <>{description}</>;
  }

  const escapedKeywords = allKeywords.map(k =>
    k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  );
  const regex = new RegExp(`(${escapedKeywords.join('|')})`, 'gi');
  const parts = description.split(regex);

  const highlightedKeyword = allKeywords[highlightedKeywordIndex];

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        const isKeyword = allKeywords.some(
          k => k.toLowerCase() === part.toLowerCase(),
        );

        if (isKeyword) {
          const isHighlighted =
            part.toLowerCase() === highlightedKeyword?.toLowerCase();
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
