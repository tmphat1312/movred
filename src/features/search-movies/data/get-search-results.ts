import { apiClient } from "@/lib/apiClient";
import { SMovieSearchResults } from "@/types/http/movie-search-results";
import { mask } from "superstruct";

type Options = {
  query: string;
  page?: number;
};

export async function getSearchResults({ query, page = 1 }: Options) {
  if (!query)
    return {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0,
    };

  const params = new URLSearchParams({ page: page.toString(), query });
  console.log(`/search/movie?${params}`);
  const response = await apiClient.get(`/search/movie?${params}`);
  const typedResponse = mask(response.data, SMovieSearchResults);

  return typedResponse;
}
