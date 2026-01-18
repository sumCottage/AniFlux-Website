"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import googlePlayIcon from "../assets/google_play.png";
import githubLogo from "../assets/GitHub_Invertocat_Black.png";

export default function DownloadSection() {
    return (
        <div className="bg-black py-32 px-4 border-t border-neutral-900 relative overflow-hidden flex flex-col items-center justify-center text-center">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8"
                >
                    Ready to flux?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-neutral-400 text-lg mb-12 max-w-2xl mx-auto"
                >
                    Join the new wave of anime fans upgrading their tracking experience.
                    <br />Free, open-source, and privacy-focused.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-4"
                >
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a 
                            href="#" 
                            className="px-8 py-4 bg-neutral-900 text-white border border-neutral-800 font-bold rounded-full transition-transform flex items-center gap-3 opacity-50 cursor-not-allowed"
                        >
                            <Image src={googlePlayIcon} alt="Google Play" width={20} height={20} />
                            Google Play
                        </a>
                        <a 
                            href="https://github.com/som120/AniFlux/releases" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-neutral-900 text-white border border-neutral-800 font-bold rounded-full hover:bg-neutral-800 hover:scale-105 transition-transform flex items-center gap-3"
                        >
                            <Image src={githubLogo} alt="GitHub" width={20} height={20} className="invert" />
                            Download APK
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
