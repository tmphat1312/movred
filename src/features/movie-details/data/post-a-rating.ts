import { db } from "@/data/db";
import { ratings } from "@/data/schema";
import { getInternalUser } from "@/lib/data/get-internal-user";

export async function PostARating({
  movieId,
  rating,
}: {
  movieId: number;
  rating: number;
}) {
  const { id: userId } = await getInternalUser();
  await db.insert(ratings).values({
    movie_id: movieId,
    user_id: userId,
    rating,
  });
}
