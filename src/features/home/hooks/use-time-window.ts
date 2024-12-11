import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const TIME_WINDOWS = [
  {
    value: "day",
    label: "Today",
  },
  {
    value: "week",
    label: "This week",
  },
] as const;
export type TimeWindow = (typeof TIME_WINDOWS)[number]["value"];

export function useTimeWindow() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const time_window = (searchParams.get("time_window") ?? "day") as TimeWindow;

  function changeTimeWindow(time_window: TimeWindow) {
    router.push(`${pathname}?time_window=${time_window}`, { scroll: false });
  }

  return {
    possibleTimeWindows: TIME_WINDOWS,
    currentTimeWindow: time_window,
    changeTimeWindow,
  };
}
