import { SectionPlaceholder } from "@/components/section-placeholder";
import { Banner } from "@/features/search-movies/components/banner";
import { NoKeyword } from "@/features/search-movies/components/no-keyword";
import { SearchResults } from "@/features/search-movies/components/search-results";

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ query: string; page: string }>;
}) {
  const query = (await searchParams).query;
  const page = Number((await searchParams).page || "1");

  return (
    <main className="space-y-2 py-2">
      <h1 className="sr-only">Search results page</h1>
      {query ? (
        <>
          <Banner searchQuery={query} />
          <SearchResults searchQuery={query} page={page} />
        </>
      ) : (
        <NoKeyword />
      )}
      <SectionPlaceholder />
    </main>
  );
}
