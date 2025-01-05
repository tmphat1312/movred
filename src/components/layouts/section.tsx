import { cn } from "@/lib/utils/cn";

export function Section({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return <section className={cn("container py-8", className)} {...props} />;
}
