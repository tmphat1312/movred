import { Shimmer } from "@/components/ui/shimmer";
import { getMovieKeywords } from "../data/get-movie-keywords";

export async function Keywords({ movieId }: { movieId: number }) {
  const keywords = (await getMovieKeywords({ movieId })) as { name: string }[];

  if (keywords.length === 0) {
    return <p>No keywords found</p>;
  }

  return (
    <ul className="flex flex-wrap gap-x-1 gap-y-2">
      {keywords.map((keyword) => (
        <li
          key={keyword.name}
          className="rounded border bg-gray-200 px-2 py-0.5 text-xs"
        >
          {keyword.name}
        </li>
      ))}
    </ul>
  );
}

export function KeywordsFallback() {
  return (
    <ul className="flex flex-wrap gap-x-1 gap-y-2">
      <li className="rounded border bg-gray-200 px-2 py-0.5 text-xs">
        <Shimmer className="h-4 w-16" />
      </li>
      <li className="rounded border bg-gray-200 px-2 py-0.5 text-xs">
        <Shimmer className="h-4 w-12" />
      </li>
      <li className="rounded border bg-gray-200 px-2 py-0.5 text-xs">
        <Shimmer className="h-4 w-8" />
      </li>
      <li className="rounded border bg-gray-200 px-2 py-0.5 text-xs">
        <Shimmer className="h-4 w-16" />
      </li>
      <li className="rounded border bg-gray-200 px-2 py-0.5 text-xs">
        <Shimmer className="h-4 w-12" />
      </li>
      <li className="rounded border bg-gray-200 px-2 py-0.5 text-xs">
        <Shimmer className="h-4 w-12" />
      </li>
    </ul>
  );
}
