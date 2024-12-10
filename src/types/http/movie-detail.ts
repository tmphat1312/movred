import {
	object,
	string,
	number,
	array,
	boolean,
	nullable,
	optional,
	integer,
	Infer,
} from "superstruct";

export const SMovieDetail = object({
	adult: boolean(),
	backdrop_path: nullable(string()),
	belongs_to_collection: nullable(
		object({
			id: integer(),
			name: string(),
			poster_path: nullable(string()),
			backdrop_path: nullable(string()),
		})
	),
	budget: integer(),
	genres: array(
		object({
			id: integer(),
			name: string(),
		})
	),
	homepage: optional(string()),
	id: integer(),
	imdb_id: nullable(string()),
	origin_country: array(string()),
	original_language: string(),
	original_title: string(),
	overview: string(),
	popularity: number(),
	poster_path: nullable(string()),
	production_companies: array(
		object({
			id: integer(),
			logo_path: nullable(string()),
			name: string(),
			origin_country: string(),
		})
	),
	production_countries: array(
		object({
			iso_3166_1: string(),
			name: string(),
		})
	),
	release_date: string(),
	revenue: integer(),
	runtime: integer(),
	spoken_languages: array(
		object({
			english_name: string(),
			iso_639_1: string(),
			name: string(),
		})
	),
	status: string(),
	tagline: optional(string()),
	title: string(),
	video: boolean(),
	vote_average: number(),
	vote_count: integer(),
});

export const SMovieDetailsHttpResponse = object({
	results: array(SMovieDetail),
});

export type TTrendingMoviesHttpResponse = Infer<
	typeof SMovieDetailsHttpResponse
>;
