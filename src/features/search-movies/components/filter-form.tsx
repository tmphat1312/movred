"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { ApplyButton } from "./apply-button";

export function FilterForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const currentParams = new URLSearchParams(searchParams);
    currentParams.delete("page");

    const includeAdult = (event.target as HTMLFormElement)["include-adult"]
      .checked;
    currentParams.set("include_adult", includeAdult ? "true" : "false");

    router.push(`${pathname}?${currentParams}`);
  }

  return (
    <form className="divide-y-2" onSubmit={handleSubmit}>
      <div className="flex items-center gap-2 py-4">
        <input type="checkbox" id="include-adult" className="size-4" />
        <label htmlFor="include-adult">Include Adult Results</label>
      </div>
      <div className="flex items-center gap-2 py-4">
        <label htmlFor="">Release Year</label>
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
