import axios from 'axios';

// Get the backend URL from environment or use default
const getBaseUrl = () => {
  // In development, use the backend URL from env or default to localhost
  if (typeof window !== 'undefined') {
    return (window as any).__BACKEND_URL__ || 'http://localhost:3000';
  }
  return process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000';
};

// Create axios instance with base configuration
export const api = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    // const token = getAuthToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
