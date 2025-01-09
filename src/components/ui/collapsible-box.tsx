import { IoMdArrowDropright } from "react-icons/io";

export function CollapsibleBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <details className="group rounded-lg border shadow marker:hidden">
      <summary className="flex cursor-pointer items-center justify-between border-b-2 p-3 font-semibold">
        <span>{title}</span>
        <IoMdArrowDropright size={24} className="group-open:rotate-90" />
      </summary>
      <div className="p-3">{children}</div>
    </details>
  );
}
