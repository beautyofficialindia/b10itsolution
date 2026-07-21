import { apiClient } from "./api.service";
import { API_ROUTES } from "@chatbot/constants/api.constants";
import { ChatRequest, ChatResponse } from "@chatbot/types/chat.types";
import { handleApiError } from "@chatbot/utils/apiErrorHandler";

export const sendMessage = async (payload: ChatRequest): Promise<ChatResponse> => {
  try {
    const response = await apiClient.post<ChatResponse>(API_ROUTES.CHAT_ENDPOINT, payload);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
};
