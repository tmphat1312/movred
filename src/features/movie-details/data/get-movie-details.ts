import { apiClient } from "@/lib/api-client";

type Options = {
  movie_id: number;
};

export async function getMovieDetails({ movie_id }: Options) {
  const response = await apiClient.get(`/movie/${movie_id}`);
  return response.data;
}
