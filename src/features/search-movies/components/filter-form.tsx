"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { ApplyButton } from "./apply-button";

export function FilterForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const currentParams = new URLSearchParams(searchParams);
    currentParams.delete("page");

    const includeAdult = form["include-adult"].checked;
    if (includeAdult) {
      currentParams.set("include_adult", "true");
    }

    const year = form["year"].value;
    if (year) {
      currentParams.set("year", year);
    }

    router.push(`${pathname}?${currentParams}`);
  }

  return (
    <form className="divide-y-2" onSubmit={handleSubmit}>
      <div className="flex items-center gap-2 py-4">
        <input type="checkbox" id="include-adult" className="size-4" />
        <label htmlFor="include-adult">Include Adult Results</label>
      </div>
      <div className="flex items-center gap-2 py-4">
        <label htmlFor="year">Release Year</label>
        <input
          id="year"
          type="number"
          min="1900"
          max="2099"
          step="1"
          name="year"
          className="rounded border-2 border-layout-bg px-2 py-1"
          placeholder="YYYY"
        />
      </div>
      <div className="flex items-center gap-2 py-4">
        <label htmlFor="">User Score</label>
      </div>
      <div className="flex gap-4 py-4">
        <ApplyButton />
        <button
          type="reset"
          className="hover:green-gradient black-gradient w-full rounded-lg px-3 py-2 text-white transition-colors"
        >
          Clear
        </button>
      </div>
    </form>
  );
}
