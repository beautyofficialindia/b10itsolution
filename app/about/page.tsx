"use client"
import Appbar from "@/component/appbar";
import Footer from "@/component/footer";
import { motion } from "motion/react";

export default function Page() {
    return (
        <>
            <Appbar />
            <main className="w-full min-h-screen">
                <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none -z-10"
                    style={{
                        backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
                        backgroundSize: '48px 48px'
                    }}
                />
                <section className="max-w-7xl mx-auto px-4 ">
                    <div className="max-w-5xl mx-auto w-full mt-32 flex flex-col items-center">
                        <div className="mb-10 text-center">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl text-center tracking-tight text-neutral-900 flex flex-wrap items-center justify-center gap-3 md:gap-4 overflow-hidden py-2">

                                <motion.span
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="font-open-sans font-bold text-[#6c63fa]"
                                >
                                    Inspire.
                                </motion.span>

                                <motion.span
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                    className="font-prata italic font-normal text-neutral-800"
                                >
                                    Innovate.
                                </motion.span>

                                <motion.span
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                                    className="font-open-sans font-semibold text-neutral-900 flex items-center gap-1 md:gap-2"
                                >
                                    Transform
                                    {/* SVG Sparkle Icon - adds a tiny rotation/scale pop */}
                                    <motion.svg
                                        initial={{ opacity: 0, scale: 0, rotate: -45 }}
                                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                                        width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        className="text-[#6c63fa] shrink-0 w-6 h-6 md:w-8 md:h-8"
                                    >
                                        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
                                        <path d="M20 18L21 21L24 22L21 23L20 26L19 23L16 22L19 21L20 18Z" fill="currentColor" />
                                    </motion.svg>
                                </motion.span>
                            </h1>

                            {/* Subtext - Fades in last */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="mx-auto max-w-lg text-center text-lg md:text-xl text-neutral-500 mt-2 font-open-sans"
                            >
                                Redefining tomorrow through technology.
                            </motion.p>
                        </div>
                    </div>
                </section>

                <section className="w-full max-w-6xl mx-auto px-4 py-20">
                    <div className="relative w-full rounded-[2.5rem] border border-neutral-200 bg-white p-8 md:p-12 lg:p-20 overflow-hidden shadow-xl">

                        {/* Background Grid Pattern */}
                        <div
                            className="absolute inset-0 opacity-[0.05] pointer-events-none"
                            style={{
                                backgroundImage: `linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)`,
                                backgroundSize: '48px 48px'
                            }}
                        />

                        {/* Outer Glow / Gradient (Softened for white theme) */}
                        <div
                            className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] blur-[120px] opacity-5 rounded-full pointer-events-none bg-[#6c63fa]"
                        />
                        <div
                            className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] blur-[120px] opacity-5 rounded-full pointer-events-none bg-[#6c63fa]"
                        />

                        {/* Grid Layout */}
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                            <div className="flex flex-col justify-center order-1">
                                <h2 className="font-prata font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
                                    Our Mission
                                </h2>
                                <p className="font-open-sans text-neutral-700 text-lg leading-relaxed">
                                    At B10 IT Solution, our mission is to engineer robust digital ecosystems from the ground up.
                                    By blending cutting-edge web and mobile development with scalable cloud architecture, we empower businesses to
                                    transform their foundational ideas into high-performance digital realities that drive sustainable, long-term growth.
                                </p>
                            </div>

                            {/* FIXED: min-h-75 to min-h-[300px] */}
                            <div className="relative min-h-75 w-full rounded-3xl border border-neutral-200 bg-neutral-50 overflow-hidden order-2">
                                <div className="absolute inset-0 flex flex-wrap content-start p-6 gap-x-6 gap-y-4 opacity-30 select-none">
                                    {Array.from({ length: 24 }).map((_, i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className="w-1.5 h-6 bg-[#6c63fa]" />
                                            <span className="font-bold text-sm tracking-wider leading-none bg-[#6c63fa]">
                                                B10 IT<br />SOLUTION
                                            </span>
                                        </div>
                                    ))}
                                </div>
                                {/* FIXED: bg-linear-to-t to bg-gradient-to-t */}
                                <div className="absolute inset-0 bg-linear-to-t from-neutral-100/60 to-transparent"></div>
                            </div>

                            {/* FIXED: min-h-75 to min-h-[300px] */}
                            <div className="relative min-h-75 w-full rounded-3xl border border-neutral-200 bg-neutral-50 overflow-hidden order-4 lg:order-3">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                                    alt="Team collaborating"
                                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-110"
                                />
                                <div className="absolute inset-0 bg-[#6c63fa] mix-blend-multiply opacity-30" />
                            </div>

                            <div className="flex flex-col justify-center order-3 lg:order-4">
                                <h2 className="font-prata font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
                                    Our Vision
                                </h2>
                                <p className="font-open-sans text-neutral-700 text-lg leading-relaxed">
                                    To be the premier catalyst for digital innovation. We envision a future where complex technical
                                    challenges are met with elegant, scalable software architecture. As a trusted development partner,
                                    we specialize in creating tailored, future-proof solutions that set new industry standards and
                                    empower our clients to thrive.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}