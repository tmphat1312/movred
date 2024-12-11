import { apiClient } from "@/lib/apiClient";

type Options = {
  movie_id: number;
};

export async function getMovieDetail({ movie_id }: Options) {
  const response = await apiClient.get(`/movie/${movie_id}`);

  return response.data;
}
