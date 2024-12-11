"use client";

import { MovieCard } from "@/components/movie-card";
import { use } from "react";
import { useTimeWindow } from "../hooks/use-time-window";

type MoviePromise = Promise<
  {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
  }[]
>;

export function MoviesSlider({
  trendingByDayPromise,
  trendingByWeekPromise,
}: {
  trendingByDayPromise: MoviePromise;
  trendingByWeekPromise: MoviePromise;
}) {
  const { currentTimeWindow } = useTimeWindow();
  const movies = use(
    currentTimeWindow === "day" ? trendingByDayPromise : trendingByWeekPromise,
  );

  return (
    <ul className="scroll-snap custom-scrollbar flex snap-mandatory space-x-4 overflow-x-scroll whitespace-nowrap pb-6">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard {...movie} />
        </li>
      ))}
    </ul>
  );
}
