import { array, Infer, object, union } from "superstruct";
import { SHomeMovie } from "./home-movies";

export const STrendingMovie = union([SHomeMovie]);

export const STrendingMoviesHttpResponse = object({
	results: array(STrendingMovie),
});

export type TTrendingMoviesHttpResponse = Infer<
	typeof STrendingMoviesHttpResponse
>;
