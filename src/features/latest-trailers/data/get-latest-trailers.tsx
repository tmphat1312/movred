import { desc } from "drizzle-orm";

import { db } from "@/data/db";
import { latest_trailers } from "@/data/schema";
import { apiClient } from "@/lib/api-client";

export async function getMovieTrailer({ id }: { id: number }) {
  const response = await apiClient.get(`/movie/${id}/videos`);
  return response.data.results[0];
}

/**
 * @deprecated This function is deprecated, use `getLatestTrailers` instead
 */
export async function getLatestTrailers_deprecated() {
  const response = await apiClient.get("/movie/upcoming");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const upComingResults = response.data.results as any[];

  const trailerPromises = await Promise.all(
    upComingResults.map(getMovieTrailer),
  );

  const latestTrailers = upComingResults
    .map((movie, index) => {
      const trailer = trailerPromises[index];
      return trailer
        ? {
            ...trailer,
            ...movie,
          }
        : null;
    })
    .filter(Boolean);

  return latestTrailers;
}

export async function getLatestTrailers() {
  const latestTrailers = await db
    .select({
      id: latest_trailers.tmdb_id,
      key: latest_trailers.key,
      name: latest_trailers.name,
      title: latest_trailers.title,
      backdrop_path: latest_trailers.backdrop_path,
    })
    .from(latest_trailers)
    .limit(15)
    .orderBy(desc(latest_trailers.created_at));

  return latestTrailers;
}
