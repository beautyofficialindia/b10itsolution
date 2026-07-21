import { ChatSession, SessionStatus } from "@chatbot/types/session.types";
import { SESSION_EXPIRY_HOURS } from "@chatbot/constants/session.constants";
import { getSession, setSession, clearSession } from "@chatbot/utils/sessionStorage";

export const createSession = (): ChatSession => {
  const now = new Date();
  const expiresAt = new Date(now.getTime() + SESSION_EXPIRY_HOURS * 60 * 60 * 1000);
  
  const session: ChatSession = {
    session_id: crypto.randomUUID(),
    conversation_id: crypto.randomUUID(),
    status: SessionStatus.ACTIVE,
    created_at: now.toISOString(),
    last_active_at: now.toISOString(),
    expires_at: expiresAt.toISOString()
  };
  
  setSession(session);
  return session;
};

export const restoreSession = (): ChatSession | null => {
  const session = getSession();
  if (session) {
    session.status = SessionStatus.ACTIVE;
    setSession(session);
    return session;
  }
  return null;
};

export const expireSession = (): void => {
  clearSession();
};

export const resetSession = (): ChatSession => {
  clearSession();
  return createSession();
};
