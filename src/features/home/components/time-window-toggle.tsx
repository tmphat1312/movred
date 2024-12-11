"use client";

import { useTimeWindow } from "@/features/home/hooks/use-time-window";
import { cn } from "@/lib/utils/cn";
import { Suspense } from "react";

export function TimeWindowToggle() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <TimeWindowToggleWithoutSuspense />
    </Suspense>
  );
}

function TimeWindowToggleWithoutSuspense() {
  const { changeTimeWindow, currentTimeWindow, possibleTimeWindows } =
    useTimeWindow();

  return (
    <div className="relative overflow-clip rounded-full border border-layout-bg bg-transparent font-medium leading-5">
      <div
        className={cn(
          "duration-400 absolute top-0 -z-10 h-full w-[82px] rounded-full bg-layout-bg transition-[left_width] ease-linear",
          currentTimeWindow == "day" && "left-0 w-[82px]",
          currentTimeWindow == "week" && "left-[82px] w-[108px]",
        )}
      />
      {possibleTimeWindows.map(({ value, label }) => (
        <button
          key={value}
          className={cn(
            "px-5 py-1 transition-colors",
            currentTimeWindow == value && "text-green-gradient",
          )}
          onClick={() => changeTimeWindow(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
