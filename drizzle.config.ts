export default {
  out: "./migrations",
  schema: "./src/db/schema.ts",
  driver: "better-sqlite",
  dbCredentials: {
    url: "./src/db/movred.sqlite",
  },
};
