export interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
  isTyping?: boolean;
}

export interface ChatState {
  isOpen: boolean;
  messages: Message[];
  isThinking: boolean;
}
