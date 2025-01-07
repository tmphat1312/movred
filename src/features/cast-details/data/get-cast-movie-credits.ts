import { apiClient } from "@/lib/apiClient";

export async function getCastMovieCredits({ castId }: { castId: number }) {
  const response = await apiClient.get(`/person/${castId}/movie_credits`);
  return response.data.cast;
}
