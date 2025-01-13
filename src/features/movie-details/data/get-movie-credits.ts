import { db } from "@/data/db";
import { cast, crew, people } from "@/data/schema";
import { apiClient } from "@/lib/api-client";
import { eq } from "drizzle-orm";

/**
 * @deprecated
 */
export async function v1({ movie_id }: { movie_id: number }) {
  const response = await apiClient.get(`/movie/${movie_id}/credits`);
  return response.data;
}

export async function v2_crew({ movie_id }: { movie_id: number }) {
  const crewList = await db
    .select({
      name: people.name,
      job: crew.job,
    })
    .from(crew)
    .leftJoin(people, eq(crew.person_id, people.id))
    .where(eq(crew.movie_id, movie_id));
  return crewList;
}

export async function v2_cast({ movie_id }: { movie_id: number }) {
  const castList = await db
    .select({
      name: people.name,
      character: cast.character,
      profile_path: people.profile_path,
      id: people.id,
    })
    .from(cast)
    .leftJoin(people, eq(cast.person_id, people.id))
    .where(eq(cast.movie_id, movie_id));
  return castList;
}

export const getMovieCredits = v1;
export const getMovieCrew = v2_crew;
export const getMovieCast = v2_cast;
