import { MovieCard, MovieCardProps } from "@/components/movie-card";
import { Slider, SliderItem } from "@/components/slider";
import { getPopularMovies } from "../data/get-popular-movies";
import { JSX } from "react";

export async function PopularMovies() {
  const movies = await getPopularMovies();

  return (
    <Slider>
      {movies.map((movie: JSX.IntrinsicAttributes & MovieCardProps) => (
        <SliderItem key={movie.id}>
          <MovieCard {...movie} />
        </SliderItem>
      ))}
    </Slider>
  );
}
