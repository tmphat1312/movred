import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

import { db } from "@/data/db";
import { genres, movies, movies_genres } from "@/data/schema";
import { apiClient } from "@/lib/api-client";

type Options = {
  movie_id: number;
};

/**
 * @deprecated This function is deprecated. Use `v2` instead.
 */
export async function v1({ movie_id }: Options) {
  const response = await apiClient.get(`/movie/${movie_id}`);
  return response.data;
}

export async function v2({ movie_id }: Options) {
  const [foundMovies, moveGenres] = await Promise.all([
    db.select().from(movies).where(eq(movies.id, movie_id)),
    db
      .select()
      .from(genres)
      .leftJoin(movies_genres, eq(genres.id, movies_genres.genre_id))
      .where(eq(movies_genres.movie_id, movie_id)),
  ]);

  if (foundMovies.length === 0) {
    notFound();
  }

  return {
    ...foundMovies[0],
    genres: moveGenres.map((genre) => genre.genres),
  };
}

export const getMovieDetails = v2;
