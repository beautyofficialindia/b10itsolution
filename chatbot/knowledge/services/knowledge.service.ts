import { apiClient } from "../../services/api.service";
import { KNOWLEDGE_API_ROUTES } from "../constants/knowledge.constants";
import { handleApiError } from "../../utils/apiErrorHandler";
import { KBEntrySummary, KBEntryDetail, KBPagination } from "../types/knowledge.types";

export const fetchKBEntries = async (page: number = 1): Promise<{ data: KBEntrySummary[]; pagination: KBPagination }> => {
  try {
    const response = await apiClient.get(KNOWLEDGE_API_ROUTES.ENTRIES, {
      params: { page }
    });
    if (!response.data || !response.data.success) {
      throw new Error(response.data?.message || "Failed to fetch KB entries");
    }
    return {
      data: response.data.data,
      pagination: response.data.meta?.pagination || null
    };
  } catch (error) {
    throw handleApiError(error);
  }
};

export const fetchKBEntryDetail = async (slug: string): Promise<KBEntryDetail> => {
  try {
    const response = await apiClient.get(`${KNOWLEDGE_API_ROUTES.ENTRIES}${slug}/`);
    if (!response.data || !response.data.success) {
      throw new Error(response.data?.message || "Failed to fetch KB entry detail");
    }
    return response.data.data;
  } catch (error) {
    throw handleApiError(error);
  }
};
