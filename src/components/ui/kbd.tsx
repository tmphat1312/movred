export function Kbd({ children }: { children: string }) {
  return (
    <kbd className="rounded border-[2px] border-b-[3px] bg-gray-50 px-4 font-medium shadow">
      {children}
    </kbd>
  );
}
