import { apiClient } from "./api.service";
import { API_ROUTES } from "@chatbot/constants/api.constants";
import { SOURCE_CHANNEL } from "@chatbot/constants/session.constants";
import { handleApiError } from "@chatbot/utils/apiErrorHandler";

export const initializeBackendSession = async (): Promise<void> => {
  try {
    await apiClient.post(API_ROUTES.INIT_SESSION, {
      source_channel: SOURCE_CHANNEL
    });
  } catch (error) {
    throw handleApiError(error);
  }
};
