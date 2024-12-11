import { cn } from "@/lib/utils/cn";
import Link, { LinkProps } from "next/link";

export function UnderlineLink({
  className,
  ...props
}: LinkProps & { className?: string; children?: React.ReactNode }) {
  return (
    <Link
      className={cn(
        "underline-offset-2 hover:text-link-hover hover:underline",
        className,
      )}
      {...props}
    />
  );
}
