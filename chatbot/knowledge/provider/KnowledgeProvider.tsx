import React, { createContext, useState, ReactNode } from "react";
import { KnowledgeStatus, KnowledgeContextState, KBEntrySummary, KBEntryDetail, KBPagination } from "../types/knowledge.types";
import { knowledgeCache } from "../cache/knowledge.cache";
import { fetchKBEntries, fetchKBEntryDetail } from "../services/knowledge.service";

export const KnowledgeContext = createContext<KnowledgeContextState | undefined>(undefined);

export const KnowledgeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [status, setStatus] = useState<KnowledgeStatus>(KnowledgeStatus.IDLE);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [entries, setEntries] = useState<KBEntrySummary[]>([]);
  const [pagination, setPagination] = useState<KBPagination | null>(null);
  const [activeEntry, setActiveEntry] = useState<KBEntryDetail | null>(null);

  const loadEntries = async (page: number = 1) => {
    const cacheKey = `kb_entries_page_${page}`;
    
    // 1. Cache Hit
    if (knowledgeCache.has(cacheKey)) {
      const cached = knowledgeCache.get(cacheKey);
      setEntries(cached.data);
      setPagination(cached.pagination);
      setStatus(KnowledgeStatus.READY);
      return;
    }

    // 2. Cache Miss - Fetch API
    setStatus(KnowledgeStatus.INITIALIZING);
    try {
      const response = await fetchKBEntries(page);
      
      knowledgeCache.set(cacheKey, response);
      setEntries(response.data);
      setPagination(response.pagination);
      
      setStatus(KnowledgeStatus.READY);
    } catch (err: unknown) {
      console.error("Knowledge Entries Fetch Failed", err);
      setStatus(KnowledgeStatus.ERROR);
      const errorMessage = err instanceof Error ? err.message : "Failed to load entries";
      setErrors((prev) => ({ ...prev, entries: errorMessage }));
    }
  };

  const loadEntryDetail = async (slug: string) => {
    const cacheKey = `kb_detail_${slug}`;
    
    // 1. Cache Hit
    if (knowledgeCache.has(cacheKey)) {
      setActiveEntry(knowledgeCache.get(cacheKey));
      setStatus(KnowledgeStatus.READY);
      return;
    }

    // 2. Cache Miss - Fetch API
    setStatus(KnowledgeStatus.INITIALIZING);
    try {
      const detail = await fetchKBEntryDetail(slug);
      
      knowledgeCache.set(cacheKey, detail);
      setActiveEntry(detail);
      
      setStatus(KnowledgeStatus.READY);
    } catch (err: unknown) {
      console.error("Knowledge Entry Detail Fetch Failed", err);
      setStatus(KnowledgeStatus.ERROR);
      const errorMessage = err instanceof Error ? err.message : "Failed to load entry detail";
      setErrors((prev) => ({ ...prev, detail: errorMessage }));
    }
  };

  return (
    <KnowledgeContext.Provider
      value={{
        status,
        errors,
        entries,
        pagination,
        activeEntry,
        loadEntries,
        loadEntryDetail,
      }}
    >
      {children}
    </KnowledgeContext.Provider>
  );
};
