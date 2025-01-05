import { cn } from "@/lib/utils/cn";

export function SliderItem({
  className,
  ...props
}: React.ComponentProps<"li">) {
  return <li className={cn("flex-none", className)} {...props} />;
}

export function Slider({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      className={cn(
        "scroll-snap custom-scrollbar flex snap-mandatory space-x-5 overflow-x-scroll whitespace-nowrap pb-6",
        className,
      )}
      {...props}
    />
  );
}
