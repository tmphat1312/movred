import { Suspense } from "react";
import { AddToWatchList } from "./add-to-watch-list";
import { PlayModalButton } from "./play-modal-button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { UnderlineLink } from "@/components/ui/underline-link";

export function UserActions({ movieId }: { movieId: number }) {
  return (
    <div className="mb-2.5 flex items-center gap-4">
      <SignedIn>
        <AddToWatchList movieId={movieId} />
      </SignedIn>
      <SignedOut>
        <div className="rounded-md bg-layout-bg px-2 py-1 text-sm">
          <UnderlineLink href="/sign-in">
            Sign in to add to watch and favorite lists
          </UnderlineLink>
        </div>
      </SignedOut>
      <Suspense>
        <PlayModalButton movieId={movieId} />
      </Suspense>
    </div>
  );
}
