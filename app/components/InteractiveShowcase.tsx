"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "track",
    label: "Smart Tracking",
    description:
      "Never forget which episode you watched. We auto-update your lists.",
    color: "bg-blue-500",
    mockContent: (
      <div className="w-full h-full bg-neutral-900 rounded-xl border border-neutral-800 p-6 flex flex-col gap-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-xl">
            📺
          </div>
          <div>
            <div className="h-4 w-32 bg-neutral-700 rounded mb-2"></div>
            <div className="h-3 w-20 bg-neutral-800 rounded"></div>
          </div>
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex justify-between items-center p-3 bg-neutral-800/50 rounded-lg"
            >
              <span className="text-neutral-400 text-sm">Episode {10 + i}</span>
              <span className="text-blue-400 text-xs font-mono">WATCHED</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "ai",
    label: "AI Recommendations",
    description:
      "Finished One Piece? Our AI knows exactly what you should watch next.",
    color: "bg-purple-500",
    mockContent: (
      <div className="w-full h-full bg-neutral-900 rounded-xl border border-neutral-800 p-6 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-500/10 blur-[60px]"></div>
        <div className="text-center relative z-10">
          <div className="text-6xl mb-4">🤖</div>
          <h4 className="text-white text-lg font-bold">Matching... 98%</h4>
          <p className="text-purple-300 mt-2">
            Recommended: <br /> "Jujutsu Kaisen"
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "social",
    label: "Friends Activity",
    description: "See what your friends are binging in real-time.",
    color: "bg-pink-500",
    mockContent: (
      <div className="w-full h-full bg-neutral-900 rounded-xl border border-neutral-800 p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-neutral-400 text-sm">3 Friends Online</span>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="text-xs text-neutral-500">
              <span className="text-white">Alex</span> is watching{" "}
              <span className="text-pink-400">Naruto Ep. 5</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="text-xs text-neutral-500">
              <span className="text-white">Sam</span> finished{" "}
              <span className="text-pink-400">Bleach</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function InteractiveShowcase() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-black py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: Text & Tabs */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Built for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Otaku Elite.
              </span>
            </h2>
            <p className="text-neutral-400 mb-10 text-lg">
              Stop using spreadsheets. Experience the fluid way to track your
              anime journey.
            </p>

            <div className="space-y-4">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                    activeTab.id === tab.id
                      ? "bg-neutral-900 border-neutral-700"
                      : "bg-transparent border-transparent hover:bg-neutral-900/50"
                  }`}
                >
                  <h3
                    className={`text-lg font-semibold ${
                      activeTab.id === tab.id
                        ? "text-white"
                        : "text-neutral-500"
                    }`}
                  >
                    {tab.label}
                  </h3>
                  {activeTab.id === tab.id && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="text-neutral-400 text-sm mt-2"
                    >
                      {tab.description}
                    </motion.p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Display */}
          <div className="h-[400px] w-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                {/* This creates the "Glow" behind the card based on the active color */}
                <div
                  className={`absolute inset-0 ${activeTab.color} blur-[100px] opacity-20`}
                ></div>

                {/* The actual Card */}
                <div className="relative z-10 w-full h-full bg-black/80 backdrop-blur-xl border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Mac OS Window Dots decoration */}
                  <div className="h-8 bg-neutral-900/50 border-b border-neutral-800 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 h-[calc(100%-2rem)]">
                    {activeTab.mockContent}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
