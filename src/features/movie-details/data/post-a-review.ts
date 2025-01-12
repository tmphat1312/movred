import { db } from "@/data/db";
import { reviews } from "@/data/schema";

export async function PostAReview({
  movieId,
  userId,
  review,
}: {
  movieId: number;
  userId: number;
  review: string;
}) {
  await db.insert(reviews).values({
    movie_id: movieId,
    user_id: userId,
    review,
  });
}
