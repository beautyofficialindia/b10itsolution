import { SuggestionType } from "../types/suggestion.types";

export const MAX_SUGGESTIONS = 6;

// Deterministic priority ordering for suggestion generation
export const SUGGESTION_PRIORITY = [
  SuggestionType.COMPANY,
  SuggestionType.GENERAL,      // Maps to Services Overview ("What services do you provide?")
  SuggestionType.TECHNOLOGY,   // Maps to Technologies ("What technologies do you use?")
  SuggestionType.MISSION,
  SuggestionType.FAQ,          // Maps to FAQ Overview ("Frequently Asked Questions.")
  SuggestionType.SERVICE,      // Specific Primary Service
  SuggestionType.FAQ           // Specific Primary FAQ
];
