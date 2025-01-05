"use client";

import { Suspense, use } from "react";

import { MovieCard } from "@/components/movie-card";
import { Shimmer } from "@/components/shimmer";
import { Slider, SliderItem } from "@/components/slider";
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

export function TrendingMovies({
  trendingByDayPromise,
  trendingByWeekPromise,
}: {
  trendingByDayPromise: MoviePromise;
  trendingByWeekPromise: MoviePromise;
}) {
  return (
    <Suspense fallback={<Fallback />}>
      <MoviesSlider
        trendingByDayPromise={trendingByDayPromise}
        trendingByWeekPromise={trendingByWeekPromise}
      />
    </Suspense>
  );
}

function MoviesSlider({
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

function Fallback() {
  return (
    <Slider>
      {Array.from({ length: 20 }).map((_, index) => (
        <SliderItem key={index}>
          <Shimmer className="mb-6 h-[225px] w-[150px] rounded-md" />
          <Shimmer className="mb-2 h-[15px] w-[70px] rounded-md" />
          <Shimmer className="h-[40px] w-[150px] rounded-md" />
        </SliderItem>
      ))}
    </Slider>
  );
}
