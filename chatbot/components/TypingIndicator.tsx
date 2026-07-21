"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const TypingIndicator: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-start w-full mb-6"
    >
      <div className="flex items-center space-x-2 mb-2 ml-1">
        <div className="w-5 h-5 rounded-full bg-white/10 text-white flex items-center justify-center shadow-[0_2px_10px_rgba(255,255,255,0.05)] border border-white/10">
          <Sparkles size={11} className="text-[#A1A1AA]" />
        </div>
        <span className="text-[12px] font-semibold text-[#A1A1AA]">B10 AI Assistant is thinking...</span>
      </div>
      <div className="b10-glass-bubble rounded-2xl rounded-tl-sm px-5 py-5 shadow-sm flex space-x-1.5 items-center">
        {[0, 1, 2].map((dot) => (
          <motion.div
            key={dot}
            className="w-1.5 h-1.5 bg-[#A1A1AA] rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: dot * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};
