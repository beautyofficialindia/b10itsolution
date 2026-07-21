"use client";

import React from "react";
import { motion } from "framer-motion";

export const LoadingState: React.FC<{ message?: string }> = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4 opacity-70">
      <motion.div
        className="w-8 h-8 border-2 border-black/20 border-t-black dark:border-white/20 dark:border-t-white rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
};
