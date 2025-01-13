import { db } from "@/data/db";
import { ratings } from "@/data/schema";
import { eq } from "drizzle-orm";

export async function getRatingList({ userId }: { userId: number }) {
  const list = await db
    .select()
    .from(ratings)
    .where(eq(ratings.user_id, userId));
  return list;
}
