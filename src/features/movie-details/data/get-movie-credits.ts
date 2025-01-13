import { db } from "@/data/db";
import { crew, people } from "@/data/schema";
import { apiClient } from "@/lib/api-client";
import { eq } from "drizzle-orm";

/**
 * @deprecated
 */
export async function v1({ movie_id }: { movie_id: number }) {
  const response = await apiClient.get(`/movie/${movie_id}/credits`);
  return response.data;
}

export async function v2({ movie_id }: { movie_id: number }) {
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

export const getMovieCredits = v1;
export const getMovieCrew = v2;
