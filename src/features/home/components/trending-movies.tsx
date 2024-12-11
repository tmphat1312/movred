import { getTrendingMovies } from "@/data/get-trending-movies";
import { MoviesSlider } from "./movies-slider";
import { Suspense } from "react";
import { TempLoadingIndicator } from "@/components/temp-loading-indicator";

export function TrendingMovies() {
  const trendingByDayPromise = getTrendingMovies({ time_window: "day" });
  const trendingByWeekPromise = getTrendingMovies({ time_window: "week" });

  return (
    <Suspense fallback={<TempLoadingIndicator />}>
      <MoviesSlider
        trendingByDayPromise={trendingByDayPromise}
        trendingByWeekPromise={trendingByWeekPromise}
      />
    </Suspense>
  );
}
