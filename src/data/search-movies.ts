import { apiClient } from "@/lib/apiClient";

type Options = {
  title: string;
  page: number;
};

export async function searchMovies({ title, page }: Options) {
  const response = await apiClient.get(
    `/search/movie?query=${title}&page=${page}`,
  );

  return response.data;
}
