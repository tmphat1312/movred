import { apiClient } from "@/lib/api-client";

export async function getMovieCredits({ movie_id }: { movie_id: number }) {
  const response = await apiClient.get(`/movie/${movie_id}/credits`);
  return response.data;
}
