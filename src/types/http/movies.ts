import { array, Infer, integer, object, string } from "superstruct";

export const SMovie = object({
  id: integer(),
  title: string(),
});

export const SMoviesHttpResponse = object({
  results: array(SMovie),
});

export type TMoviesHttpResponse = Infer<typeof SMoviesHttpResponse>;
