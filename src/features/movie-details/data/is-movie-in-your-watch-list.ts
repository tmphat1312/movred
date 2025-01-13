import { and, eq } from "drizzle-orm";

import { db } from "@/data/db";
import { watchlist } from "@/data/schema";
import { getInternalUser } from "@/lib/data/get-internal-user";

export async function isMovieInYourWatchList({ movieId }: { movieId: number }) {
  const { id: userId } = await getInternalUser();
  const list = await db
    .select()
    .from(watchlist)
    .where(and(eq(watchlist.movie_id, movieId), eq(watchlist.user_id, userId)));
  return list.length > 0;
}
