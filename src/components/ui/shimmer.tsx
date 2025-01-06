import { cn } from "@/lib/utils/cn";

export function Shimmer({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("shimmer h-[100px] w-[200px]", className)}
      aria-hidden="true"
      aria-label="Loading content"
      {...props}
    />
  );
}
