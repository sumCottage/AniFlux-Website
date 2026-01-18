"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface Props {
  content: string;
  highlightWords?: string[];
}

// Words to highlight in blue
const defaultHighlightWords = [
  "Perfected.",
  "sync",
  "progress,",
  "seasonal",
  "hits,",
  "collection",
  "UI",
];

export default function ScrollText({ content, highlightWords = defaultHighlightWords }: Props) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = content.split(" ");

  // Check if a word should be highlighted (case-insensitive, handles punctuation)
  const shouldHighlight = (word: string) => {
    const cleanWord = word.toLowerCase();
    return highlightWords.some(hw => cleanWord.includes(hw.toLowerCase()));
  };

  return (
    <p
      ref={container}
      className="flex flex-wrap text-4xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto p-10"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const isHighlighted = shouldHighlight(word);
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress} highlight={isHighlighted}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({
  children,
  range,
  progress,
  highlight,
}: {
  children: string;
  range: [number, number];
  progress: any;
  highlight: boolean;
}) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span className="relative mr-3 mt-3">
      <span className="absolute opacity-10">{children}</span>{" "}
      {/* Shadow text */}
      <motion.span 
        style={{ opacity: opacity }} 
        className={highlight ? "text-blue-500" : "text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};
