import { Banner } from "@/features/search-movies/components/banner";
import { FilterForm } from "@/features/search-movies/components/filter-form";
import { NoKeyword } from "@/features/search-movies/components/no-keyword";
import { SearchKeywordForm } from "@/features/search-movies/components/search-keyword-form";
import { SearchResults } from "@/features/search-movies/components/search-results";

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ query: string; page: string }>;
}) {
  const query = (await searchParams).query;
  const page = Number((await searchParams).page || "1");

  return (
    <main>
      <h1 className="sr-only">Search results page</h1>
      <SearchKeywordForm />
      <div className="container py-4">
        {query ? (
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <FilterForm />
            </div>
            <div className="col-span-9">
              <Banner searchQuery={query} />
              <SearchResults searchQuery={query} page={page} />
            </div>
          </div>
        ) : (
          <NoKeyword />
        )}
      </div>
    </main>
  );
}
