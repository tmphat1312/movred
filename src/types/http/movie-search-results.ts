import {
	object,
	array,
	boolean,
	number,
	string,
	nullable,
	Infer,
} from "superstruct";

export const SGenre = object({
	id: number(),
	name: string(),
});

export const SMovie = object({
	adult: boolean(),
	backdrop_path: nullable(string()),
	genre_ids: array(number()),
	id: number(),
	original_language: string(),
	original_title: string(),
	overview: string(),
	popularity: number(),
	poster_path: nullable(string()),
	release_date: nullable(string()),
	title: string(),
	video: boolean(),
	vote_average: number(),
	vote_count: number(),
});

export const SMovieSearchResults = object({
	page: number(),
	results: array(SMovie),
	total_pages: number(),
	total_results: number(),
});

export type TMovieSearchResults = Infer<typeof SMovieSearchResults>;
