import { useSessionStore } from "@chatbot/stores/session.store";

export const useSession = () => {
  const store = useSessionStore();
  
  return {
    session: store.session,
    status: store.status,
    loading: store.loading,
    error: store.error,
    startSession: store.startSession,
    continueSession: store.continueSession,
    resetSession: store.resetConversation,
    retryInitialization: store.retryInitialization,
    hasSession: !!store.session
  };
};
