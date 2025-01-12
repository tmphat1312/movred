import { apiClient } from "@/lib/api-client";

export async function getCastDetails({ castId }: { castId: number }) {
  const response = await apiClient.get(`/person/${castId}`);
  return response.data;
}
