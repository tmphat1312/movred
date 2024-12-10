import { array, Infer, object } from "superstruct";

export const STrendingMovie = object({});

export const STrendingMoviesHttpResponse = object({
  results: array(STrendingMovie),
});

export type TTrendingMoviesHttpResponse = Infer<
  typeof STrendingMoviesHttpResponse
>;
