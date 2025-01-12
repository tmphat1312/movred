import { db } from "@/data/db";
import { users } from "@/data/schema";
import { eq } from "drizzle-orm";

export async function findUserByClerkId({ clerkId }: { clerkId: string }) {
  const internalUser = await db
    .select()
    .from(users)
    .where(eq(users.clerk_id, clerkId));

  return internalUser[0];
}
