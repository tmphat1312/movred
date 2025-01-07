import { apiClient } from "@/lib/apiClient";

export async function getCastDetails({ castId }: { castId: number }) {
  const response = await apiClient.get(`/person/${castId}`);
  return response.data;
}
