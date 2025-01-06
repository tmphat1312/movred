import { apiClient } from "@/lib/apiClient";

export async function getPopularMovies() {
  const response = await apiClient.get(`/movie/popular`);
  return response.data.results;
}
