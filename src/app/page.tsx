import { Footer } from "@/components/layouts/footer";
import { StickyHeader } from "@/components/layouts/sticky-header";
import { SearchHero } from "@/features/home/components/search-hero";
import { TrendingMovies } from "@/features/home/components/trending-movies";

export default async function Home() {
  return (
    <>
      <StickyHeader />
      <main>
        <h1 className="text-bold sr-only mb-4 text-2xl">Home</h1>
        <SearchHero />
        <TrendingMovies />
        <div className="h-[800px]"></div>
      </main>
      <Footer />
    </>
  );
}
