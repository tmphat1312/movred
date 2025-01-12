CREATE TABLE `favourites` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`movie_id` integer NOT NULL,
	`added_at` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `genres` (
	`id` integer PRIMARY KEY NOT NULL,
	`tmdb_id` integer,
	`name` text
);
--> statement-breakpoint
CREATE TABLE `movie_casts` (
	`id` integer PRIMARY KEY NOT NULL,
	`movie_id` integer,
	`person_id` integer,
	`character` text,
	`cast_order` integer,
	FOREIGN KEY (`movie_id`) REFERENCES `movies`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`person_id`) REFERENCES `people`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `movie_crews` (
	`id` integer PRIMARY KEY NOT NULL,
	`movie_id` integer NOT NULL,
	`person_id` integer NOT NULL,
	`department` text NOT NULL,
	`job` text NOT NULL,
	`credit_id` text,
	FOREIGN KEY (`movie_id`) REFERENCES `movies`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`person_id`) REFERENCES `people`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `movie_genres` (
	`genre_id` integer,
	`movie_id` integer,
	PRIMARY KEY(`genre_id`, `movie_id`),
	FOREIGN KEY (`genre_id`) REFERENCES `genres`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`movie_id`) REFERENCES `movies`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `movies` (
	`id` integer PRIMARY KEY NOT NULL,
	`tmdb_id` integer,
	`title` text,
	`original_title` text,
	`original_language` text,
	`overview` text,
	`tagline` text,
	`homepage` text,
	`imdb_id` text,
	`release_date` text,
	`runtime` integer,
	`budget` integer,
	`revenue` integer,
	`popularity` real,
	`vote_average` real,
	`vote_count` integer,
	`status` text,
	`video` integer,
	`adult` integer,
	`backdrop_path` text,
	`poster_path` text
);
--> statement-breakpoint
CREATE TABLE `movies_reviews` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`movie_id` integer NOT NULL,
	`rating` integer NOT NULL,
	`review` text,
	`created_at` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`movie_id`) REFERENCES `movies`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `people` (
	`id` integer PRIMARY KEY NOT NULL,
	`tmdb_id` integer,
	`name` text,
	`original_name` text,
	`gender` integer,
	`adult` integer,
	`biography` text,
	`birthday` text,
	`deathday` text,
	`place_of_birth` text,
	`known_for_department` text,
	`popularity` real,
	`profile_path` text,
	`homepage` text,
	`imdb_id` text
);
--> statement-breakpoint
CREATE TABLE `popular_movies` (
	`id` integer PRIMARY KEY NOT NULL,
	`movie_id` integer NOT NULL,
	`popularity` real,
	FOREIGN KEY (`movie_id`) REFERENCES `movies`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `trending_movies_this_week` (
	`id` integer PRIMARY KEY NOT NULL,
	`movie_id` integer NOT NULL,
	`media_type` text,
	`popularity` real,
	FOREIGN KEY (`movie_id`) REFERENCES `movies`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `trending_movies_today` (
	`id` integer PRIMARY KEY NOT NULL,
	`movie_id` integer NOT NULL,
	`media_type` text,
	`popularity` real,
	FOREIGN KEY (`movie_id`) REFERENCES `movies`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE `watch_history` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`movie_id` integer NOT NULL,
	`watched_at` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`movie_id`) REFERENCES `movies`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `watch_list` (
	`id` integer PRIMARY KEY NOT NULL,
	`user_id` integer NOT NULL,
	`movie_id` integer NOT NULL,
	`added_at` text DEFAULT 'CURRENT_TIMESTAMP',
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`movie_id`) REFERENCES `movies`(`id`) ON UPDATE no action ON DELETE no action
);
