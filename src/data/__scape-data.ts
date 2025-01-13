/* eslint-disable @typescript-eslint/no-explicit-any */
import consola from "consola";
import { InferInsertModel } from "drizzle-orm";

import { apiClient } from "@/lib/api-client";
import { db } from "./db";
import {
  cast as cast_schema,
  crew as crew_schema,
  movies_genres as movie_genres_schema,
  movies as movies_schema,
  people as people_schema,
  genres as genres_schema,
} from "./schema";

(async function main() {
  const genres = await scapeGenres();
  consola.info("genres: ", genres.length);

  try {
    await db.insert(genres_schema).values(genres).onConflictDoNothing();
  } catch (error) {
    consola.error(error);
  }

  for await (const chunk of scrapeMovies({ fromPage: 1, toPage: 5 })) {
    try {
      consola.info("movies: ", chunk.movies.length);
      consola.info("people: ", chunk.people.length);
      consola.info("movieGenres: ", chunk.movieGenres.length);
      consola.info("castCredits: ", chunk.castCredits.length);
      consola.info("crewCredits: ", chunk.crewCredits.length);

      await db.insert(movies_schema).values(chunk.movies).onConflictDoNothing();
      await db.insert(people_schema).values(chunk.people).onConflictDoNothing();
      await Promise.all([
        db
          .insert(movie_genres_schema)
          .values(chunk.movieGenres)
          .onConflictDoNothing(),
        db.insert(cast_schema).values(chunk.castCredits).onConflictDoNothing(),
        db.insert(crew_schema).values(chunk.crewCredits).onConflictDoNothing(),
      ]);
    } catch (error) {
      consola.error(error);
    }
  }
})().catch(consola.error);

async function scapeGenres() {
  const { data } = await apiClient.get("/genre/movie/list");
  return data.genres;
}

async function* scrapeMovies({
  fromPage,
  toPage,
}: {
  fromPage: number;
  toPage: number;
}) {
  let movies: InferInsertModel<typeof movies_schema>[] = [];
  let movieGenres: InferInsertModel<typeof movie_genres_schema>[] = [];
  let castCredits: InferInsertModel<typeof cast_schema>[] = [];
  let crewCredits: InferInsertModel<typeof crew_schema>[] = [];
  let people: InferInsertModel<typeof people_schema>[] = [];

  const clean = () => {
    movies = [];
    movieGenres = [];
    castCredits = [];
    crewCredits = [];
    people = [];
  };

  for (let page = fromPage; page <= toPage; page++) {
    consola.start(`Scraping page ${page}`);

    const params = new URLSearchParams({
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: page.toString(),
      sort_by: "popularity.desc",
    });
    const { data } = await apiClient.get(`/discover/movie?${params}`);
    const detailedMovies = await Promise.all(data.results.map(getMovieDetails));
    movies = movies.concat(detailedMovies);

    await sleep(250);
    const creditedMovies = await Promise.all(data.results.map(getMovieCredits));

    movieGenres = movieGenres.concat(
      detailedMovies.flatMap(({ genres, id: movie_id }) =>
        genres.map(({ id: genre_id }: { id: number }) => ({
          genre_id,
          movie_id,
        })),
      ),
    );
    castCredits = castCredits.concat(
      creditedMovies.flatMap(({ id: movie_id, cast }) =>
        cast
          .slice(0, 10)
          .map(
            ({
              id: person_id,
              character,
            }: {
              id: number;
              character: string;
            }) => ({
              person_id,
              movie_id,
              character,
            }),
          ),
      ),
    );
    crewCredits = crewCredits.concat(
      creditedMovies.flatMap(({ id: movie_id, crew }) =>
        crew
          .slice(0, 4)
          .map(
            ({
              id: person_id,
              job,
              department,
            }: {
              id: number;
              job: string;
              department: string;
            }) => ({
              person_id,
              movie_id,
              job,
              department,
            }),
          ),
      ),
    );

    const personIds = new Set([
      ...castCredits.map(({ person_id }) => person_id),
      ...crewCredits.map(({ person_id }) => person_id),
    ]);

    const detailedPeople = [];
    for (const person_id of personIds) {
      try {
        detailedPeople.push(await getPersonDetails({ id: person_id }));
      } catch (error) {
        consola.error(error);
      }
    }

    people = people.concat(detailedPeople);

    yield {
      movies,
      movieGenres,
      castCredits,
      crewCredits,
      people,
    };
    clean();

    consola.success(`Scraped page ${page}`);
    await sleep(250);
  }
}

async function getMovieDetails({ id: movieId }: { id: number }) {
  const { data } = await apiClient.get(`/movie/${movieId}`);
  return data;
}

async function getMovieCredits({ id: movieId }: { id: number }) {
  const { data } = await apiClient.get(`/movie/${movieId}/credits`);
  return data;
}

async function getPersonDetails({ id: personId }: { id: number }) {
  const { data } = await apiClient.get(`/person/${personId}`);
  return data;
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
