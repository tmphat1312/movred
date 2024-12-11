import { SearchMovieForm } from "@/features/home/components/search-movie-form";

export function SearchDecorationHero() {
  return (
    <aside className="light-blue-gradient py-8">
      <div className="container grid h-[60px] place-content-center text-lg">
        <p className="opacity-80">This is a placeholder hero</p>
      </div>
      <div className="mx-auto max-w-[512px]">
        <SearchMovieForm />
      </div>
    </aside>
  );
}
