export const mockConversationState = {
  hasPreviousSession: true,
  lastActive: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
};
