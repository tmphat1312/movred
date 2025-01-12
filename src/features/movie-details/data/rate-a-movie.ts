import { db } from "@/data/db";
import { ratings } from "@/data/schema";

export async function rateAMovie({
  movieId,
  userId,
  rating,
}: {
  movieId: number;
  userId: number;
  rating: number;
}) {
  await db
    .insert(ratings)
    .values({ movie_id: movieId, user_id: userId, rating });
}
