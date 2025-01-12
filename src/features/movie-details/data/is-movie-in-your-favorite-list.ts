import { db } from "@/data/db";
import { favorites } from "@/data/schema";
import { and, eq } from "drizzle-orm";

export async function isMovieInYourFavoriteList({
  movieId,
  userId,
}: {
  movieId: number;
  userId: number;
}) {
  const list = await db
    .select()
    .from(favorites)
    .where(and(eq(favorites.movie_id, movieId), eq(favorites.user_id, userId)));
  return list.length > 0;
}
