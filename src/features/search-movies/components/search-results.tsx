import { getSearchResults } from "@/features/search-movies/data/get-search-results";
import { SearchResultCard } from "./search-result-card";

export async function SearchResults({
  searchQuery,
  page = 1,
}: {
  searchQuery: string;
  page?: number;
}) {
  const data = await getSearchResults({ query: searchQuery, page });
  return (
    <ul className="grid grid-cols-2 items-stretch gap-6">
      {data.results.map((movie) => (
        <li key={movie.id}>
          <SearchResultCard {...movie} />
        </li>
      ))}
    </ul>
  );
}
