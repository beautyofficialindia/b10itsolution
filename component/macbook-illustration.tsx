"use client"
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";

export default function MacbookIllustration({className}:{className?: string}) {
    return (
        <motion.div whileHover="animate" initial="initial" className={cn("max-w-2xl mx-auto w-full h-96",className)}>
            {/* lid area */}
            <div className="w-60 mx-auto perspective-distant">
                <motion.div
                    variants={{
                        initial: {
                            rotateX: -60,
                            opacity:50
                        },
                        animate: {
                            rotateX: 20,
                        }
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                    }}
                    style={{
                        transformOrigin: 'bottom'
                    }}
                    className="w-[90%] mx-auto rounded-tl-xl rounded-tr-xl shadow-sm shadow-black/10 ring-1 ring-black/10 h-40 p-1 bg-neutral-900"
                >
                    <div className="w-full h-full bg-white rounded-tl-xl rounded-tr-xl relative overflow-hidden">

                        <Image
                            src="/macbookillustration.png"
                            alt="device screen"
                            loading="eager"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* base area */}
                <div className="w-full h-3 bg-linear-to-b from-neutral-50 to-neutral-300 rounded-br-xl rounded-bl-xl rounded-tr-sm rounded-tl-sm shadow-[0px_1px_0px_0px_var(--color-neutral-300)_inset] relative">
                    <div className="absolute inset-x-0 top-0 w-10 rounded-bl-md rounded-br-md h-2 bg-neutral-300 mx-auto shadow-[0px_-1px_0px_0px_var(--color-neutral-100)_inset,1px_0px_5px_0px_var(--color-neutral-500)_inset]" />
                </div>
            </div>
        </motion.div>
    );
}