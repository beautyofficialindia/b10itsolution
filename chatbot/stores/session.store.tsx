"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ChatSession, SessionStatus } from "@chatbot/types/session.types";
import { getSession } from "@chatbot/utils/sessionStorage";
import { createSession, restoreSession, resetSession } from "@chatbot/services/session.service";
import { initializeBackendSession } from "@chatbot/services/sessionApi.service";

interface SessionContextState {
  session: ChatSession | null;
  status: SessionStatus;
  loading: boolean;
  error: string | null;
  startSession: () => Promise<void>;
  continueSession: () => void;
  resetConversation: () => Promise<void>;
  retryInitialization: () => Promise<void>;
}

const SessionContext = createContext<SessionContextState | undefined>(undefined);

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSessionState] = useState<ChatSession | null>(null);
  const [status, setStatus] = useState<SessionStatus>(SessionStatus.IDLE);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const existingSession = getSession();
      if (existingSession) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSessionState(existingSession);
        setStatus(SessionStatus.RESTORABLE);
      } else {
        setStatus(SessionStatus.IDLE);
      }
    } catch (err) {
      console.error(err);
      setStatus(SessionStatus.ERROR);
      setError("Failed to initialize session");
    } finally {
      setLoading(false);
    }
  }, []);

  const performBackendInit = async () => {
    try {
      setError(null);
      await initializeBackendSession();
      setStatus(SessionStatus.ACTIVE);
    } catch (err: unknown) {
      console.error(err);
      setStatus(SessionStatus.ERROR);
      const errorMessage = err instanceof Error ? err.message : "Failed to initialize conversation.";
      setError(errorMessage);
    }
  };

  const startSession = async () => {
    setStatus(SessionStatus.CREATING);
    try {
      const newSession = createSession();
      setSessionState(newSession);
      await performBackendInit();
    } catch (err) {
      console.error(err);
      setStatus(SessionStatus.ERROR);
      setError("Failed to create local session");
    }
  };

  const continueSession = () => {
    try {
      const restored = restoreSession();
      if (restored) {
        setSessionState(restored);
        setStatus(SessionStatus.ACTIVE);
      } else {
        startSession();
      }
    } catch (err) {
      console.error(err);
      setStatus(SessionStatus.ERROR);
      setError("Failed to restore session");
    }
  };

  const resetConversation = async () => {
    setStatus(SessionStatus.RESETTING);
    try {
      const newSession = resetSession();
      setSessionState(newSession);
      await performBackendInit();
    } catch (err) {
      console.error(err);
      setStatus(SessionStatus.ERROR);
      setError("Failed to reset session");
    }
  };
  
  const retryInitialization = async () => {
    if (session) {
      setStatus(SessionStatus.CREATING);
      await performBackendInit();
    } else {
      await startSession();
    }
  };

  return (
    <SessionContext.Provider value={{
      session,
      status,
      loading,
      error,
      startSession,
      continueSession,
      resetConversation,
      retryInitialization
    }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionStore = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSessionStore must be used within a SessionProvider");
  }
  return context;
};
