import { db } from "@/data/db";
import { reviews, users } from "@/data/schema";
import { eq } from "drizzle-orm";

export async function getMovieReviews({ movieId }: { movieId: number }) {
  return await db
    .select({
      review: reviews.review,
      from: users.fullname,
      movieId: reviews.movie_id,
      userId: reviews.user_id,
    })
    .from(reviews)
    .leftJoin(users, eq(reviews.user_id, users.id))
    .where(eq(reviews.movie_id, movieId));
}
