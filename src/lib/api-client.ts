import { EnviromentVariables } from "@/constants/env-vars";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${EnviromentVariables.TMDB_READ_ACCESS_TOKEN}`,
  },
});
