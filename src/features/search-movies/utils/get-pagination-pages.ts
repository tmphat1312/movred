export function getPaginationPages({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 10) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage < 5) {
    return [1, 2, 3, 4, 5, "...", totalPages];
  }

  if (currentPage > totalPages - 4) {
    return [
      1,
      "...",
      ...Array.from({ length: 5 }, (_, i) => totalPages - 4 + i),
    ];
  }

  return [
    1,
    "...",
    ...Array.from({ length: 5 }, (_, i) => currentPage - 2 + i),
    "...",
    totalPages,
  ];
}
