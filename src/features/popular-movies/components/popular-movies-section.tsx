import { MovieCardsFallback } from "@/components/movie-cards-fallback";
import { Suspense } from "react";
import { PopularMovies } from "./popular-movies";

export function PopularMoviesSection() {
  return (
    <section className="container py-8">
      <h3 className="mb-4 text-2xl font-semibold" aria-label="Popular movies">
        What&apos;s Popular
      </h3>
      <Suspense fallback={<MovieCardsFallback />}>
        <PopularMovies />
      </Suspense>
    </section>
  );
}
