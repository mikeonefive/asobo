// environment.ts (development)
export const API_BASE_URL = 'http://127.0.0.1:8080/api';
export const FRONTEND_URL = 'http://localhost:4200';

export const environment = {
  production: false,
  apiBaseUrl: API_BASE_URL,
  eventsAddress: `${API_BASE_URL}/events`,
  frontendBaseUrl: FRONTEND_URL,
  minIdentifierLength: 3,
  minPWLength: 6,
};
