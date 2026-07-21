"use client";

import React from "react";
import { motion } from "framer-motion";

export const UserMessage: React.FC<{ content: string }> = ({ content }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col items-end w-full mb-6"
    >
      <div className="max-w-[65%] b10-matte-bubble text-white rounded-2xl rounded-tr-sm px-5 py-4 text-[15px] shadow-[0_4px_24px_rgba(0,0,0,0.3)] leading-relaxed break-words whitespace-pre-wrap">
        {content}
      </div>
    </motion.div>
  );
};
