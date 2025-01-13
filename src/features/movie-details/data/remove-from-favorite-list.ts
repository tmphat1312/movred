import { and, eq } from "drizzle-orm";

import { db } from "@/data/db";
import { favorites } from "@/data/schema";
import { getInternalUser } from "@/lib/data/get-internal-user";

export async function removeFromFavoriteList({ movieId }: { movieId: number }) {
  const { id: userId } = await getInternalUser();
  await db
    .delete(favorites)
    .where(and(eq(favorites.movie_id, movieId), eq(favorites.user_id, userId)));
}
