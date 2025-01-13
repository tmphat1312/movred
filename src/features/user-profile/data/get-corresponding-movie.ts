import { apiClient } from "@/lib/api-client";
import { Nullable } from "@/types/utilities";

export async function getCorrespondingMovie({
  movie_id,
}: {
  movie_id: number;
}) {
  const { data } = await apiClient.get(`/movie/${movie_id}`);

  return {
    title: data.title,
    poster_path: data.poster_path,
    backdrop_path: data.backdrop_path,
  } as {
    title: string;
    poster_path: Nullable<string>;
    backdrop_path: Nullable<string>;
  };
}
