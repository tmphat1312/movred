import { db } from "@/data/db";
import { users } from "@/data/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function getInternalUser() {
  const { userId: clerkId } = await auth();

  if (!clerkId) redirect("/sign-in");

  const internalUsers = await db
    .select()
    .from(users)
    .where(eq(users.clerk_id, clerkId));

  return internalUsers[0];
}
