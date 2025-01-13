"use client";

import { cn } from "@/lib/utils/cn";
import { useEffect, useState } from "react";

export function FloatingMessage({
  className,
  children,
  variant = "success",
  ...props
}: React.ComponentProps<"p"> & {
  variant?: "success" | "error";
}) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed right-[20px] top-[40px] z-10 rounded-md bg-gray-50 p-2 pe-5 text-gray-900 shadow-md",
        variant === "success"
          ? "bg-green-50 text-green-700"
          : "bg-red-50 text-red-500",
        className,
      )}
      aria-live="polite"
      {...props}
    >
      <p>{children}</p>
      <button
        className="absolute right-0 top-0 p-0.5"
        onClick={() => setIsOpen(false)}
      >
        <span className="sr-only">Close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => setIsOpen(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
