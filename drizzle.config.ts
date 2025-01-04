export default {
  out: "./migrations",
  schema: "./src/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: "./movred.sqlite",
  },
};
