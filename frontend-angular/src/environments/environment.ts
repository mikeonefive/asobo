// environment.ts (development)
export const APIBASEURL = 'http://127.0.0.1:8080/api';
export const FRONTEND_URL = 'http://localhost:4200';

export const environment = {
  production: false,
  apiBaseUrl: APIBASEURL,
  eventsAddress: `${APIBASEURL}/events`,
  frontendBaseUrl: FRONTEND_URL,
};
