import { SearchDecorationHero } from "@/features/search-movies/components/search-decoration-hero";

export default function Search({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SearchDecorationHero />
      {children}
    </>
  );
}
