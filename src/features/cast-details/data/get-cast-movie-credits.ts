import { apiClient } from "@/lib/api-client";

export async function getCastMovieCredits({ castId }: { castId: number }) {
  const response = await apiClient.get(`/person/${castId}/movie_credits`);
  return response.data.cast;
}
