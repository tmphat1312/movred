import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { EnviromentVariables } from "@/constants/env-vars";

const client = createClient({
  url: EnviromentVariables.DATABASE_URL,
  authToken: EnviromentVariables.DATABASE_AUTH_TOKEN,
});

export const db = drizzle({ client, casing: "snake_case" });
