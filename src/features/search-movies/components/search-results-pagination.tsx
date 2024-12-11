"use client";

import { usePage } from "../hooks/use-page";

export function SearchResultsPagination({
  totalPages,
}: {
  totalPages: number;
}) {
  const { currentPage, goToNextPage, goToPreviousPage } = usePage({
    totalPages,
  });

  return (
    <div className="flex items-center justify-center gap-4 text-lg">
      <button
        className="rounded-lg border bg-gray-50 px-5 py-1.5 transition-colors hover:bg-gray-100 hover:text-link-hover disabled:pointer-events-none disabled:opacity-60"
        disabled={currentPage === 1}
        onClick={goToPreviousPage}
      >
        Previous
      </button>
      <span className="font-bold tracking-widest">
        {currentPage}/{totalPages}
      </span>
      <button
        className="rounded-lg border bg-gray-50 px-5 py-1.5 transition-colors hover:bg-gray-100 hover:text-link-hover disabled:pointer-events-none disabled:opacity-60"
        disabled={currentPage === totalPages}
        onClick={goToNextPage}
      >
        Next
      </button>
    </div>
  );
}
