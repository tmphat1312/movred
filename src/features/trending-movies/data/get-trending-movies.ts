import { apiClient } from "@/lib/apiClient";
import { STrendingMoviesHttpResponse } from "@/types/http/trending-movies";
import { mask } from "superstruct";

type Options = {
  time_window?: "day" | "week";
  page?: number;
};

export async function getTrendingMovies({
  time_window = "day",
  page = 1,
}: Options) {
  const params = new URLSearchParams({ page: page.toString() });

  const response = await apiClient.get(
    `/trending/movie/${time_window}?${params}`,
  );
  const typedResponse = mask(response.data, STrendingMoviesHttpResponse);

  return typedResponse.results;
}
