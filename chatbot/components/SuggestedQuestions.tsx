"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useSuggestions } from "@chatbot/suggestions";

const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25 } }
};

export const SuggestedQuestions: React.FC<{ onSelect: (q: string) => void }> = ({ onSelect }) => {
  const { suggestions } = useSuggestions();

  if (!suggestions || suggestions.length === 0) return null;

  return (
    <motion.div 
      variants={fadeVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3 w-full"
    >
      {suggestions.map((suggestion) => (
        <button
          key={suggestion.id}
          onClick={() => onSelect(suggestion.text)}
          className="group relative flex flex-col items-start justify-center text-left bg-white/5 border border-white/5 rounded-[14px] p-3 transition-all duration-250 shadow-sm hover:shadow-[0_4px_24px_rgba(255,255,255,0.08)] hover:-translate-y-[2px] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 overflow-hidden"
        >
          {/* Subtle Instagram Gradient Outline on Hover */}
          <div className="absolute inset-0 rounded-[14px] animate-instagram-gradient opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
          
          <span className="relative z-10 text-[13px] font-medium text-white/90 leading-snug transition-colors group-hover:text-white">
            {suggestion.text}
          </span>
        </button>
      ))}
    </motion.div>
  );
};
