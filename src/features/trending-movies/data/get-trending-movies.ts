import { eq } from "drizzle-orm";

import { apiClient } from "@/lib/api-client";
import { db } from "@/data/db";
import { trending_movies } from "@/data/schema";

type Options = {
  time_window?: "day" | "week";
};

/**
 * @deprecated Use getTrendingMovies instead
 */
export async function getTrendingMoviesV1({ time_window = "day" }: Options) {
  const response = await apiClient.get(`/trending/movie/${time_window}`);
  return response.data.results;
}

export async function getTrendingMovies({ time_window = "day" }: Options) {
  const trendingMovies = await db
    .select({
      title: trending_movies.title,
      release_date: trending_movies.release_date,
      poster_path: trending_movies.poster_path,
      vote_average: trending_movies.vote_average,
      id: trending_movies.tmdb_id,
    })
    .from(trending_movies)
    .where(eq(trending_movies.time_window, time_window))
    .limit(20);

  return trendingMovies;
}
