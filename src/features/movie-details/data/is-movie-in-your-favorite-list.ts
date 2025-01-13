import { and, eq } from "drizzle-orm";

import { db } from "@/data/db";
import { favorites } from "@/data/schema";
import { getInternalUser } from "@/lib/data/get-internal-user";

export async function isMovieInYourFavoriteList({
  movieId,
}: {
  movieId: number;
}) {
  const { id: userId } = await getInternalUser();
  const list = await db
    .select()
    .from(favorites)
    .where(and(eq(favorites.movie_id, movieId), eq(favorites.user_id, userId)));

  return list.length > 0;
}
