"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function SearchMovieForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    function handleFocus(e: KeyboardEvent) {
      if (e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleFocus);

    return () => {
      window.removeEventListener("keydown", handleFocus);
    };
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/search?query=${searchQuery}`, { scroll: false });
  }

  return (
    <form
      className="flex items-center gap-2 rounded-full bg-background ps-2 text-foreground shadow-md outline-offset-2 has-[input:focus]:outline"
      onSubmit={handleSubmit}
      aria-label="Search for a movie with a keyword or two"
    >
      <label htmlFor="search-query" className="sr-only">
        Search query
      </label>
      <input
        id="search-query"
        ref={inputRef}
        className="grow bg-transparent px-4 py-2.5 focus:outline-none"
        placeholder="Search for a movie with a keyword or two :)..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="green-gradient hover:light-blue-gradient self-stretch rounded-full px-6 disabled:pointer-events-none disabled:grayscale"
        disabled={searchQuery.length === 0}
      >
        Search
      </button>
    </form>
  );
}
