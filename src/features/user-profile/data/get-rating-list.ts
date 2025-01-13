import { eq } from "drizzle-orm";

import { db } from "@/data/db";
import { ratings } from "@/data/schema";
import { getInternalUser } from "@/lib/data/get-internal-user";

export async function getRatingList() {
  const { id: userId } = await getInternalUser();
  const list = await db
    .select()
    .from(ratings)
    .where(eq(ratings.user_id, userId));

  const listWithMovieDetails = await Promise.all(
    list.map(async (item) => {
      const { getCorrespondingMovie } = await import(
        "@/features/user-profile/data/get-corresponding-movie"
      );
      const movie = await getCorrespondingMovie({ movie_id: item.movie_id });
      return {
        ...item,
        ...movie,
      };
    }),
  );

  return listWithMovieDetails;
}
