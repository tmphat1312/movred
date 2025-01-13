import { apiClient } from "@/lib/api-client";

type Options = {
  query: string;
  page?: number;
  sort_by?: string;
  include_adult?: "true" | "false";
  year?: number;
};

export async function getSearchResults({
  query,
  page = 1,
  sort_by = "popularity.desc",
  include_adult = "false",
}: Options) {
  if (!query) {
    return {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0,
    };
  }

  const params = new URLSearchParams({
    page: page.toString(),
    query,
    sort_by,
    include_adult,
  });
  console.log(params.toString());
  const response = await apiClient.get(`/search/movie?${params}`);

  return response.data;
}
