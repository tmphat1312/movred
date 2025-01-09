export function Banner({ searchQuery }: { searchQuery: string }) {
  if (!searchQuery) return null;

  return (
    <div className="py-3 text-lg">
      Search results for <span className="font-medium">`{searchQuery}`</span>
    </div>
  );
}
