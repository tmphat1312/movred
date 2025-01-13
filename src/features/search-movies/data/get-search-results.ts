import { apiClient } from "@/lib/api-client";

type Options = {
  query: string;
  page?: number;
  sort_by?: string;
  include_adult?: "true" | "false";
  year?: number;
  from_score?: number;
  to_score?: number;
};

export async function getSearchResults({
  query,
  page = 1,
  sort_by = "popularity.desc",
  include_adult = "false",
  year,
  from_score = 0,
  to_score = 10,
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
    "vote_average.gte": from_score.toString(),
    "vote_average.lte": to_score.toString(),
  });

  if (year && year > 0) {
    params.set("year", year.toString());
  }

  console.log(params.toString());
  const response = await apiClient.get(`/search/movie?${params}`);

  return response.data;
}
