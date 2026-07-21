export enum SessionStatus {
  IDLE = "IDLE",
  CREATING = "CREATING",
  ACTIVE = "ACTIVE",
  RESTORABLE = "RESTORABLE",
  EXPIRED = "EXPIRED",
  RESETTING = "RESETTING",
  ERROR = "ERROR"
}

export interface ChatSession {
  session_id: string;
  conversation_id: string;
  status: SessionStatus;
  created_at: string;
  last_active_at: string;
  expires_at: string;
}
