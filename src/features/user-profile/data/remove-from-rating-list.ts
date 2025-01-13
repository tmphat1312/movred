import { and, eq } from "drizzle-orm";

import { db } from "@/data/db";
import { ratings } from "@/data/schema";
import { getInternalUser } from "@/lib/data/get-internal-user";

export async function removeFromRatingList({ movieId }: { movieId: number }) {
  const { id: userId } = await getInternalUser();
  await db
    .delete(ratings)
    .where(and(eq(ratings.user_id, userId), eq(ratings.movie_id, movieId)));
}
