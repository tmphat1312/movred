import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";

import { db } from "@/data/db";
import { ratings } from "@/data/schema";
import { getInternalUser } from "@/lib/data/get-internal-user";

export async function findYourRating({ movieId }: { movieId: number }) {
  const { userId: clerkId } = await auth();

  if (!clerkId) return null;

  const { id: userId } = await getInternalUser();

  const yourRatings = await db
    .select()
    .from(ratings)
    .where(and(eq(ratings.movie_id, movieId), eq(ratings.user_id, userId)));

  return yourRatings[0];
}
