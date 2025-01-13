import { db } from "@/data/db";
import { watchlist } from "@/data/schema";
import { getInternalUser } from "@/lib/data/get-internal-user";

export async function addToWatchList({ movieId }: { movieId: number }) {
  const { id: userId } = await getInternalUser();
  await db.insert(watchlist).values({ movie_id: movieId, user_id: userId });
}
