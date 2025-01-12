import { apiClient } from "@/lib/api-client";

export async function getExternalIds({ movieId }: { movieId: number }) {
  const response = await apiClient.get(`/movie/${movieId}/external_ids`);
  return response.data;
}
