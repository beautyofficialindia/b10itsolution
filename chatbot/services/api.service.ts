import axios from "axios";
import { API_TIMEOUT } from "@chatbot/constants/api.constants";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const apiClient = axios.create({
  baseURL,
  timeout: API_TIMEOUT,
  headers: {
    "Content-Type": "application/json",
  }
});
