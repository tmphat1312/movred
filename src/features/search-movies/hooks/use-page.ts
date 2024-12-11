import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function usePage({ totalPages }: { totalPages: number }) {
  const searchParams = useSearchParams();
  const clonedSearchParams = new URLSearchParams(searchParams.toString());
  const pathname = usePathname();
  const router = useRouter();

  const currentPage = Number(searchParams.get("page")) || 1;

  function goToNextPage() {
    if (currentPage === totalPages) return;

    clonedSearchParams.set("page", String(currentPage + 1));
    router.push(`${pathname}?${clonedSearchParams}`);
  }

  function goToPreviousPage() {
    if (currentPage === 1) return;

    clonedSearchParams.set("page", String(currentPage - 1));
    router.push(`${pathname}?${clonedSearchParams}`);
  }

  return {
    currentPage,
    goToNextPage,
    goToPreviousPage,
  };
}
