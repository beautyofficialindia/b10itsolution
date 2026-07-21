export interface ApiError {
  status: number;
  message: string;
  code?: string;
}

export interface ApiResponse<T = unknown> {
  data: T;
  message?: string;
}

export interface HealthStatus {
  healthy: boolean;
  message: string;
  timestamp: string;
}
