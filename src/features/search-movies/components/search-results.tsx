import { getSearchResults } from "@/features/search-movies/data/get-search-results";
import { JSX, Suspense } from "react";
import { SearchResultCard } from "./search-result-card";
import { SearchResultsPagination } from "./search-results-pagination";

export async function SearchResults({
  searchQuery,
  page = 1,
  sortBy = "popularity.desc",
  includeAdult = "false",
  year,
  fromScore = 0,
  toScore = 10,
}: {
  searchQuery: string;
  page?: number;
  sortBy?: string;
  includeAdult?: string;
  year?: number;
  fromScore?: number;
  toScore?: number;
}) {
  if (includeAdult !== "false" && includeAdult !== "true") {
    includeAdult = "false";
  }

  if (fromScore < 0) fromScore = 0;
  if (toScore < 0) toScore = 10;

  fromScore = Math.max(0, Math.min(10, fromScore));
  toScore = Math.max(0, Math.min(10, toScore));

  const data = await getSearchResults({
    query: searchQuery,
    page,
    sort_by: sortBy,
    include_adult: includeAdult as "true" | "false",
    year,
  });

  return (
    <>
      <ul className="grid grid-cols-2 items-stretch gap-6">
        {data.results.map(
          (
            movie: JSX.IntrinsicAttributes & {
              id: number;
              poster_path: string | null;
              title: string;
              release_date: string | null;
              overview: string;
            },
          ) => (
            <li key={movie.id}>
              <SearchResultCard {...movie} />
            </li>
          ),
        )}
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
