"use client"
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function IsometricBox({ className, variant = "top", isActive }: {
    className?: string;
    variant: "top" | "left" | "right";
    isActive?: boolean
}) {

    const TRANSTION = {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30

    }

    const Yvariants = {
        animate: {
            translateY: -10
        },
        initial: {
            translateY: 0
        }

    }

    const Xvariants = {
        animate: {
            translateX: 10
        },
        initial: {
            translateX: 0
        }
    }

    const NegativeXvarints = {
        animate: {
            translateX: -10
        },
        initial: {
            translateX: 0
        }
    }
    const NoOpVariants = {
        animate: {
            translateX: 0,
            translateY: 0
        },
        initial: {
            translateX: 0,
            translateY: 0
        }
    }

    const getVariants = (face: 'top' | 'left' | 'right') => {
        if (face !== variant) return NoOpVariants;

        switch (face) {
            case 'left':
                return NegativeXvarints;
            case 'right':
                return Xvariants;
            case 'top':
                return Yvariants;
        }
    }
    const getStrokeColor = (face: 'top' | 'left' | 'right') => {
        if (face !== variant) return "var(--color-neutral-200)";
        if (!isActive) return "var(--color-neutral-200)"

        switch (face) {
            case 'left':
                return "var(--color-blue-500)";
            case 'right':
                return "var(--color-blue-500)";
            case 'top':
                return "var(--color-blue-500)";
        }
    }



    return (
        <>
            <div className={cn("h-screen w-full flex items-center justify-center", className)}>

                <motion.div animate={isActive ? "animate" : "initial"} initial="initial">
                    <motion.svg
                        viewBox="0 0 200 200"
                        fill="none"
                        className={cn("size-60 text-neutral-400")}
                    >
                        {/* top face  */}
                        <motion.path
                            variants={getVariants("top")}
                            transition={TRANSTION}
                            d="M100 40 Q108 40 155 68 Q162 72 155 76 Q108 104 100 104 Q92 104 45 76 Q38 72 45 68 Q92 40 100 40 Z"
                            className="fill-neutral-50 "
                            stroke={getStrokeColor("top")}
                            strokeWidth="1.5"
                        />

                        {/* Inner rounded rectangle on top */}
                        <motion.path
                            variants={getVariants("top")}
                            transition={TRANSTION}
                            d="M100 52 Q105 52 132 68 Q138 72 132 76 Q105 92 100 92 Q95 92 68 76 Q62 72 68 68 Q95 52 100 52 Z"
                            className="fill-white "
                            stroke={getStrokeColor("top")}
                            strokeWidth="1"
                        />

                        {/* Left face */}
                        <motion.path
                            variants={getVariants("left")}
                            transition={TRANSTION}
                            d="M45 76 L100 104 L100 164 Q100 170 92 166 L45 140 Q38 136 38 128 L38 80 Q38 72 45 76 Z"
                            className="fill-neutral-100"
                            stroke={getStrokeColor("left")}
                            strokeWidth="1.5"
                        />

                        {/* Right face */}
                        <motion.path
                            variants={getVariants("right")}
                            transition={TRANSTION}
                            d="M155 76 L100 104 L100 164 Q100 170 108 166 L155 140 Q162 136 162 128 L162 80 Q162 72 155 76 Z"
                            className="fill-neutral-50"
                            stroke={getStrokeColor("right")}
                            strokeWidth="1.5"
                        />

                        {/* Vertical lines on left face */}
                        <motion.path
                            variants={getVariants("left")}
                            transition={TRANSTION}
                            d="M55 86 L55 145"
                            stroke={getStrokeColor("left")}
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeDasharray="3 3"
                        />
                        <motion.path
                            variants={getVariants("left")}
                            transition={TRANSTION}
                            d="M70 95 L70 155"
                            stroke={getStrokeColor("left")}
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeDasharray="3 3"
                        />
                        <motion.path
                            variants={getVariants("left")}
                            transition={TRANSTION}
                            d="M85 104 L85 162"
                            stroke={getStrokeColor("left")}
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeDasharray="3 3"
                        />

                        {/* Vertical lines on right face */}
                        <motion.path
                            variants={getVariants("right")}
                            transition={TRANSTION}
                            d="M145 86 L145 145"
                            stroke={getStrokeColor("right")}
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeDasharray="3 3"
                        />

                        <motion.path
                            variants={getVariants("right")}
                            transition={TRANSTION}
                            d="M130 95 L130 155"
                            stroke={getStrokeColor("right")}
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeDasharray="3 3"
                        />

                        <motion.path
                            variants={getVariants("right")}
                            transition={TRANSTION}
                            d="M115 104 L115 162"
                            stroke={getStrokeColor("right")}
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeDasharray="3 3"
                        />

                    </motion.svg>
                </motion.div>

            </div>

        </>
    )
}