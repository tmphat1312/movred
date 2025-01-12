import { auth } from "@clerk/nextjs/server";
import { findUserByClerkId } from "../data/find-user-by-clerk-id";
import { createOurUser } from "../data/create-our-user";

export async function CreateOurUser() {
  const { userId } = await auth();

  if (!userId) return null;

  const internalUser = await findUserByClerkId({ clerkId: userId });

  if (!internalUser) {
    await createOurUser({ clerkId: userId });
  }

  return null;
}
