import { db } from "@/data/db";
import { users } from "@/data/schema";

export async function createOurUser({ clerkId }: { clerkId: string }) {
  await db.insert(users).values({ clerk_id: clerkId });
}
