import { useState, useCallback } from "react";
import { Message, ChatRequest } from "@chatbot/types/chat.types";
import { sendMessage as sendChatRequest } from "@chatbot/services/chat.service";

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [chatError, setChatError] = useState<string | null>(null);
  const [backendSessionId, setBackendSessionId] = useState<string | null>(null);

  const sendMessage = useCallback(async (content: string) => {
    const trimmed = content.trim();
    if (!trimmed || isTyping) return false;

    setChatError(null);

    const userMessage: Message = {
      id: crypto.randomUUID(),
      type: "user",
      content: trimmed,
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const payload: ChatRequest = { message: trimmed };
      if (backendSessionId) {
        payload.session_id = backendSessionId;
      }

      const response = await sendChatRequest(payload);
      
      if (!backendSessionId) {
        setBackendSessionId(response.session_id);
      }

      const aiMessage: Message = {
        id: crypto.randomUUID(),
        type: "assistant",
        content: response.response,
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
      return true;
    } catch (error: unknown) {
      // On error, remove the optimistically added user message
      // so it remains only in the chat input for them to retry.
      setMessages(prev => prev.slice(0, -1));
      setIsTyping(false);
      const errorMessage = error instanceof Error ? error.message : "We're having trouble getting a response right now. Please try again in a few moments.";
      setChatError(errorMessage);
      return false;
    }
  }, [backendSessionId, isTyping]);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setBackendSessionId(null);
    setChatError(null);
  }, []);

  return {
    messages,
    isTyping,
    chatError,
    sendMessage,
    clearMessages
  };
};
