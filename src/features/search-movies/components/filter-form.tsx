"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { ApplyButton } from "./apply-button";
import { useState } from "react";

export function FilterForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [isAdult, setIsAdult] = useState(
    searchParams.get("include_adult") === "true",
  );
  const [year, setYear] = useState(searchParams.get("year") ?? "");
  const [fromScore, setFromScore] = useState(
    searchParams.get("from_score") ?? "",
  );
  const [toScore, setToScore] = useState(searchParams.get("to_score") ?? "");

  function handleIsAdultChange(event: React.ChangeEvent<HTMLInputElement>) {
    setIsAdult(event.target.checked);
  }

  function handleYearChange(event: React.ChangeEvent<HTMLInputElement>) {
    setYear(event.target.value);
  }

  function handleFromScoreChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFromScore(event.target.value);
  }

  function handleToScoreChange(event: React.ChangeEvent<HTMLInputElement>) {
    setToScore(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const currentParams = new URLSearchParams(searchParams);
    currentParams.delete("page");

    if (isAdult) currentParams.set("include_adult", "true");
    if (year) currentParams.set("year", year);
    if (fromScore) currentParams.set("from_score", fromScore);
    if (toScore) currentParams.set("to_score", toScore);

    router.push(`${pathname}?${currentParams}`);
  }

  function handleReset() {
    setIsAdult(false);
    setYear("");
    setFromScore("");
    setToScore("");
  }

  return (
    <form className="divide-y-2" onSubmit={handleSubmit}>
      <div className="flex items-center gap-2 py-4">
        <input
          type="checkbox"
          id="include-adult"
          className="size-4"
          checked={isAdult}
          onChange={handleIsAdultChange}
        />
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
          className="w-[9ch] rounded border-2 border-layout-bg px-2 py-1"
          placeholder="YYYY"
          value={year}
          onChange={handleYearChange}
        />
      </div>
      <div className="space-y-2 py-4">
        <label htmlFor="" className="block w-full">
          User Score
        </label>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="from-score">From</label>
            <input
              id="from-score"
              type="number"
              min="0"
              max="10"
              step="1"
              name="from-score"
              className="w-[7ch] rounded border-2 border-layout-bg px-1.5 py-0.5"
              placeholder="0"
              value={fromScore}
              onChange={handleFromScoreChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="to-score">To</label>
            <input
              id="to-score"
              type="number"
              min="0"
              max="10"
              step="1"
              name="to-score"
              className="w-[7ch] rounded border-2 border-layout-bg px-1.5 py-0.5"
              placeholder="10"
              value={toScore}
              onChange={handleToScoreChange}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 py-4">
        <ApplyButton />
        <button
          type="reset"
          className="hover:green-gradient black-gradient w-full rounded-lg px-3 py-2 text-white transition-colors"
          onClick={handleReset}
        >
          Clear
        </button>
      </div>
    </form>
  );
}
