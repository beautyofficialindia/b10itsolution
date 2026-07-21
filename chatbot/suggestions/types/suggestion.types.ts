export enum SuggestionType {
  GENERAL = "GENERAL",
  COMPANY = "COMPANY",
  SERVICE = "SERVICE",
  FAQ = "FAQ",
  TECHNOLOGY = "TECHNOLOGY",
  MISSION = "MISSION"
}

export interface Suggestion {
  id: string;
  text: string;
  type: SuggestionType;
}
