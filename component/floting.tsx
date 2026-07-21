"use client";
import { motion } from "framer-motion";

const CursorArrow = ({ className = "" }: { className?: string }) => (
    <svg className={`w-5 h-5 drop-shadow-md ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.65376 21.3113C5.16335 21.7282 4.41445 21.3323 4.46908 20.6811L6.16631 3.12571C6.22384 2.53034 6.94528 2.25736 7.41178 2.65421L20.4074 13.7126C20.8931 14.1259 20.6094 14.928 19.9576 14.9858L13.886 15.525C13.5658 15.5534 13.2678 15.7196 13.0673 15.9818L8.74955 21.6322C8.36199 22.1394 7.55393 22.0911 7.22896 21.5413L5.65376 21.3113Z" fill="white" stroke="#18181b" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
);

export const Web = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
                opacity: { duration: 0.5, delay: 0.2 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
            }}
            // Changed positioning to top-left
            className="absolute top-[0%] left-[5%] flex flex-col items-start z-60 select-none"
        >
            <div className="bg-[#5c4aff] text-white text-sm font-medium px-4 py-2 rounded-xl rounded-bl-none shadow-sm">
                Web Design
            </div>
            <CursorArrow className="text-black -mt-1 ml-1" />
        </motion.div>
    );
};

export const Product = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -12, 0] }}
            transition={{
                opacity: { duration: 0.5, delay: 0.4 },
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
            }}
            // Changed positioning to bottom-left
            className="hidden lg:flex absolute bottom-[%] left-[70%] flex-col items-start z-60 select-none"
        >

            <div className="bg-[#ff9900] text-white text-sm font-semibold px-4 py-2 rounded-xl rounded-tl-none shadow-sm">
                Mobile App
            </div>
            <CursorArrow className="text-black -mt-1 ml-1 scale-x-[-1]" />
        </motion.div>
    );
};

export const Appdesign = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -12, 0] }}
            transition={{
                opacity: { duration: 0.5, delay: 0.4 },
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
            }}
            className="flex absolute top-[42%] right-5  flex-col items-start z-60 select-none"
        >
            <div className="bg-[#ccff00] text-zinc-900 text-sm font-semibold px-4 py-2 rounded-xl rounded-tl-none shadow-sm">
                Mobile App
            </div>
            <CursorArrow className="text-black -mt-1 ml-1 scale-x-[-1]" />
        </motion.div>
    );
};

export const Design = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -12, 0] }}
            transition={{
                opacity: { duration: 0.5, delay: 0.4 },
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
            }}
            // Changed positioning to bottom-left
            className="flex absolute top-[20%] left-2  flex-col items-start z-60 select-none"
        >
            <div className="bg-[#15ff00] text-zinc-900 text-sm font-semibold px-4 py-2 rounded-xl rounded-br-none shadow-sm">
                Web Design
            </div>
            <CursorArrow className="text-black -mt-1 ml-1 scale-x-[-1]" />
        </motion.div>
    );
};


