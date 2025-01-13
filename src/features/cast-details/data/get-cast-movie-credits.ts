import { eq } from "drizzle-orm";

import { db } from "@/data/db";
import { cast, movies } from "@/data/schema";
import { apiClient } from "@/lib/api-client";

type Options = {
  castId: number;
};

/**
 * @deprecated This function is deprecated. Use `v2` instead.
 */
export async function v1({ castId }: Options) {
  const response = await apiClient.get(`/person/${castId}/movie_credits`);
  return response.data.cast;
}

export async function v2({ castId }: Options) {
  const credits = await db
    .select({
      poster_path: movies.poster_path,
      popularity: movies.popularity,
      title: movies.title,
      id: movies.id,
      release_date: movies.release_date,
      character: cast.character,
    })
    .from(cast)
    .leftJoin(movies, eq(cast.movie_id, movies.id))
    .where(eq(cast.person_id, castId));

  return credits;
}

export const getCastMovieCredits = v2;
