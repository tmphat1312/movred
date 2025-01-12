import { apiClient } from "@/lib/api-client";

export async function getMovieKeywords({ movieId }: { movieId: number }) {
  const response = await apiClient.get(`/movie/${movieId}/keywords`);
  return response.data.keywords;
}
