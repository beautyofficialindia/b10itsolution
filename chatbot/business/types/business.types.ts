import { BusinessStatus } from "../constants/business.constants";

export type BusinessEntity = Record<string, unknown>;

export interface Company {
  name: string;
  description: string;
  mission: string;
  founded: number;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  technologies: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BusinessContextState {
  company: Company | null;
  services: Service[];
  faqs: FAQ[];
  loading: boolean;
  status: BusinessStatus;
  errors: Record<string, string>;
  isInitialized: boolean;
  initializeContext: () => Promise<void>;
}
