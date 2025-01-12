import { MovieCard } from "@/components/movie-card";
import { Slider, SliderItem } from "@/components/slider";
import { getPopularMovies } from "../data/get-popular-movies";

export async function PopularMovies() {
  const movies = await getPopularMovies();

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
