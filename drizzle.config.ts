import { EnviromentVariables } from "@/constants/env-vars";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./migrations",
  schema: "./src/db/schema.ts",
  dialect: "turso",
  dbCredentials: {
    url: EnviromentVariables.DATABASE_URL,
    authToken: EnviromentVariables.DATABASE_AUTH_TOKEN,
  },
});
