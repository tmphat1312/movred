import { db } from "@/data/db";
import { reviews } from "@/data/schema";
import { eq } from "drizzle-orm";

export async function getMovieReviews({ movieId }: { movieId: number }) {
  return await db.select().from(reviews).where(eq(reviews.movie_id, movieId));
}
