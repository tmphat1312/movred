import { db } from "@/data/db";
import { watchlist } from "@/data/schema";
import { and, eq } from "drizzle-orm";

export async function isMovieInYourWatchList({
  movieId,
  userId,
}: {
  movieId: number;
  userId: number;
}) {
  const list = await db
    .select()
    .from(watchlist)
    .where(and(eq(watchlist.movie_id, movieId), eq(watchlist.user_id, userId)));
  return list.length > 0;
}
