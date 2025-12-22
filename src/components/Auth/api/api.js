import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

let accessToken = null;

export const setAccessToken = (token) => {
  accessToken = token;
};

api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true;
    }

    try {
      const refreshResponse = await axios.post(
        "https://backend.northernhavenaxis.com/api/refresh",
        {},
        { withCredentials: true }
      );

      const newToken = refreshResponse.data.access_token;
      setAccessToken(newToken);

      error.config.headers.Authorization = `Bearer ${newToken}`;
      return api.request(error.config);
    } catch (responseError) {
      console.error("Session expired. Please log in again.");
    }

    return Promise.reject(error);
  }
);

export default api;
