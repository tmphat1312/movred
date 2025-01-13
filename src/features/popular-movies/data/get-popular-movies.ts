import { desc } from "drizzle-orm";

import { db } from "@/data/db";
import { movies } from "@/data/schema";
import { apiClient } from "@/lib/api-client";

/**
 * @deprecated This function is deprecated, use `getPopularMovies` instead
 */
export async function getPopularMovies_depreacted() {
  const response = await apiClient.get(`/movie/popular`);
  return response.data.results;
}

export async function getPopularMovies() {
  const popularMovies = await db
    .select({
      title: movies.title,
      release_date: movies.release_date,
      poster_path: movies.poster_path,
      vote_average: movies.vote_average,
      id: movies.id,
    })
    .from(movies)
    .orderBy(desc(movies.popularity))
    .limit(15);

  return popularMovies;
}
