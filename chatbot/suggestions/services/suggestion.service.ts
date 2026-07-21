import { Suggestion, SuggestionType } from "../types/suggestion.types";
import { SUGGESTION_PRIORITY, MAX_SUGGESTIONS } from "../constants/suggestion.constants";
import { Company, Service, FAQ } from "../../business/types/business.types";

export const getPrimaryService = (services: Service[]): Service | null => {
  if (!services || services.length === 0) return null;
  // Deterministic selection - returns the first service available
  return services[0];
};

export const getPrimaryFAQ = (faqs: FAQ[]): FAQ | null => {
  if (!faqs || faqs.length === 0) return null;
  // Deterministic selection - returns the first FAQ available
  return faqs[0];
};

export const generateSuggestions = (
  company: Company | null,
  services: Service[],
  faqs: FAQ[]
): Suggestion[] => {
  const suggestions: Suggestion[] = [];
  const textSet = new Set<string>();

  const addSuggestion = (id: string, text: string, type: SuggestionType) => {
    if (suggestions.length >= MAX_SUGGESTIONS) return;
    if (textSet.has(text)) return;
    
    suggestions.push({ id, text, type });
    textSet.add(text);
  };

  let specificServiceAdded = false;
  let specificFaqAdded = false;

  for (const type of SUGGESTION_PRIORITY) {
    if (suggestions.length >= MAX_SUGGESTIONS) break;

    switch (type) {
      case SuggestionType.COMPANY:
        if (company?.name) {
          addSuggestion("company_overview", `Tell me about ${company.name}.`, type);
        }
        break;

      case SuggestionType.GENERAL:
        if (services.length > 0 && !textSet.has("What services do you provide?")) {
          addSuggestion("general_services", "What services do you provide?", type);
        }
        break;

      case SuggestionType.TECHNOLOGY:
        if (services.some(s => s.technologies && s.technologies.length > 0)) {
          addSuggestion("general_technology", "What technologies do you use?", type);
        }
        break;

      case SuggestionType.MISSION:
        if (company?.mission) {
          addSuggestion("company_mission", "What is your mission?", type);
        }
        break;

      case SuggestionType.SERVICE:
        if (services.length > 0 && !specificServiceAdded) {
          const primaryService = getPrimaryService(services);
          if (primaryService) {
            addSuggestion(`specific_service_${primaryService.id}`, `Tell me about ${primaryService.name}.`, type);
            specificServiceAdded = true;
          }
        }
        break;

      case SuggestionType.FAQ:
        if (faqs.length > 0) {
          if (!textSet.has("Frequently Asked Questions.")) {
            addSuggestion("general_faq", "Frequently Asked Questions.", type);
          } else if (!specificFaqAdded) {
            const primaryFaq = getPrimaryFAQ(faqs);
            if (primaryFaq) {
              // Creating a safe, unique ID for the specific FAQ
              const safeId = `specific_faq_${primaryFaq.question.replace(/\s+/g, "_").substring(0, 15).toLowerCase()}`;
              addSuggestion(safeId, primaryFaq.question, type);
              specificFaqAdded = true;
            }
          }
        }
        break;
    }
  }

  return suggestions;
};
