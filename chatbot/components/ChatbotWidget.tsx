"use client";

import React, { useState, useEffect } from "react";
import { chatbotFonts } from "@chatbot/styles/fonts";
import { ChatLauncher } from "./ChatLauncher";
import { ChatWindow } from "./ChatWindow";
import { SessionProvider } from "@chatbot/stores/session.store";
import { BackendProvider } from "@chatbot/providers/BackendProvider";
import { BusinessContextProvider } from "@chatbot/business";
import { KnowledgeProvider } from "@chatbot/knowledge";
import "@chatbot/styles/index.css";

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (isOpen && window.innerWidth < 768) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <BackendProvider>
      <SessionProvider>
        <BusinessContextProvider>
          <KnowledgeProvider>
            <div className={`b10-chatbot-root ${chatbotFonts.variables} pointer-events-none fixed inset-0 z-[9999]`}>
              <ChatWindow isOpen={isOpen} close={() => setIsOpen(false)} />
              <ChatLauncher isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
            </div>
          </KnowledgeProvider>
        </BusinessContextProvider>
      </SessionProvider>
    </BackendProvider>
  );
};
