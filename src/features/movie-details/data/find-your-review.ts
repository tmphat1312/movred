import { db } from "@/data/db";
import { reviews } from "@/data/schema";
import { getInternalUser } from "@/lib/data/get-internal-user";
import { and, eq } from "drizzle-orm";

export async function findYourReview({ movieId }: { movieId: number }) {
  const { id: userId } = await getInternalUser();
  const yourReviews = await db
    .select()
    .from(reviews)
    .where(and(eq(reviews.movie_id, movieId), eq(reviews.user_id, userId)));

  return yourReviews[0];
}
