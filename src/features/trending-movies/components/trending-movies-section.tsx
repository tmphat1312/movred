import { Suspense } from "react";

import { MovieCardsFallback } from "@/components/movie-cards-fallback";
import { getTrendingMovies } from "@/features/trending-movies/data/get-trending-movies";
import { TimeWindowToggle } from "./time-window-toggle";
import { TrendingMovies } from "./trending-movies";

export function TrendingMoviesSection() {
  return (
    <section className="container relative py-8">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url(/images/trending-background.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      />
      <div className="mb-4 flex items-center gap-6">
        <h3 className="text-2xl font-semibold" aria-label="Trending movies">
          Trending
        </h3>
        <Suspense>
          <TimeWindowToggle />
        </Suspense>
      </div>
      <Suspense fallback={<MovieCardsFallback />}>
        <TrendingMovies
          trendingByDayPromise={getTrendingMovies({ time_window: "day" })}
          trendingByWeekPromise={getTrendingMovies({ time_window: "week" })}
        />
      </Suspense>
    </section>
  );
}
