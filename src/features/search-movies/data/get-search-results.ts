import { apiClient } from "@/lib/api-client";

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
  if (!query) {
    return {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0,
    };
  }

  const params = new URLSearchParams({ page: page.toString(), query, sort_by });
  const response = await apiClient.get(`/search/movie?${params}`);

  return response.data;
}
