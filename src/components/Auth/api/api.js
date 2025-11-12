// This is a constant code unless changes are necessary this handles the requests
// Here the data are stored inmemory then to chich you attach that token to requests
// Now if the token expires or disappears it is to show 401(unauthorised) but here is the magic --
// -It will request the refresh token from the cookies which if it exists in the db, the backend genrates a new shortlived token silently.
// So here is the cool part the short lived token is the sacrificial lamb that cant get caught because it is in memory and will only be valid if not -
// --Refreshed, or closed but it expires in 3 mins if access is gotten "Lucky but not so lucky MotherFucker" which throws 401 and a new token that also expires after 3 mins
// Hehe boi so now the token is not visible anywhere😂😂

import axios from "axios";

const api = axios.create({
  baseURL: "https://backend.northernhavenaxis.com/api",
  withCredentials: true, // includes cookies for cross-site requests
});

let accessToken = null;

// Store the in-memory access token
export const setAccessToken = (token) => {
  accessToken = token;
};

// Attach access token to every request
api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// Response interceptor to handle 401 and refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true;

      try {
        // Call refresh endpoint (cookie automatically included)
        const refreshResponse = await axios.post(
          "https://backend.northernhavenaxis.com/api/refresh",
          {},
          { withCredentials: true }
        );

        const newAccessToken = refreshResponse.data.access_token;
        setAccessToken(newAccessToken);

        // Retry the original request with new token
        error.config.headers.Authorization = `Bearer ${newAccessToken}`;
        return api.request(error.config);
      } catch (refreshError) {
        console.error("Session expired. Please log in again.");
      }
    }

    return Promise.reject(error);
  }
);

export default api;
