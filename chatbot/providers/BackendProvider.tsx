"use client";

import React, { createContext, useEffect, useState, useRef } from "react";
import { checkHealth } from "@chatbot/services/health.service";

interface BackendContextState {
  isHealthy: boolean;
  isChecking: boolean;
  error: string | null;
}

export const BackendContext = createContext<BackendContextState | undefined>(undefined);

export const BackendProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isHealthy, setIsHealthy] = useState<boolean>(true);
  const [isChecking, setIsChecking] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const hasChecked = useRef(false);

  useEffect(() => {
    if (hasChecked.current) return;
    hasChecked.current = true;

    const performHealthCheck = async () => {
      setIsChecking(true);
      const status = await checkHealth();
      
      setIsHealthy(status.healthy);
      if (!status.healthy) {
        setError(status.message);
      } else {
        setError(null);
      }
      
      setIsChecking(false);
    };

    performHealthCheck();
  }, []);

  return (
    <BackendContext.Provider value={{ isHealthy, isChecking, error }}>
      {children}
    </BackendContext.Provider>
  );
};
