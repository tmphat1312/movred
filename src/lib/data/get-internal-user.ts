import { db } from "@/data/db";
import { users } from "@/data/schema";
import { eq } from "drizzle-orm";

export async function getInternalUser({ clerkId }: { clerkId: string }) {
  const internalUsers = await db
    .select()
    .from(users)
    .where(eq(users.clerk_id, clerkId));
  return internalUsers[0];
}
