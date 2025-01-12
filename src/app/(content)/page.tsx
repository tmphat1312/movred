import { CreateOurUser } from "@/features/home/components/create-our-user";
import { SearchHeroSection } from "@/features/home/components/search-hero-section";
import { LatestTrailersSection } from "@/features/latest-trailers/components/latest-trailers-section";
import { PopularMoviesSection } from "@/features/popular-movies/components/popular-movies-section";
import { TrendingMoviesSection } from "@/features/trending-movies/components/trending-movies-section";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main>
      <h1 className="text-bold sr-only mb-4 text-2xl">Home</h1>
      <SearchHeroSection />
      <TrendingMoviesSection />
      <LatestTrailersSection />
      <PopularMoviesSection />
      <Suspense>
        <CreateOurUser />
      </Suspense>
    </main>
  );
}
