import { useContext } from "react";
import { BackendContext } from "@chatbot/providers/BackendProvider";

export const useHealth = () => {
  const context = useContext(BackendContext);
  if (context === undefined) {
    throw new Error("useHealth must be used within a BackendProvider");
  }
  return context;
};
