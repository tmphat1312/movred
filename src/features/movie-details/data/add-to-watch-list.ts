import { db } from "@/data/db";
import { watchlist } from "@/data/schema";

export async function addToWatchList({
  movieId,
  userId,
}: {
  movieId: number;
  userId: number;
}) {
  await db.insert(watchlist).values({ movie_id: movieId, user_id: userId });
}
