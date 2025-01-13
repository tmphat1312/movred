import { db } from "@/data/db";
import { movies, movies_genres } from "@/data/schema";
import { apiClient } from "@/lib/api-client";
import { desc, eq, inArray } from "drizzle-orm";

type Options = {
  movieId: number;
};

export async function v1({ movieId }: Options) {
  const response = await apiClient.get(`/movie/${movieId}/recommendations`);
  return response.data.results;
}

export async function v2({ movieId }: Options) {
  const genreIds = await db
    .select({
      id: movies_genres.genre_id,
    })
    .from(movies_genres)
    .where(eq(movies_genres.movie_id, movieId));
  const sameGenreMovies = await db
    .selectDistinct({
      title: movies.title,
      release_date: movies.release_date,
      backdrop_path: movies.backdrop_path,
      vote_average: movies.vote_average,
      id: movies.id,
    })
    .from(movies_genres)
    .leftJoin(movies, eq(movies.id, movies_genres.movie_id))
    .where(
      inArray(
        movies_genres.genre_id,
        genreIds.map((g) => g.id),
      ),
    )
    .orderBy(desc(movies.popularity))
    .limit(10);

  return sameGenreMovies;
}

export const getMovieRecommendations = v2;
