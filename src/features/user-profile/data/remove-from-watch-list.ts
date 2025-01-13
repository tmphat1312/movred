import { db } from "@/data/db";
import { watchlist } from "@/data/schema";
import { getInternalUser } from "@/lib/data/get-internal-user";
import { and, eq } from "drizzle-orm";

export async function removeFromWatchList({ movieId }: { movieId: number }) {
  const { id: userId } = await getInternalUser();
  await db
    .delete(watchlist)
    .where(and(eq(watchlist.user_id, userId), eq(watchlist.movie_id, movieId)));
}
