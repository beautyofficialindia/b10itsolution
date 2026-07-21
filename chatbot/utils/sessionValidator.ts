import { ChatSession } from "@chatbot/types/session.types";

export const validateSessionIntegrity = (session: unknown): session is ChatSession => {
  if (!session) return false;
  if (typeof session !== 'object') return false;
  
  const s = session as Record<string, unknown>;
  
  if (!s.session_id || typeof s.session_id !== 'string') return false;
  if (!s.conversation_id || typeof s.conversation_id !== 'string') return false;
  if (!s.created_at || typeof s.created_at !== 'string') return false;
  if (!s.expires_at || typeof s.expires_at !== 'string') return false;
  
  const expiresAt = new Date(s.expires_at).getTime();
  if (isNaN(expiresAt) || expiresAt < Date.now()) {
    return false;
  }

  return true;
};
