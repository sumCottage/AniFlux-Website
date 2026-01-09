"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface Props {
  content: string;
}

export default function ScrollText({ content }: Props) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"], // Text starts highlighting when it hits bottom 90% of screen
  });

  const words = content.split(" ");

  return (
    <p
      ref={container}
      className="flex flex-wrap text-4xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto p-10"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} range={[start, end]} progress={scrollYProgress}>
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
}: {
  children: string;
  range: [number, number];
  progress: any;
}) => {
  const opacity = useTransform(progress, range, [0.1, 1]); // 0.1 is the dimmed opacity
  return (
    <span className="relative mr-3 mt-3">
      <span className="absolute opacity-10">{children}</span>{" "}
      {/* Shadow text */}
      <motion.span style={{ opacity: opacity }} className="text-white">
        {children}
      </motion.span>
    </span>
  );
};
