export function Banner({ castId }: { castId: number }) {
  return (
    <div className="border-b-2">
      <aside className="container py-2 text-center">
        Details of cast that has the id of{" "}
        <span className="font-medium">`{castId}`</span>
      </aside>
    </div>
  );
}
