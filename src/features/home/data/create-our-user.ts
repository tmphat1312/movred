import { auth, clerkClient } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

import { db } from "@/data/db";
import { users } from "@/data/schema";
import { findUserByClerkId } from "./find-user-by-clerk-id";

export async function createOurUser() {
  const { userId: clerkId } = await auth();

  if (!clerkId) return;

  const client = await clerkClient();

  const user = await client.users.getUser(clerkId);
  const internalUser = await findUserByClerkId({ clerkId });

  const fullname = user.fullName || user.username;

  if (internalUser) {
    await db.update(users).set({ fullname }).where(eq(users.clerk_id, clerkId));
  } else {
    await db.insert(users).values({ clerk_id: clerkId, fullname });
  }
}
