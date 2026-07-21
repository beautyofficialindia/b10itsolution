import { apiClient } from "./api.service";
import { API_ROUTES } from "@chatbot/constants/api.constants";
import { HealthStatus } from "@chatbot/types/api.types";
import { handleApiError } from "@chatbot/utils/apiErrorHandler";

export const checkHealth = async (): Promise<HealthStatus> => {
  try {
    await apiClient.get(API_ROUTES.HEALTH_CHECK);
    
    return {
      healthy: true,
      message: "Backend is fully operational",
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    const apiError = handleApiError(error);
    return {
      healthy: false,
      message: apiError.message,
      timestamp: new Date().toISOString()
    };
  }
};
