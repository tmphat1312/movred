import { cn } from "@/lib/utils/cn";
import Link from "next/link";

type GradientLinkProps = React.ComponentProps<typeof Link>;

export function GradientLink({ className, ...props }: GradientLinkProps) {
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
