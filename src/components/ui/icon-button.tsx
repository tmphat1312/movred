import { cn } from "@/lib/utils/cn";

export function IconButton({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "hover:green-gradient rounded-full bg-layout-bg p-2.5 text-layout-fg shadow",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
