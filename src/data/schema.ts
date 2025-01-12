import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer().primaryKey({ autoIncrement: true }),
  clerk_id: text().notNull(),
});

export const trending_movies = sqliteTable("trending_movies", {
  id: integer().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  release_date: text(),
  poster_path: text(),
  vote_average: text(),
  tmdb_id: integer().notNull(),
  time_window: text({ enum: ["day", "week"] }).notNull(),
});
