export interface KBCategory {
  id: number;
  name: string;
  slug: string;
  color: string;
  icon: string;
  sort_order: number;
  is_active: boolean;
}

export interface KBTag {
  id: number;
  name: string;
  slug: string;
  is_active: boolean;
}

export interface KBPagination {
  page: number;
  page_size: number;
  total_count: number;
  total_pages: number;
}

export interface KBEntrySummary {
  id: string;
  category: KBCategory;
  tags: KBTag[];
  title: string;
  slug: string;
  status: string;
  source: string;
  sort_order: number;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface KBEntryDetail extends KBEntrySummary {
  content: string;
  structured_data: Record<string, unknown>;
  created_by: string;
  updated_by: string;
}

export enum KnowledgeStatus {
  IDLE = "IDLE",
  INITIALIZING = "INITIALIZING",
  READY = "READY",
  PARTIAL_READY = "PARTIAL_READY",
  ERROR = "ERROR",
}

export interface KnowledgeContextState {
  status: KnowledgeStatus;
  errors: Record<string, string>;
  entries: KBEntrySummary[];
  pagination: KBPagination | null;
  activeEntry: KBEntryDetail | null;
  loadEntries: (page?: number) => Promise<void>;
  loadEntryDetail: (slug: string) => Promise<void>;
}
