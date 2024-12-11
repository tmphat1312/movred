import { TimeWindowToggle } from "./time-window-toggle";
import { TrendingMovies } from "./trending-movies";

export function TrendingMoviesSection() {
  return (
    <section className="container py-8">
      <div className="mb-4 flex items-center gap-6">
        <h3 className="text-2xl font-semibold" aria-label="Trending movies">
          Trending
        </h3>
        <TimeWindowToggle />
      </div>
      <TrendingMovies />
    </section>
  );
}
