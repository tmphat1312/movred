import { db } from "@/data/db";
import { favorites } from "@/data/schema";

export async function markAsFavorite({
  movieId,
  userId,
}: {
  movieId: number;
  userId: number;
}) {
  await db.insert(favorites).values({ movie_id: movieId, user_id: userId });
}
