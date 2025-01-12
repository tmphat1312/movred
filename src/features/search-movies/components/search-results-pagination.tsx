"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { getPaginationPages } from "../utils/get-pagination-pages";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export function SearchResultsPagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const pages = getPaginationPages({ currentPage, totalPages });
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const paramsWithoutPage = new URLSearchParams(searchParams);
  paramsWithoutPage.delete("page");

  const prevLink =
    currentPage > 1
      ? `${pathname}?${paramsWithoutPage}&page=${currentPage - 1}`
      : null;
  const nextLink =
    currentPage < totalPages
      ? `${pathname}?${paramsWithoutPage}&page=${currentPage + 1}`
      : null;

  return (
    <div className="flex items-center justify-center gap-1 py-6">
      {prevLink && (
        <Link
          href={prevLink}
          className="rounded-md px-3 py-1 hover:bg-gray-200"
        >
          Previous
        </Link>
      )}
      {pages.map((page, index) => (
        <PaginationLink
          key={index}
          page={page}
          pathname={pathname}
          searchParams={searchParams}
        />
      ))}
      {nextLink && (
        <Link
          href={nextLink}
          className="rounded-md px-3 py-1 hover:bg-gray-200"
        >
          Next
        </Link>
      )}
    </div>
  );
}

function PaginationLink({
  page,
  pathname,
  searchParams,
}: {
  page: number | string;
  pathname: string;
  searchParams: URLSearchParams;
}) {
  if (typeof page === "string") {
    return <span>{page}</span>;
  }

  const search = new URLSearchParams(searchParams);
  const currentPage = Number(search.get("page") ?? 1);

  search.set("page", String(page));

  return (
    <Link
      href={`${pathname}?${search}`}
      className={cn("rounded-md px-3 py-1 hover:bg-gray-200", {
        "bg-gray-200": page === currentPage,
      })}
    >
      {page}
    </Link>
  );
}
