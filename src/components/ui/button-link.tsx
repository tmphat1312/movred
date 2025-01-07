import { cn } from "@/lib/utils/cn";
import Link from "next/link";

type GradientLinkProps = React.ComponentProps<typeof Link>;

export function ButtonLink({ className, ...props }: GradientLinkProps) {
  return (
    <Link
      className={cn(
        "hover:green-gradient light-blue-gradient rounded-full border-2 px-5 py-0.5 hover:shadow-md",
        className,
      )}
      {...props}
    />
  );
}
