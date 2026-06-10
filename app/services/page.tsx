"use client"
import Appbar from "@/component/appbar";
import Footer from "@/component/footer";
import Marquee from "@/component/marquee";
import { motion } from "motion/react";
import Image from "next/image";

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
                        <div className="mb-10 text-center selection:bg-amber-200 selection:text-amber-900">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl text-center tracking-tight text-neutral-900 font-semibold flex flex-wrap items-center justify-center gap-3 md:gap-4 overflow-hidden py-2">
                                B10 IT Solution <span className="font-open-sans font-bold text-[#6c63fa]">Services</span>
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
                            </h1>

                            
                            <p className="mx-auto max-w-2xl text-center text-lg md:text-xl text-neutral-500 mt-2 font-open-sans"
                            >
                                Discover how B10 IT  services and solutions can help your enterprise turn digital challenges into business success.
                            </p>
                            <div className="mt-5">
                                <Marquee/>
                            </div>
                            
                        </div>
                    </div>
                </section>

                <section className="w-full max-w-6xl mx-auto px-4 py-10 selection:bg-amber-200 selection:text-amber-900">
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
                                    Web Development
                                </h2>
                                <p className="font-open-sans text-neutral-700 text-lg leading-relaxed">
                                    At B10 IT Solution, we approach custom web development not just as a coding task, but as the engineering of a scalable digital ecosystem.
                                    We specialize in architecting bespoke, high-performance web applications tailored to solve your most complex business challenges.
                                </p>
                            </div>

                            {/* FIXED: min-h-75 to min-h-[300px] */}
                            <div className="relative min-h-75 w-full rounded-3xl border border-neutral-200 bg-neutral-50 overflow-hidden order-2">
                                <Image
                                    src="/service1.png"
                                    alt="services"
                                    fill
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                {/* FIXED: bg-linear-to-t to bg-gradient-to-t */}
                                <div className="absolute inset-0 bg-linear-to-t from-neutral-100/60 to-transparent"></div>
                            </div>

                            {/* FIXED: min-h-75 to min-h-[300px] */}
                            <div className="relative min-h-75 w-full rounded-3xl border border-neutral-200 bg-neutral-50 overflow-hidden order-4 lg:order-3">
                                <Image
                                    src="/service2.png"
                                    alt="services"
                                    fill
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-neutral-100/60 to-transparent"></div>
                            </div>

                            <div className="flex flex-col justify-center order-3 lg:order-4">
                                <h2 className="font-prata font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
                                   Mobile App Development
                                </h2>
                                <p className="font-open-sans text-neutral-700 text-lg leading-relaxed">
                                    Your vision, in the palm of their hand. We craft intuitive, high-performance iOS and Android experiences that blend seamless 
                                    functionality with world-class interface design. Our mobile ecosystems are built to engage users and scale effortlessly as your audience grows.
                                </p>
                            </div>
                            <div className="flex flex-col justify-center order-5 lg:order-5">
                                <h2 className="font-prata font-bold text-3xl md:text-4xl text-neutral-900 mb-6">
                                    Custom Software Solutions
                                </h2>
                                <p className="font-open-sans text-neutral-600 text-lg leading-relaxed">
                                    Tailored logic for complex challenges. We develop bespoke enterprise software that automates workflows, eliminates bottlenecks, and fuels organizational growth. From UI component libraries to powerful Node.js backends, we build technology that adapts to your business.
                                </p>
                            </div>

                            {/* Image: Right on Desktop */}
                            <div className="relative min-h-75 w-full rounded-3xl border border-neutral-200 bg-neutral-50 overflow-hidden order-6 lg:order-6 group">
                                <Image
                                    src="/service3.png"
                                    alt="services"
                                    fill
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-neutral-100/60 to-transparent"></div>
                            </div>

                        </div>


                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}