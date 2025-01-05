"use client";

import { use } from "react";

import { MovieCard, MovieCardProps } from "@/components/movie-card";
import { Slider, SliderItem } from "@/components/slider";

export function PopularMovies({
  popularMoviePromise,
}: {
  popularMoviePromise: Promise<MovieCardProps[]>;
}) {
  const movies = use(popularMoviePromise);

  return (
    <Slider>
      {movies.map((movie) => (
        <SliderItem key={movie.id}>
          <MovieCard {...movie} />
        </SliderItem>
      ))}
    </Slider>
  );
}
