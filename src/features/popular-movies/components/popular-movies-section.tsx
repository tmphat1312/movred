import { ButtonLink } from "@/components/button-link";
import { MovieCardsFallback } from "@/components/movie-cards-fallback";
import { Suspense } from "react";
import { getPopularMovies } from "../get-popular-movies";
import { PopularMovies } from "./popular-movies";

export function PopularMoviesSection() {
  const popularMoviePromise = getPopularMovies();

  return (
    <section className="container py-8">
      <div className="mb-4 flex items-center justify-between gap-6">
        <h3 className="text-2xl font-semibold" aria-label="Popular movies">
          What&apos;s Popular
        </h3>
        <ButtonLink href="/popular">View all</ButtonLink>
      </div>
      <Suspense fallback={<MovieCardsFallback />}>
        <PopularMovies popularMoviePromise={popularMoviePromise} />
      </Suspense>
    </section>
  );
}
