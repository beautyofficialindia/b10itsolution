import { ApiError } from "@chatbot/types/api.types";
import axios, { AxiosError } from "axios";

export const handleApiError = (error: unknown): ApiError => {
  const defaultError: ApiError = {
    status: 500,
    message: "We're having trouble connecting to our AI assistant. Please try again in a few moments."
  };

  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError;
    
    if (axiosError.code === "ECONNABORTED") {
      return {
        status: 408,
        message: "The connection to our AI assistant timed out. Please try again in a few moments.",
        code: "TIMEOUT"
      };
    }
    
    if (!axiosError.response) {
      return {
        status: 503,
        message: "We're having trouble connecting to our AI assistant. Please try again in a few moments.",
        code: "NETWORK_ERROR"
      };
    }
    
    return {
      status: axiosError.response.status,
      message: "We're having trouble connecting to our AI assistant. Please try again in a few moments.",
      code: axiosError.code
    };
  }

  return defaultError;
};
