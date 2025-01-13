export function YourRating({ rating }: { rating: number }) {
  return (
    <p className="w-fit border-y-2 border-dashed border-layout-bg px-4 py-2">
      Your rating: <span className="text-lg font-bold">{rating}/10</span>
    </p>
  );
}
