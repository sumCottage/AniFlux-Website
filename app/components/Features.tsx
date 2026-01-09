import React from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import BentoCard from "./BentoCard";

export default function Features() {
  return (
    <section className="bg-black py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center">
            Everything you need to <span className="text-blue-500">Flux.</span>
          </h2>
        </Reveal>

        {/* Bento Grid (scales as one) */}
        <motion.div
          whileHover={{ scale: 1.015 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6"
        >
          {/* Card 1 — Large */}
          <BentoCard className="md:col-span-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">
                Smart Synchronization
              </h3>
              <p className="text-neutral-400 mt-2">
                Sync your watchlist automatically with MyAnimeList and Anilist
                in real-time.
              </p>
            </div>

            <div className="mt-8 w-full h-32 bg-neutral-800/50 rounded-lg border border-neutral-700 flex items-center justify-center">
              <span className="text-xs font-mono text-green-400">
                STATUS: SYNCED ✅
              </span>
            </div>
          </BentoCard>

          {/* Card 2 — Tall (FIXED MOBILE POSITION) */}
          <BentoCard className="md:row-span-2 bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col">
            <h3 className="text-2xl font-semibold text-white">Mobile Native</h3>
            <p className="text-neutral-400 mt-2">
              Offline downloads for watching on the go.
            </p>

            {/* Phone pinned to bottom */}
            <div className="mt-auto flex justify-center pt-10">
              <div className="w-40 h-80 bg-neutral-800 border-[8px] border-neutral-700 rounded-[30px] overflow-hidden">
                <div className="w-full h-full bg-blue-900/20 grid place-items-center text-xs text-blue-300 text-center">
                  Ep. 1044 <br /> Downloading...
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Card 3 */}
          <BentoCard className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-white">
              Ad-Block Built-in
            </h3>
            <p className="text-neutral-400 text-sm mt-2">Zero interruptions.</p>
          </BentoCard>

          {/* Card 4 */}
          <BentoCard className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-white">4K Streaming</h3>
            <p className="text-neutral-400 text-sm mt-2">
              Crystal clear quality.
            </p>
          </BentoCard>
        </motion.div>
      </div>
    </section>
  );
}
