import { ChatSession } from "@chatbot/types/session.types";
import { SESSION_STORAGE_KEY } from "@chatbot/constants/session.constants";
import { validateSessionIntegrity } from "./sessionValidator";

export const getSession = (): ChatSession | null => {
  if (typeof window === "undefined") return null;
  try {
    const data = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!data) return null;
    
    const parsed = JSON.parse(data);
    if (validateSessionIntegrity(parsed)) {
      return parsed;
    }
    
    clearSession();
    return null;
  } catch {
    clearSession();
    return null;
  }
};

export const setSession = (session: ChatSession): void => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
  } catch {
    console.error("Failed to save session to local storage");
  }
};

export const clearSession = (): void => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_STORAGE_KEY);
};

export const hasSession = (): boolean => {
  return getSession() !== null;
};

export const updateLastActive = (): void => {
  const session = getSession();
  if (session) {
    session.last_active_at = new Date().toISOString();
    setSession(session);
  }
};
