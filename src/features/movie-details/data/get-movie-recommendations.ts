import { apiClient } from "@/lib/apiClient";

export async function getMovieRecommendations({
  movieId,
}: {
  movieId: number;
}) {
  const response = await apiClient.get(`/movie/${movieId}/recommendations`);
  return response.data.results;
}
