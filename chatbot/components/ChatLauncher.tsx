"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";

interface ChatLauncherProps {
  isOpen: boolean;
  toggle: () => void;
}

export const ChatLauncher: React.FC<ChatLauncherProps> = ({ isOpen, toggle }) => {
  const [showTeaser, setShowTeaser] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (hasInteracted || hasShown || isOpen) return;

    const showTimer = setTimeout(() => {
      if (!hasInteracted && !isOpen) {
        setShowTeaser(true);
        setHasShown(true);
        
        // Hide after 5 seconds
        setTimeout(() => {
          setShowTeaser(false);
        }, 5000);
      }
    }, 2500);

    return () => clearTimeout(showTimer);
  }, [hasInteracted, hasShown, isOpen]);

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setHasInteracted(true);
      setShowTeaser(false);
    }
  }

  const handleInteract = () => {
    setHasInteracted(true);
    setShowTeaser(false);
    toggle();
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && showTeaser && (
          <motion.div
            key="teaser-bubble"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={handleInteract}
            className="pointer-events-auto fixed bottom-[84px] right-4 md:bottom-[100px] md:right-6 w-[280px] p-5 rounded-[20px] bg-[#09090B]/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.8)] transition-all duration-300 cursor-pointer group z-50 flex flex-col font-sans"
          >
            {/* Instagram Glow Border */}
            <div className="absolute inset-[-1px] rounded-[21px] animate-instagram-gradient opacity-20 group-hover:opacity-50 transition-opacity duration-500 blur-[2px] -z-20" />
            <div className="absolute inset-[0px] rounded-[20px] bg-[#09090B]/95 backdrop-blur-2xl border border-white/5 -z-10" />
            
            <span className="text-[14px] font-semibold text-white mb-2 leading-tight">Have a project in mind?</span>
            <span className="text-[13px] font-medium text-[#A1A1AA] leading-relaxed mb-4">
              B10 AI Assistant can help you discover the right technologies, services and business solutions for your idea.
            </span>
            <div className="flex justify-end text-[13px] font-bold text-white/80 group-hover:text-white transition-colors items-center">
              Ask me anything <span className="ml-1.5 opacity-70 group-hover:translate-x-1 transition-transform group-hover:opacity-100">&rarr;</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="chat-launcher-btn"
            onClick={handleInteract}
            initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
            animate={
              showTeaser
                ? { 
                    opacity: 1, 
                    scale: [1, 1.03, 1], 
                    rotate: 0, 
                    transition: { scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }, rotate: { duration: 0.2 } } 
                  }
                : { opacity: 1, scale: 1, rotate: 0 }
            }
            exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            aria-label="Open Chat"
            className="pointer-events-auto fixed bottom-4 right-4 md:bottom-6 md:right-6 flex items-center justify-center w-14 h-14 rounded-full bg-[#09090B] text-white shadow-[0_8px_30px_rgba(0,0,0,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 z-50 transition-shadow group"
          >
            {/* Instagram Gradient Outline */}
            <div className="absolute inset-[-2px] rounded-full animate-instagram-gradient opacity-80 group-hover:opacity-100 transition-opacity blur-[2px] -z-10" />
            <div className="absolute inset-[0px] rounded-full bg-[#09090B] border border-white/10 z-0" />
            
            <div className="relative z-10">
              <MessageSquare size={24} strokeWidth={2.5} className="text-white" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
