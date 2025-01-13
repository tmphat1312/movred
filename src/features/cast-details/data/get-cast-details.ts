import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

import { db } from "@/data/db";
import { people } from "@/data/schema";
import { apiClient } from "@/lib/api-client";

type Options = {
  castId: number;
};

/**
 * @deprecated This function is deprecated. Use `v2` instead.
 */
export async function v1({ castId }: Options) {
  const response = await apiClient.get(`/person/${castId}`);
  return response.data;
}

export async function v2({ castId }: Options) {
  const details = await db.select().from(people).where(eq(people.id, castId));

  if (details.length === 0) notFound();

  return details[0];
}

export const getCastDetails = v2;
