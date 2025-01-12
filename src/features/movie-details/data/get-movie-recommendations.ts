import { apiClient } from "@/lib/api-client";

export async function getMovieRecommendations({
  movieId,
}: {
  movieId: number;
}) {
  const response = await apiClient.get(`/movie/${movieId}/recommendations`);
  return response.data.results;
}
