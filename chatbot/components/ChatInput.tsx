"use client";

import React, { useState } from "react";
import { ArrowUp } from "lucide-react";

interface ChatInputProps {
  onSend: (msg: string) => Promise<boolean>;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend, disabled }) => {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !disabled && !isSending) {
      setIsSending(true);
      const success = await onSend(text);
      setIsSending(false);
      
      if (success) {
        setText("");
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  const hasText = text.trim().length > 0;

  return (
    <div className="relative rounded-full p-[1px] transition-all duration-300">
      <form 
        onSubmit={handleSubmit} 
        className="relative flex flex-shrink-0 items-center bg-white/5 backdrop-blur-xl rounded-[20px] pl-5 pr-2 py-2 transition-all shadow-inner border border-white/5 focus-within:border-white/20 focus-within:bg-white/10"
      >
        <input 
          type="text" 
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about B10 IT Solution..."
          disabled={disabled || isSending}
          className="flex-1 bg-transparent text-[15px] font-medium text-white placeholder:text-[#A1A1AA] focus:outline-none h-11 disabled:opacity-50"
          aria-label="Message Input"
        />
        <button 
          type="submit"
          disabled={!hasText || disabled || isSending}
          aria-label="Send Message"
          className={`flex items-center justify-center w-10 h-10 rounded-[16px] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 ${
            hasText 
              ? "bg-white text-[#09090B] shadow-lg hover:scale-[1.03]" 
              : "bg-white/5 text-[#A1A1AA]"
          }`}
        >
          <ArrowUp size={18} strokeWidth={2.5} className="ml-[1px]" />
        </button>
      </form>
    </div>
  );
};
