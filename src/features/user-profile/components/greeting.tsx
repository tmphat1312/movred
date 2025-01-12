"use client";

import { Shimmer } from "@/components/ui/shimmer";
import { useUser } from "@clerk/nextjs";

export function Greeting() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="border-b py-4 shadow-sm">
        <Shimmer className="mx-auto h-[24px] w-[160px]" />
      </div>
    );
  }

  if (isSignedIn) {
    return (
      <div className="border-b py-4 text-center shadow-sm">
        <span>Hi </span>
        <span className="text-green-gradient font-medium">
          {user.fullName}!
        </span>
        <span>, how it&apos;s going today?</span>
      </div>
    );
  }

  return <div>Not signed in</div>;
}
