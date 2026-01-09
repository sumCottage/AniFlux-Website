"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    user: "OtakuKing",
    text: "Finally an app that syncs with MAL without breaking.",
    avatar: "👑",
  },
  {
    user: "MangaLover99",
    text: "The UI is cleaner than Crunchyroll. Seriously.",
    avatar: "🍥",
  },
  { user: "JJK_Fan", text: "Dark mode by default? 10/10.", avatar: "🤞" },
  {
    user: "SubNotDub",
    text: "Tracking my 500+ anime list was a nightmare until this.",
    avatar: "📜",
  },
  {
    user: "GokuSolos",
    text: "Needs more themes, but the speed is insane.",
    avatar: "🔥",
  },
  {
    user: "StrawHat",
    text: "I can download episodes for my flight? Sold.",
    avatar: "🏴‍☠️",
  },
];

// Duplicate the array to create the "infinite" loop effect
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="bg-black py-20 overflow-hidden relative">
      {/* Fade edges to make it look like it disappears into the void */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-white">Community Love</h2>
      </div>

      <div className="flex">
        <motion.div
          className="flex gap-6"
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedTestimonials.map((t, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] bg-neutral-900/50 border border-neutral-800 p-6 rounded-xl hover:bg-neutral-800 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <span className="text-white font-semibold">{t.user}</span>
              </div>
              <p className="text-neutral-400 text-sm">"{t.text}"</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
