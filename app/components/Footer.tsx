"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full h-[350px] bg-blue-600 overflow-hidden text-white flex flex-col justify-between">
      {/* Download Section */}


      {/* Links Section */}
      <div className="absolute top-8 right-8 md:top-24 md:right-12 flex flex-col items-end gap-2 text-lg md:text-xl font-medium tracking-wide z-20">
        <a href="https://github.com/som120/AniFlux" target="_blank" rel="noopener noreferrer" className="hover:text-black hover:scale-105 transition-all duration-300">
          Github
        </a>
        <a href="/terms-and-conditions" className="hover:text-black hover:scale-105 transition-all duration-300">
          Terms & Conditions
        </a>
        <a href="/privacy-policy" className="hover:text-black hover:scale-105 transition-all duration-300">
          Privacy Policy
        </a>
      </div>

      {/* Big Text Section */}
      <div className="absolute bottom-0 left-0 w-full leading-none pointer-events-none select-none z-10 overflow-hidden h-full flex items-end">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-0 left-0 text-[18vw] font-bold tracking-tighter text-black leading-none"
          style={{ whiteSpace: "nowrap", transform: "translateY(25%)" }}
        >
          AniFlux
        </motion.h1>
      </div>
    </footer>
  );
}
