import { SearchHeroSection } from "@/features/home/components/search-hero-section";
import { PopularMoviesSection } from "@/features/popular-movies/components/popular-movies-section";
import { TrendingMoviesSection } from "@/features/trending-movies/trending-movies-section";

export default async function Home() {
  return (
    <main>
      <h1 className="text-bold sr-only mb-4 text-2xl">Home</h1>
      <SearchHeroSection />
      <TrendingMoviesSection />
      <PopularMoviesSection />
    </main>
  );
}
