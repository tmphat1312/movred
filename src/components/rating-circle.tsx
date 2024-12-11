import { cn } from "@/lib/utils/cn";

export function RatingCircle({
  className,
  rating,
}: {
  className?: string;
  rating: number;
}) {
  const percentage = Number((rating * 10).toFixed(0));

  let circleColor = "";

  if (percentage >= 70) {
    circleColor = "text-green-500";
  } else if (percentage >= 40) {
    circleColor = "text-yellow-500";
  } else {
    circleColor = "text-red-500";
  }

  return (
    <div
      className={cn(
        "relative inline-block size-16 text-2xl font-medium text-layout-fg",
        className,
      )}
    >
      <svg className="h-full w-full" viewBox="0 0 100 100">
        <circle
          className="fill-current stroke-current text-layout-bg"
          strokeWidth={8}
          cx={50}
          cy={50}
          r={46}
        />
        <circle
          className="stroke-current text-gray-600"
          strokeWidth={8}
          cx={50}
          cy={50}
          r={40}
          fill="transparent"
        />
        <circle
          className={`${circleColor} stroke-current`}
          strokeWidth={8}
          strokeLinecap="round"
          cx={50}
          cy={50}
          r={40}
          fill="transparent"
          strokeDasharray="252"
          strokeDashoffset={`calc(252px - (252px * ${percentage}) / 100)`}
        />
        <text
          x={50}
          y={50}
          textAnchor="middle"
          alignmentBaseline="middle"
          fill="currentColor"
          fontWeight="bold"
        >
          {percentage > 0 ? <>{percentage}&#65130;</> : "NR"}
        </text>
      </svg>
    </div>
  );
}
