import { apiClient } from "../../services/api.service";
import { API_ROUTES } from "../../constants/api.constants";
import { handleApiError } from "../../utils/apiErrorHandler";
import { Company } from "../types/business.types";

export const fetchCompany = async (): Promise<Company> => {
  try {
    const response = await apiClient.get(API_ROUTES.COMPANY_ENDPOINT);
    if (!response.data || !response.data.success) {
      throw new Error(response.data?.message || "Failed to fetch company data");
    }
    return response.data.data;
  } catch (error) {
    throw handleApiError(error);
  }
};
