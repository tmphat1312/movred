export function Banner({ movieId }: { movieId: number }) {
  return (
    <aside className="container py-2 text-center">
      Details of the movie that has the id of{" "}
      <span className="font-medium">`{movieId}`</span>
    </aside>
  );
}
