import { useMemo } from "react";
import { useBusinessContext } from "../../business/hooks/useBusinessContext";
import { BusinessStatus } from "../../business/constants/business.constants";
import { generateSuggestions } from "../services/suggestion.service";
import { Suggestion } from "../types/suggestion.types";

export const useSuggestions = (): { suggestions: Suggestion[], isLoading: boolean } => {
  const { status, company, services, faqs } = useBusinessContext();

  const isLoading = status === BusinessStatus.INITIALIZING;

  const suggestions = useMemo(() => {
    return generateSuggestions(company, services, faqs);
  }, [company, services, faqs]);

  return {
    suggestions,
    isLoading
  };
};
