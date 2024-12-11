import { Suspense } from "react";
import { MoviesSlider } from "./movies-slider";
import { TimeWindowToggle } from "./time-window-toggle";

export function TrendingMoviesSection() {
  return (
    <section className="container py-8">
      <div className="mb-4 flex items-center gap-6">
        <h3 className="text-2xl font-semibold" aria-label="Trending movies">
          Trending
        </h3>
        <Suspense fallback={<div>loading...</div>}>
          <TimeWindowToggle />
        </Suspense>
      </div>
      <MoviesSlider />
    </section>
  );
}
