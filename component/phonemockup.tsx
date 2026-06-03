"use client";
import { motion } from "motion/react";
import { useState } from "react";

export default function PhoneMockup() {
    const [active, setActive] = useState<number | null>(null);

    return (
        <div
            onMouseEnter={() => setActive(1)}
            onMouseLeave={() => setActive(null)}
            className="flex items-center justify-center p-10"
        >
            {/* Outer Shell - Scaled to h-40 (160px tall) and w-20 (80px wide) */}
            <div className="relative w-20 h-40 bg-white rounded-2xl border-4 border-neutral-300 shadow-xl overflow-hidden ring-1 ring-neutral-400/20">

                {/* Physical Buttons */}
                <div className="absolute -left-1 top-6 w-0.5 h-3 bg-neutral-400 rounded-l-[1px]" />
                <div className="absolute -left-1 top-10 w-0.5 h-3 bg-neutral-400 rounded-l-[1px]" />
                <div className="absolute -right-1 top-8 w-0.5 h-4 bg-neutral-400 rounded-r-[1px]" />

                {/* Dynamic Island - Pure Black */}
                <div className="absolute top-1 left-0 right-0 flex justify-center z-40">
                    <motion.div
                        initial={{ width: 28, height: 8 }}
                        animate={{ width: active ? 48 : 28, height: active ? 10 : 8 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className="bg-black rounded-full flex items-center justify-between px-1.5 cursor-pointer overflow-hidden"
                    >
                        <div className="w-0.5 h-0.5 shrink-0 bg-neutral-500 rounded-full" />

                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 0.8 }}
                            className="text-[4px] leading-none text-neutral-400 font-medium"
                        >
                            SILENT
                        </motion.span>

                        <div className="w-0.5 h-0.5 shrink-0 bg-neutral-700 rounded-full" />
                    </motion.div>
                </div>

                {/* Screen Content - Neutral Theme */}
                <div className="h-full w-full bg-white p-2 pt-5">
                    <div className="space-y-2">
                        {/* Header */}
                        <header className="space-y-px">
                            <h2 className="text-[10px] font-light text-neutral-900 tracking-tight leading-none">Portfolio</h2>
                            <p className="text-[4px] text-neutral-400 uppercase tracking-widest font-semibold leading-none">Selected Works</p>
                        </header>

                        {/* Featured Neutral Card */}
                        <div className="bg-neutral-900 h-12 rounded-lg p-1.5 shadow-sm flex flex-col justify-between">
                            <div className="flex justify-between items-start">
                                <div className="w-3 h-3 rounded-full border border-neutral-700 flex items-center justify-center">
                                    <div className="w-0.5 h-0.5 bg-white rounded-full" />
                                </div>
                                <div className="px-1 py-px bg-neutral-800 rounded text-[4px] text-neutral-400 font-mono">2026.04</div>
                            </div>
                            <div>
                                <p className="text-white text-[6px] font-medium leading-tight">Minimalism in Design</p>
                                <p className="text-neutral-500 text-[4px] leading-tight mt-px">Exploring negative space.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-neutral-200 rounded-full" />
            </div>
        </div>
    );
}