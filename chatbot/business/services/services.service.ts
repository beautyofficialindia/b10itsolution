import { apiClient } from "../../services/api.service";
import { API_ROUTES } from "../../constants/api.constants";
import { handleApiError } from "../../utils/apiErrorHandler";
import { Service } from "../types/business.types";

export const fetchServices = async (): Promise<Service[]> => {
  try {
    const response = await apiClient.get(API_ROUTES.SERVICES_ENDPOINT);
    if (!response.data || !response.data.success) {
      throw new Error(response.data?.message || "Failed to fetch services data");
    }
    return response.data.data;
  } catch (error) {
    throw handleApiError(error);
  }
};
