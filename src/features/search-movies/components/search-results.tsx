import { getSearchResults } from "@/features/search-movies/data/get-search-results";
import { Suspense } from "react";
import { SearchResultCard } from "./search-result-card";
import { SearchResultsPagination } from "./search-results-pagination";

export async function SearchResults({
  searchQuery,
  page = 1,
  sortBy = "popularity.desc",
}: {
  searchQuery: string;
  page?: number;
  sortBy?: string;
}) {
  const data = await getSearchResults({
    query: searchQuery,
    page,
    sort_by: sortBy,
  });

  return (
    <>
      <ul className="grid grid-cols-2 items-stretch gap-6">
        {data.results.map((movie) => (
          <li key={movie.id}>
            <SearchResultCard {...movie} />
          </li>
        ))}
      </ul>
      <Suspense>
        <SearchResultsPagination
          currentPage={page}
          totalPages={data.total_pages}
        />
      </Suspense>
    </>
  );
}
