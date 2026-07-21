"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChatHeader } from "./ChatHeader";
import { WelcomeScreen } from "./WelcomeScreen";
import { ChatInput } from "./ChatInput";
import { MessageContainer } from "./MessageContainer";
import { useSession } from "@chatbot/hooks/useSession";
import { useHealth } from "@chatbot/hooks/useHealth";
import { useChat } from "@chatbot/hooks/useChat";
import { SessionStatus } from "@chatbot/types/session.types";
import { Loader2, AlertCircle } from "lucide-react";

const LoadingState = () => (
  <div className="flex-1 flex items-center justify-center">
    <Loader2 className="w-8 h-8 animate-spin text-[#A1A1AA]" />
  </div>
);

const ErrorState = ({
  title,
  description,
  actionLabel,
  onAction
}: {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}) => (
  <div className="flex-1 flex flex-col items-center justify-center space-y-4 p-8 text-center h-full">
    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-2 border border-white/10">
      <AlertCircle className="w-8 h-8 text-[#A1A1AA]" strokeWidth={1.5} />
    </div>
    {title && <h3 className="b10-chatbot-heading text-xl font-bold text-white">{title}</h3>}
    <p className="text-[15px] font-medium leading-relaxed text-[#A1A1AA]">{description || "Something went wrong. Please try again later."}</p>
    {actionLabel && onAction && (
      <button
        onClick={onAction}
        className="mt-6 px-6 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-all border border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
      >
        {actionLabel}
      </button>
    )}
  </div>
);

interface ChatWindowProps {
  isOpen: boolean;
  close: () => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ isOpen, close }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const { status, startSession, continueSession, retryInitialization, error: sessionError } = useSession();
  const { isHealthy, isChecking, error: healthError } = useHealth();
  const { messages, isTyping, chatError, sendMessage } = useChat();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-restore conversation if session exists
  useEffect(() => {
    if (status === SessionStatus.RESTORABLE) {
      continueSession();
    }
  }, [status, continueSession]);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: isMobile ? "100%" : 20,
      scale: isMobile ? 1 : 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", bounce: 0, duration: 0.4 }
    },
    exit: {
      opacity: 0,
      y: isMobile ? "100%" : 20,
      scale: isMobile ? 1 : 0.95,
      transition: { duration: 0.25 }
    }
  };

  const handleStart = async (initialMessage?: string): Promise<boolean> => {
    await startSession();
    if (initialMessage) {
      return await sendMessage(initialMessage);
    }
    return true;
  };

  const renderContent = () => {
    if (isChecking) {
      return <LoadingState />;
    }

    if (!isHealthy) {
      return (
        <ErrorState
          title="Service Unavailable"
          description={healthError || "We're having trouble connecting to our AI assistant right now. Please try again in a few moments."}
        />
      );
    }

    switch (status) {
      case SessionStatus.IDLE:
      case SessionStatus.EXPIRED:
        return <WelcomeScreen onStart={handleStart} />;
      case SessionStatus.RESTORABLE:
        return <LoadingState />;
      case SessionStatus.ACTIVE:
        return (
          <MessageContainer
            messages={messages}
            isTyping={isTyping}
            chatError={chatError}
            sendMessage={sendMessage}
          />
        );
      case SessionStatus.CREATING:
      case SessionStatus.RESETTING:
        return <LoadingState />;
      case SessionStatus.ERROR:
        return (
          <ErrorState
            title="Session Error"
            description={sessionError || "We're unable to start your conversation right now."}
            actionLabel="Try Again"
            onAction={retryInitialization}
          />
        );
      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  // The glow is more prominent on hover, focus, or typing
  const isGlowing = isInputFocused || isTyping;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="pointer-events-auto fixed inset-x-0 bottom-0 w-full h-[95dvh] md:w-[440px] md:h-[820px] md:max-h-[92vh] md:right-6 md:bottom-6 md:left-auto z-40 group"
        >
          {/* Outer Border Layer - Instagram Gradient */}
          <div className="absolute inset-0 rounded-t-[26px] md:rounded-[26px] animate-instagram-gradient" />

          {/* Subtle Glow Layer */}
          <div
            className={`absolute inset-0 rounded-t-[26px] md:rounded-[26px] animate-instagram-gradient blur-[8px] transition-opacity duration-700 -z-10 ${isGlowing ? "opacity-70" : "opacity-30 group-hover:opacity-50"
              }`}
          />

          {/* Inner Content Layer (Glassmorphism over Dark Matte) */}
          <div className="absolute inset-[2px] md:inset-[2.5px] rounded-t-[24px] md:rounded-[24px] bg-[#09090B]/95 backdrop-blur-3xl b10-chatbot-bg-pattern overflow-hidden flex flex-col shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <ChatHeader close={close} />

            <div className="flex-1 overflow-y-auto relative z-10 flex flex-col scroll-smooth">
              {renderContent()}
            </div>

            {isHealthy && !isChecking && status === SessionStatus.ACTIVE && (
              <div className="shrink-0 p-4 border-t border-white/5 relative z-10 bg-[#09090B]/80 backdrop-blur-xl" onFocus={() => setIsInputFocused(true)} onBlur={() => setIsInputFocused(false)}>
                <ChatInput onSend={sendMessage} disabled={isTyping} />
              </div>
            )}

            <div className="shrink-0 py-2.5 text-center bg-transparent border-t border-white/5 relative z-10">
              <span className="text-[10px] font-medium text-[#A1A1AA]/60 tracking-wider">POWERED BY B10 AI</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
