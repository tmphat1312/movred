import { db } from "@/data/db";
import { reviews } from "@/data/schema";
import { getInternalUser } from "@/lib/data/get-internal-user";

export async function PostAReview({
  movieId,
  review,
}: {
  movieId: number;
  review: string;
}) {
  const { id: userId } = await getInternalUser();

  await db.insert(reviews).values({
    movie_id: movieId,
    user_id: userId,
    review,
  });
}
