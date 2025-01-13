import { db } from "@/data/db";
import { ratings } from "@/data/schema";
import { getInternalUser } from "@/lib/data/get-internal-user";
import { and, eq } from "drizzle-orm";

export async function findYourRating({ movieId }: { movieId: number }) {
  const { id: userId } = await getInternalUser();
  const yourRatings = await db
    .select()
    .from(ratings)
    .where(and(eq(ratings.movie_id, movieId), eq(ratings.user_id, userId)));

  return yourRatings[0];
}
