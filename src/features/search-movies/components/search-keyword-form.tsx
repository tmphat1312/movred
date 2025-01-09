"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

export function SearchKeywordForm() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "/") {
        event.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.setSelectionRange(0, inputRef.current.value.length);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!query) return;

    router.push(`/search?query=${query}`);
  }

  return (
    <div className="sticky top-0 z-10 border-y bg-white shadow-sm">
      <form
        className="group container flex items-center gap-4 py-2"
        onSubmit={handleSubmit}
      >
        <FaSearch size={14} />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for a movie..."
          className="w-full placeholder:italic focus:outline-none focus-visible:outline"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          className="green-gradient invisible rounded-full px-2.5 py-0.5 group-focus-within:visible group-focus-within:disabled:invisible"
          disabled={!query}
        >
          Search
        </button>
      </form>
    </div>
  );
}
