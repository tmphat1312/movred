import { array, Infer, integer, number, object, string } from "superstruct";

export const SHomeMovie = object({
  id: integer(),
  title: string(),
  vote_average: number(),
  poster_path: string(),
  release_date: string(),
  media_type: string(),
});

export const SMoviesHttpResponse = object({
  results: array(SHomeMovie),
});

export type THomeMoviesHttpResponse = Infer<typeof SMoviesHttpResponse>;
