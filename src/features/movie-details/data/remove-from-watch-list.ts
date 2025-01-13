import { and, eq } from "drizzle-orm";

import { db } from "@/data/db";
import { watchlist } from "@/data/schema";
import { getInternalUser } from "@/lib/data/get-internal-user";

export async function removeFromWatchList({ movieId }: { movieId: number }) {
  const { id: userId } = await getInternalUser();
  await db
    .delete(watchlist)
    .where(and(eq(watchlist.movie_id, movieId), eq(watchlist.user_id, userId)));
}
