"use client";

import { use } from "react";

import { MovieCard, MovieCardProps } from "@/components/movie-card";
import { Slider, SliderItem } from "@/components/slider";
import { useTimeWindow } from "../hooks/use-time-window";

type MoviePromise = Promise<MovieCardProps[]>;

export function TrendingMovies({
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
    <Slider key={currentTimeWindow}>
      {movies.map((movie) => (
        <SliderItem key={movie.id}>
          <MovieCard {...movie} />
        </SliderItem>
      ))}
    </Slider>
  );
}
