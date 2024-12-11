import { SearchMovieForm } from "./search-movie-form";

export function SearchHeroSection() {
  return (
    <div className="light-blue-gradient text-layout-fg">
      <section className="container space-y-8 py-16">
        <div className="drop-shadow-lg">
          <h2 className="text-5xl font-semibold">Welcome.</h2>
          <h3 className="text-3xl font-medium">
            Millions of movies of all types to discover. Explore now.
          </h3>
        </div>

        <SearchMovieForm />
      </section>
    </div>
  );
}
