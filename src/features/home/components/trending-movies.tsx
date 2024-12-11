import { getTrendingMovies } from "@/data/get-trending-movies";
import { MoviesSlider } from "./movies-slider";
import { Suspense } from "react";

export function TrendingMovies() {
  const trendingByDayPromise = getTrendingMovies({ time_window: "day" });
  const trendingByWeekPromise = getTrendingMovies({ time_window: "week" });

  return (
    <Suspense fallback={<div>loading...</div>}>
      <MoviesSlider
        trendingByDayPromise={trendingByDayPromise}
        trendingByWeekPromise={trendingByWeekPromise}
      />
    </Suspense>
  );
}
