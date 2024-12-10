import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-type": "application/json",
  },
});

export const authenticatedApiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
  },
});
