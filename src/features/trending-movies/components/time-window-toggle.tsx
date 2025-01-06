"use client";

import { useTimeWindow } from "@/features/trending-movies/hooks/use-time-window";
import { cn } from "@/lib/utils/cn";

export function TimeWindowToggle() {
  const { changeTimeWindow, currentTimeWindow, possibleTimeWindows } =
    useTimeWindow();

  return (
    <div className="relative overflow-clip rounded-full border border-layout-bg bg-transparent font-medium leading-5">
      <div
        className={cn(
          "absolute top-0 -z-10 h-full w-[82px] rounded-full bg-layout-bg transition-[left_width] duration-300 ease-linear",
          currentTimeWindow == "day" && "left-0 w-[82px]",
          currentTimeWindow == "week" && "left-[82px] w-[120px]",
        )}
      />
      {possibleTimeWindows.map(({ value, label }) => (
        <button
          key={value}
          className={cn(
            "rounded-full px-5 py-1 font-bold transition-colors",
            currentTimeWindow == value && "text-green-gradient outline-red-500",
            "active:green-gradient",
          )}
          onClick={() => changeTimeWindow(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
