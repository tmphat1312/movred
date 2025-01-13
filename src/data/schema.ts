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
  fullname: text(),
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

export const watchlist = sqliteTable(
  "watchlist",
  {
    movie_id: integer().notNull(),
    user_id: integer()
      .notNull()
      .references(() => users.id),
    created_at: text("timestamp")
      .notNull()
      .default(sql`(current_timestamp)`),
  },
  (table) => [
    primaryKey({ name: "pk", columns: [table.movie_id, table.user_id] }),
  ],
);

export const favorites = sqliteTable(
  "favorites",
  {
    movie_id: integer().notNull(),
    user_id: integer()
      .notNull()
      .references(() => users.id),
    created_at: text("timestamp")
      .notNull()
      .default(sql`(current_timestamp)`),
  },
  (table) => [
    primaryKey({ name: "pk", columns: [table.movie_id, table.user_id] }),
  ],
);

export const genres = sqliteTable("genres", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
});

export const movies = sqliteTable("movies", {
  id: integer().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  overview: text(),
  backdrop_path: text(),
  poster_path: text(),
  release_date: text(),
  runtime: integer(),
  vote_average: real().notNull(),
  vote_count: integer().notNull(),
  tmdb_id: integer().notNull(),
  popularity: real().notNull(),
  original_language: text(),
  tagline: text(),
  status: text(),
  revenue: integer(),
  created_at: text("timestamp")
    .notNull()
    .default(sql`(current_timestamp)`),
});

export const movies_genres = sqliteTable(
  "movies_genres",
  {
    movie_id: integer()
      .notNull()
      .references(() => movies.id),
    genre_id: integer()
      .notNull()
      .references(() => genres.id),
  },
  (table) => [
    primaryKey({ name: "pk", columns: [table.movie_id, table.genre_id] }),
  ],
);

export const people = sqliteTable("people", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  profile_path: text(),
  tmdb_id: integer().notNull(),
  also_known_as: text({ mode: "json" }).$type<string[]>(),
  biography: text(),
  birthday: text(),
  place_of_birth: text(),
  popularity: real().notNull(),
  gender: integer(),
  known_for_department: text(),
  created_at: text("timestamp")
    .notNull()
    .default(sql`(current_timestamp)`),
});

export const people_credits = sqliteTable(
  "people_credits",
  {
    person_id: integer()
      .notNull()
      .references(() => people.id),
    movie_id: integer()
      .notNull()
      .references(() => movies.id),
    department: text(),
    job: text(),
    character: text(),
  },
  (table) => [
    primaryKey({ name: "pk", columns: [table.person_id, table.movie_id] }),
  ],
);
