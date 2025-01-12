import { sql } from "drizzle-orm";
import {
  integer,
  primaryKey,
  real,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer().primaryKey({ autoIncrement: true }),
  clerk_id: text().notNull(),
});

export const trending_movies = sqliteTable("trending_movies", {
  id: integer().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  release_date: text(),
  poster_path: text(),
  vote_average: real().notNull(),
  tmdb_id: integer().notNull(),
  time_window: text({ enum: ["day", "week"] }).notNull(),
});

export const upcoming_movies = sqliteTable("upcoming_movies", {
  id: integer().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  backdrop_path: text(),
  tmdb_id: integer().notNull(),
  created_at: text("timestamp")
    .notNull()
    .default(sql`(current_timestamp)`),
});

export const latest_trailers = sqliteTable("latest_trailers", {
  id: integer().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  backdrop_path: text(),
  tmdb_id: integer().notNull(),
  key: text().notNull(),
  name: text().notNull(),
  created_at: text("timestamp")
    .notNull()
    .default(sql`(current_timestamp)`),
});

export const popular_movies = sqliteTable("popular_movies", {
  id: integer().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  release_date: text(),
  poster_path: text(),
  vote_average: real().notNull(),
  tmdb_id: integer().notNull(),
  popularity: real().notNull(),
  created_at: text("timestamp")
    .notNull()
    .default(sql`(current_timestamp)`),
});

export const reviews = sqliteTable(
  "reviews",
  {
    movie_id: integer().notNull(),
    user_id: integer()
      .notNull()
      .references(() => users.id),
    review: text().notNull(),
    created_at: text("timestamp")
      .notNull()
      .default(sql`(current_timestamp)`),
  },
  (table) => [
    primaryKey({ name: "pk", columns: [table.movie_id, table.user_id] }),
  ],
);

export const ratings = sqliteTable(
  "ratings",
  {
    movie_id: integer().notNull(),
    user_id: integer()
      .notNull()
      .references(() => users.id),
    rating: real().notNull(),
    created_at: text("timestamp")
      .notNull()
      .default(sql`(current_timestamp)`),
  },
  (table) => [
    primaryKey({ name: "pk", columns: [table.movie_id, table.user_id] }),
  ],
);
