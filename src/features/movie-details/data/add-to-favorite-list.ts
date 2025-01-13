import { db } from "@/data/db";
import { favorites } from "@/data/schema";
import { getInternalUser } from "@/lib/data/get-internal-user";

export async function addToFavoriteList({ movieId }: { movieId: number }) {
  const { id: userId } = await getInternalUser();
  await db.insert(favorites).values({ movie_id: movieId, user_id: userId });
}
