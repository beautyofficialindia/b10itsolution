import { useContext } from "react";
import { KnowledgeContext } from "../provider/KnowledgeProvider";
import { KnowledgeContextState } from "../types/knowledge.types";

export const useKnowledge = (): KnowledgeContextState => {
  const context = useContext(KnowledgeContext);
  if (context === undefined) {
    throw new Error("useKnowledge must be used within a KnowledgeProvider");
  }
  return context;
};
