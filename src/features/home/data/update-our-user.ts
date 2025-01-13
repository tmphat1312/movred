import { clerkClient } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

import { db } from "@/data/db";
import { users } from "@/data/schema";

export async function updateOurUser({ clerkId }: { clerkId: string }) {
  const client = await clerkClient();
  const user = await client.users.getUser(clerkId);

  const fullname =
    user.fullName || user.username || user.firstName || user.lastName;

  if (!fullname) return;

  await db
    .update(users)
    .set({
      fullname:
        user.fullName || user.username || user.firstName || user.lastName,
    })
    .where(eq(users.clerk_id, clerkId));
}
