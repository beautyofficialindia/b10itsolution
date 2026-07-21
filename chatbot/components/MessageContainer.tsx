"use client";

import React, { useEffect, useRef, useState } from "react";
import { UserMessage } from "./UserMessage";
import { AIMessage } from "./AIMessage";
import { SuggestedQuestions } from "./SuggestedQuestions";
import { TypingIndicator } from "./TypingIndicator";
import { AlertCircle } from "lucide-react";
import { Message } from "@chatbot/types/chat.types";

interface MessageContainerProps {
  messages: Message[];
  isTyping: boolean;
  chatError: string | null;
  sendMessage: (msg: string) => Promise<boolean>;
}

export const MessageContainer: React.FC<MessageContainerProps> = ({
  messages,
  isTyping,
  chatError,
  sendMessage
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const prevMessagesLength = useRef(messages.length);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    setIsAtBottom(scrollHeight - scrollTop - clientHeight < 100);
  };

  useEffect(() => {
    if (!scrollRef.current) return;

    if (messages.length > prevMessagesLength.current || isTyping || chatError) {
      if (isAtBottom) {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight,
          behavior: "smooth"
        });
      }
      prevMessagesLength.current = messages.length;
    }
  }, [messages, isAtBottom, isTyping, chatError]);

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className="flex-1 p-4 space-y-4 overflow-y-auto flex flex-col relative"
      aria-live="polite"
    >
      {messages.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center py-8">
          <h3 className="b10-chatbot-heading text-[32px] font-bold text-white text-center mb-3">
            Welcome Back!
          </h3>
          <p className="font-medium text-[15px] text-[#E5E7EB] text-center mb-1.5">
            Your conversation session is still active.
          </p>
          <p className="font-normal text-[14px] text-[#9CA3AF] text-center max-w-[280px]">
            You can continue chatting with our AI assistant.
          </p>
        </div>
      ) : (
        <div className="text-center mb-2">
          <span className="text-[10px] font-medium uppercase tracking-widest text-black/40 dark:text-white/40">Today</span>
        </div>
      )}

      {messages.map((msg) => (
        msg.type === "user"
          ? <UserMessage key={msg.id} content={msg.content} />
          : <AIMessage key={msg.id} content={msg.content} />
      ))}

      {isTyping && <TypingIndicator />}

      {chatError && (
        <div className="flex items-center justify-center p-3 my-2 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium animate-in slide-in-from-bottom-2 fade-in">
          <AlertCircle size={16} className="mr-2 shrink-0" />
          <span>{chatError}</span>
        </div>
      )}

      {messages.length === 0 && !isTyping && (
        <SuggestedQuestions onSelect={(q) => sendMessage(q)} />
      )}

      {!isAtBottom && (
        <div className="sticky bottom-2 w-full flex justify-center z-20 pointer-events-none">
          <button
            onClick={() => {
              scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
              setIsAtBottom(true);
            }}
            className="pointer-events-auto bg-black text-white dark:bg-white dark:text-black rounded-full px-4 py-1.5 text-xs font-medium shadow-xl opacity-90 hover:opacity-100 transform transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white"
          >
            New Messages ↓
          </button>
        </div>
      )}
    </div>
  );
};
