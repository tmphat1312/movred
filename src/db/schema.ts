import {
  sqliteTable,
  integer,
  text,
  real, // Thay cho float
  primaryKey,
} from "drizzle-orm/sqlite-core";

// Table Movies
export const movies = sqliteTable("movies", {
  id: integer("id").primaryKey(),
  tmdbId: integer("tmdb_id"),
  title: text("title"),
  originalTitle: text("original_title"),
  originalLanguage: text("original_language"),
  overview: text("overview"),
  tagline: text("tagline"),
  homepage: text("homepage"),
  imdbId: text("imdb_id"),
  releaseDate: text("release_date"),
  runtime: integer("runtime"),
  budget: integer("budget"),
  revenue: integer("revenue"),
  popularity: real("popularity"),
  voteAverage: real("vote_average"),
  voteCount: integer("vote_count"),
  status: text("status"),
  video: integer("video"),
  adult: integer("adult"),
  backdropPath: text("backdrop_path"),
  posterPath: text("poster_path"),
});

// Table Genres
export const genres = sqliteTable("genres", {
  id: integer("id").primaryKey(),
  tmdbId: integer("tmdb_id"),
  name: text("name"),
});

// Table MovieGenres
export const movieGenres = sqliteTable(
  "movie_genres",
  {
    genreId: integer("genre_id").references(() => genres.id),
    movieId: integer("movie_id").references(() => movies.id),
  },
  (table) => ({
    pk: primaryKey(table.genreId, table.movieId),
  }),
);

// Table People
export const people = sqliteTable("people", {
  id: integer("id").primaryKey(),
  tmdbId: integer("tmdb_id"),
  name: text("name"),
  originalName: text("original_name"),
  gender: integer("gender"),
  adult: integer("adult"),
  biography: text("biography"),
  birthday: text("birthday"),
  deathday: text("deathday"),
  placeOfBirth: text("place_of_birth"),
  knownForDepartment: text("known_for_department"),
  popularity: real("popularity"),
  profilePath: text("profile_path"),
  homepage: text("homepage"),
  imdbId: text("imdb_id"),
});

// Table MovieCasts
export const movieCasts = sqliteTable("movie_casts", {
  id: integer("id").primaryKey(),
  movieId: integer("movie_id").references(() => movies.id),
  personId: integer("person_id").references(() => people.id),
  character: text("character"),
  castOrder: integer("cast_order"),
});

// Table Users
export const users = sqliteTable("users", {
  id: integer("id").primaryKey(),
});

// Table MoviesReviews
export const moviesReviews = sqliteTable("movies_reviews", {
  id: integer("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  movieId: integer("movie_id")
    .notNull()
    .references(() => movies.id),
  rating: integer("rating").notNull(),
  review: text("review"),
  createdAt: text("created_at").default("CURRENT_TIMESTAMP"),
});

// Table WatchList
export const watchList = sqliteTable("watch_list", {
  id: integer("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  movieId: integer("movie_id")
    .notNull()
    .references(() => movies.id),
  addedAt: text("added_at").default("CURRENT_TIMESTAMP"),
});

// Table Favourites
export const favourites = sqliteTable("favourites", {
  id: integer("id").primaryKey(),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  movieId: integer("movie_id").notNull(),
  addedAt: text("added_at").default("CURRENT_TIMESTAMP"),
});

// Table WatchHistory
export const watchHistory = sqliteTable("watch_history", {
  id: integer("id").primaryKey(), // Khóa chính
  userId: integer("user_id")
    .notNull()
    .references(() => users.id), // Liên kết đến bảng users
  movieId: integer("movie_id")
    .notNull()
    .references(() => movies.id), // Liên kết đến bảng movies
  watchedAt: text("watched_at").default("CURRENT_TIMESTAMP"),
});
