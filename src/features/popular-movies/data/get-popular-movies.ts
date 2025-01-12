import { db } from "@/data/db";
import { popular_movies } from "@/data/schema";
import { apiClient } from "@/lib/api-client";
import { desc } from "drizzle-orm";

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
      title: popular_movies.title,
      release_date: popular_movies.release_date,
      poster_path: popular_movies.poster_path,
      vote_average: popular_movies.vote_average,
      id: popular_movies.tmdb_id,
    })
    .from(popular_movies)
    .limit(15)
    .orderBy(desc(popular_movies.popularity));

  return popularMovies;
}
