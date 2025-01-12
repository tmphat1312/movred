import { db } from "@/data/db";
import { reviews } from "@/data/schema";
import { and, eq } from "drizzle-orm";

export async function findYourReview({
  movieId,
  userId,
}: {
  movieId: number;
  userId: number;
}) {
  return await db
    .select()
    .from(reviews)
    .where(and(eq(reviews.movie_id, movieId), eq(reviews.user_id, userId)));
}
