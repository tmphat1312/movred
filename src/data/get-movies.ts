import { authenticatedApiClient } from "@/lib/apiClient";

export async function getMovies() {
  const response = await authenticatedApiClient.get(
    "/trending/movie/day?language=en-US"
  );

  return response.data;
}
