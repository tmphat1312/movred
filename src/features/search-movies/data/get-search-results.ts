import { apiClient } from "@/lib/api-client";
import { SMovieSearchResults } from "@/types/http/movie-search-results";
import { mask } from "superstruct";

type Options = {
  query: string;
  page?: number;
  sort_by?: string;
};

export async function getSearchResults({
  query,
  page = 1,
  sort_by = "popularity.desc",
}: Options) {
  if (!query)
    return {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0,
    };

  const params = new URLSearchParams({ page: page.toString(), query, sort_by });
  const response = await apiClient.get(`/search/movie?${params}`);
  const typedResponse = mask(response.data, SMovieSearchResults);

  return typedResponse;
}
