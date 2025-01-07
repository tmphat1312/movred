import { cn } from "@/lib/utils/cn";

export function Dot({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      role="presentation"
      className={cn("text-2xl font-bold", className)}
      {...props}
    >
      &#183;
    </span>
  );
}
