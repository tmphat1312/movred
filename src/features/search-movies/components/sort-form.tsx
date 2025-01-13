"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ApplyButton } from "./apply-button";

const sortOptions = [
  { value: "popularity.desc", label: "Popularity Descending" },
  { value: "popularity.asc", label: "Popularity Ascending" },
  { value: "release_date.desc", label: "Release Date Descending" },
  { value: "release_date.asc", label: "Release Date Ascending" },
  { value: "vote_average.desc", label: "Rating Descending" },
  { value: "vote_average.asc", label: "Rating Ascending" },
  { value: "original_title.asc", label: "Title (A-Z)" },
  { value: "original_title.desc", label: "Title (Z-A)" },
];

export function SortForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const currentParams = new URLSearchParams(searchParams);
    currentParams.delete("page");

    const sortBy = (event.target as HTMLFormElement)["sort-by"].value;
    currentParams.set("sort_by", sortBy);

    router.push(`${pathname}?${currentParams}`);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="sort-by" className="mb-1.5 block">
          Sort Results By
        </label>
        <select
          name="sort-by"
          id="sort-by"
          className="rounded border-2 border-layout-bg bg-gray-100 p-1"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <ApplyButton />
    </form>
  );
}
