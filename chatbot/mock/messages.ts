import { Message } from "../types";

export const mockMessages: Message[] = [
  {
    id: "msg_1",
    role: "assistant",
    content: "Hello! I'm the B10 AI Assistant. How can I help you today?",
    timestamp: new Date().toISOString(),
  },
  {
    id: "msg_2",
    role: "user",
    content: "I'm looking to build a new AI product.",
    timestamp: new Date().toISOString(),
  },
  {
    id: "msg_3",
    role: "assistant",
    content: "That sounds exciting! We specialize in AI Solutions and Startup MVPs. Could you tell me a little more about the problem your product will solve?",
    timestamp: new Date().toISOString(),
  }
];
