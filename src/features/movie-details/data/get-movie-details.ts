import { apiClient } from "@/lib/api-client";
import { SMovieDetailsHttpResponse } from "@/types/http/movie-detail";
import { mask } from "superstruct";

type Options = {
  movie_id: number;
};

export async function getMovieDetails({ movie_id }: Options) {
  const response = await apiClient.get(`/movie/${movie_id}`);
  const typedResponse = mask(response.data, SMovieDetailsHttpResponse);

  return typedResponse;
}
