"use client";

import React from "react";
import { X, Sparkles } from "lucide-react";

interface ChatHeaderProps {
  close: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ close }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-transparent relative z-20 shrink-0 rounded-t-[24px]">
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 text-white shadow-sm border border-white/10">
          <Sparkles size={16} className="text-[#A1A1AA]" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="b10-chatbot-heading font-bold text-[18px] leading-tight tracking-tight text-white">B10 AI Assistant</h2>
          <div className="flex items-center space-x-1.5 mt-[2px]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10B981]"></span>
            </span>
            <p className="text-[10px] font-semibold text-[#A1A1AA] tracking-widest uppercase">AI Business Consultant</p>
          </div>
        </div>
      </div>
      <button 
        onClick={close}
        className="p-2 rounded-full hover:bg-white/10 transition-colors focus:outline-none"
        aria-label="Close Chat"
      >
        <X size={20} className="text-[#A1A1AA]" />
      </button>
    </div>
  );
};
