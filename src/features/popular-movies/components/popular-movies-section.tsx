import { MovieCardsFallback } from "@/components/movie-cards-fallback";
import { Suspense } from "react";
import { getPopularMovies } from "../data/get-popular-movies";
import { PopularMovies } from "./popular-movies";

export function PopularMoviesSection() {
  const popularMoviePromise = getPopularMovies();

  return (
    <section className="container py-8">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold" aria-label="Popular movies">
          What&apos;s Popular
        </h3>
      </div>
      <Suspense fallback={<MovieCardsFallback />}>
        <PopularMovies popularMoviePromise={popularMoviePromise} />
      </Suspense>
    </section>
  );
}
