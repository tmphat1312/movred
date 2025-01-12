import { db } from "@/data/db";
import { favorites } from "@/data/schema";
import { eq } from "drizzle-orm";

export async function getFavoriteList({ userId }: { userId: number }) {
  const list = await db
    .select()
    .from(favorites)
    .where(eq(favorites.user_id, userId));
  return list;
}
