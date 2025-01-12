import { apiClient } from "@/lib/api-client";

export async function getPopularMovies() {
  const response = await apiClient.get(`/movie/popular`);
  return response.data.results;
}
