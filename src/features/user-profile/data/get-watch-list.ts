import { db } from "@/data/db";
import { watchlist } from "@/data/schema";
import { eq } from "drizzle-orm";

export async function getWatchList({ userId }: { userId: number }) {
  const list = await db
    .select()
    .from(watchlist)
    .where(eq(watchlist.user_id, userId));
  return list;
}
