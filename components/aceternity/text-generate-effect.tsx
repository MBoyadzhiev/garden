"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  duration?: number;
  delay?: number;
}

export const TextGenerateEffect: React.FC<TextGenerateEffectProps> = ({
  words,
  className = "",
  duration = 0.05,
  delay = 0.1,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + words[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, duration * 1000);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, words, duration]);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {displayedText}
      {currentIndex < words.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-4 bg-current ml-1"
        />
      )}
    </motion.div>
  );
};
