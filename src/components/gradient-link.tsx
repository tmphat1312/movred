import { cn } from "@/lib/utils/cn";
import Link, { LinkProps } from "next/link";

export function GradientLink({
  className,
  ...props
}: LinkProps & { className?: string; children?: React.ReactNode }) {
  return (
    <Link
      className={cn(
        "hover:text-green-gradient transition-colors duration-100",
        className,
      )}
      {...props}
    />
  );
}
