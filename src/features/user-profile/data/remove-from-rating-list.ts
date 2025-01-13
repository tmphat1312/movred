import { and, eq } from "drizzle-orm";

import { db } from "@/data/db";
import { movies, ratings } from "@/data/schema";
import { getInternalUser } from "@/lib/data/get-internal-user";

export async function removeFromRatingList({ movieId }: { movieId: number }) {
  const [{ id: userId }, { vote_average, vote_count }] = await Promise.all([
    getInternalUser(),
    db
      .select()
      .from(movies)
      .where(eq(movies.id, movieId))
      .then((res) => res[0]),
  ]);
  const rating = await db
    .select()
    .from(ratings)
    .where(and(eq(ratings.user_id, userId), eq(ratings.movie_id, movieId)))
    .then((res) => res[0].rating);

  await db.transaction(async (tx) => {
    await tx
      .delete(ratings)
      .where(and(eq(ratings.user_id, userId), eq(ratings.movie_id, movieId)));

    const newVoteAverage = Number(
      ((vote_average * vote_count - rating) / (vote_count - 1))
        .toString()
        .split("0")[0],
    );
    const newVoteCount = vote_count - 1;

    await tx
      .update(movies)
      .set({
        vote_average: newVoteAverage,
        vote_count: newVoteCount,
      })
      .where(eq(movies.id, movieId));
  });
}
