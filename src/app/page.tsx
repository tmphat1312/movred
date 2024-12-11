import { Footer } from "@/components/layouts/footer";
import { StickyHeader } from "@/components/layouts/sticky-header";
import { SearchHeroSection } from "@/features/home/components/search-hero-section";
import { TrendingMoviesSection } from "@/features/home/components/trending-movies-section";

export default async function Home() {
  return (
    <>
      <StickyHeader />
      <main>
        <h1 className="text-bold sr-only mb-4 text-2xl">Home</h1>
        <SearchHeroSection />
        <TrendingMoviesSection />
        <div className="h-[800px]"></div>
      </main>
      <Footer />
    </>
  );
}
