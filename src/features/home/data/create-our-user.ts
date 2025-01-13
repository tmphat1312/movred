import { clerkClient } from "@clerk/nextjs/server";

import { db } from "@/data/db";
import { users } from "@/data/schema";

export async function createOurUser({ clerkId }: { clerkId: string }) {
  const client = await clerkClient();
  const user = await client.users.getUser(clerkId);

  await db
    .insert(users)
    .values({ clerk_id: clerkId, fullname: user.fullName || user.username });
}
