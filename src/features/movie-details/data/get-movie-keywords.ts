import { apiClient } from "@/lib/apiClient";

export async function getMovieKeywords({ movieId }: { movieId: number }) {
  const response = await apiClient.get(`/movie/${movieId}/keywords`);
  return response.data.keywords;
}
