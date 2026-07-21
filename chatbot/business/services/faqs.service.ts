import { apiClient } from "../../services/api.service";
import { API_ROUTES } from "../../constants/api.constants";
import { handleApiError } from "../../utils/apiErrorHandler";
import { FAQ } from "../types/business.types";

export const fetchFaqs = async (): Promise<FAQ[]> => {
  try {
    const response = await apiClient.get(API_ROUTES.FAQS_ENDPOINT);
    if (!response.data || !response.data.success) {
      throw new Error(response.data?.message || "Failed to fetch FAQs data");
    }
    return response.data.data;
  } catch (error) {
    throw handleApiError(error);
  }
};
