import { getSearchResults } from "@/data/get-search-results";
import { SearchResultCard } from "./search-result-card";
import { SearchResultsPagination } from "./search-results-pagination";

export async function SearchResults({
  searchQuery,
  page = 1,
}: {
  searchQuery: string;
  page?: number;
}) {
  const data = await getSearchResults({ query: searchQuery, page });
  return (
    <div className="container space-y-8">
      <ul className="grid grid-cols-2 items-stretch gap-6">
        {data.results.map((movie) => (
          <li key={movie.id}>
            <SearchResultCard {...movie} />
          </li>
        ))}
      </ul>
      <SearchResultsPagination totalPages={data.total_pages} />
    </div>
  );
}
