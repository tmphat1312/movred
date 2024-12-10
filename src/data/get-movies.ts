import { authenticatedApiClient } from "@/lib/apiClient";
import { SMoviesHttpResponse } from "@/types/http/movies";

export async function getMovies() {
  const response = await authenticatedApiClient.get(
    "/trending/movie/day?language=en-US"
  );

  const typedResponse = SMoviesHttpResponse.mask(response.data);

  return typedResponse;
}
