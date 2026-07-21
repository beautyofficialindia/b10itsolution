"use client";

import React from "react";
import { AlertCircle } from "lucide-react";

export const ErrorState: React.FC<{ message?: string; onRetry?: () => void }> = ({ 
  message = "Something went wrong.",
  onRetry 
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 h-full text-center space-y-4">
      <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
        <AlertCircle size={24} />
      </div>
      <p className="b10-chatbot-heading text-lg font-medium">{message}</p>
      {onRetry && (
        <button 
          onClick={onRetry}
          className="px-4 py-2 text-sm font-medium bg-black/5 dark:bg-white/5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
        >
          Please try again
        </button>
      )}
      <p className="text-xs text-black/50 dark:text-white/50 mt-4">OR Talk to our team.</p>
    </div>
  );
};
