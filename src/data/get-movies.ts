import { apiClient } from "@/lib/apiClient";
import { SMoviesHttpResponse } from "@/types/http/home-movies";

export async function getMovies() {
  const response = await apiClient.get("/trending/movie/day?language=en-US");

  const typedResponse = SMoviesHttpResponse.mask(response.data);

  return typedResponse;
}
