import { Suspense } from "react";

import { getSearchResults } from "@/features/search-movies/data/get-search-results";
import { SearchResultCard } from "./search-result-card";
import { SearchResultsPagination } from "./search-results-pagination";

export async function SearchResults({
  searchQuery,
  page = 1,
  sortBy = "popularity.desc",
  year,
  fromScore = 0,
  toScore = 10,
}: {
  searchQuery: string;
  page?: number;
  sortBy?: string;
  year?: number;
  fromScore?: number;
  toScore?: number;
}) {
  const data = await getSearchResults({
    query: searchQuery,
    page,
    // @ts-expect-error - This is a valid value
    sort_by: sortBy,
    year,
    from_score: fromScore,
    to_score: toScore,
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
        {data.total_pages > 1 && (
          <SearchResultsPagination
            currentPage={page}
            totalPages={data.total_pages}
          />
        )}
      </Suspense>
    </>
  );
}
