import { CollapsibleBox } from "@/components/ui/collapsible-box";
import { Banner } from "@/features/search-movies/components/banner";
import { FilterForm } from "@/features/search-movies/components/filter-form";
import { NoKeyword } from "@/features/search-movies/components/no-keyword";
import { SearchKeywordForm } from "@/features/search-movies/components/search-keyword-form";
import { SearchResults } from "@/features/search-movies/components/search-results";
import { SortForm } from "@/features/search-movies/components/sort-form";
import { Suspense } from "react";

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{
    query: string;
    page: string;
    sort_by: string;
    include_adult: string;
    year: string;
  }>;
}) {
  const query = (await searchParams).query;
  const page = Number((await searchParams).page || "1");
  const sort_by = (await searchParams).sort_by;
  const include_adult = (await searchParams).include_adult;
  const year = Number((await searchParams).year || "-1");

  return (
    <main>
      <h1 className="sr-only">Search results page</h1>
      <Suspense>
        <SearchKeywordForm />
      </Suspense>
      <div className="container py-4">
        {query ? (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-3 space-y-4 py-12">
              <Suspense>
                <CollapsibleBox title="Sort">
                  <SortForm />
                </CollapsibleBox>
                <CollapsibleBox title="Filters">
                  <FilterForm />
                </CollapsibleBox>
              </Suspense>
            </div>
            <div className="col-span-9">
              <Banner searchQuery={query} />
              <SearchResults
                searchQuery={query}
                page={page}
                sortBy={sort_by}
                includeAdult={include_adult}
                year={year}
              />
            </div>
          </div>
        ) : (
          <NoKeyword />
        )}
      </div>
    </main>
  );
}
