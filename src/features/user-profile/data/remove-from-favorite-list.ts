import { db } from "@/data/db";
import { favorites } from "@/data/schema";
import { getInternalUser } from "@/lib/data/get-internal-user";
import { and, eq } from "drizzle-orm";

export async function removeFromFavoriteList({ movieId }: { movieId: number }) {
  const { id: userId } = await getInternalUser();
  await db
    .delete(favorites)
    .where(and(eq(favorites.user_id, userId), eq(favorites.movie_id, movieId)));
}
