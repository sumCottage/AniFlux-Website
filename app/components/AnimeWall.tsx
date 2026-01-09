"use client";

import React from "react";
import { motion } from "framer-motion";

// I'm using real Anilist/MAL cover images here so it looks good immediately.
// You can replace these with your own local images in /public later.
const animeCovers = [
  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142938-ECF5XF7p945k.jpg", // Chainsaw Man
  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-n1fmjws4WTPH.jpg", // Frieren
  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-m1gX3iwPfK3e.jpg", // Solo Leveling
  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21-YCDuy16jiHMp.jpg", // One Piece
  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140960-Yl5M3AiLjmfr.jpg", // Spy x Family
  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-bbBWj4pEfseh.jpg", // JJK
  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-73IhOXpWZSpO.jpg", // AOT
  "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx269-8M3sPVIiA4wN.jpg", // Bleach
];

export default function AnimeWall() {
  // Duplicate the array to ensure smooth infinite looping
  const duplicatedCovers = [...animeCovers, ...animeCovers];

  return (
    <section className="bg-black py-20 overflow-hidden relative">
      {/* Fade Gradients (The "Fog" on the edges) */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto mb-12 px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Stream <span className="text-blue-500">Everything.</span>
        </h2>
        <p className="text-neutral-400 max-w-xl">
          From seasonal hits to timeless classics. If it exists, AniFlux tracks
          it.
        </p>
      </div>

      {/* The Scrolling Marquee */}
      <div className="flex -rotate-2 scale-105 transform-gpu">
        {" "}
        {/* Slight tilt for style */}
        <motion.div
          className="flex gap-4"
          animate={{ x: "-50%" }}
          transition={{
            duration: 30, // Adjust speed here (lower = faster)
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedCovers.map((src, index) => (
            <div
              key={index}
              className="relative w-[200px] h-[300px] flex-shrink-0 rounded-xl overflow-hidden border border-neutral-800 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 hover:z-10 cursor-pointer group"
            >
              <img
                src={src}
                alt="Anime Cover"
                className="w-full h-full object-cover"
              />
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
