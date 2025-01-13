import { UnderlineLink } from "@/components/ui/underline-link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { AddToFavorite } from "./add-to-favorite";
import { AddToWatchList } from "./add-to-watch-list";
import { PlayModalButton } from "./play-modal-button";

export function UserActions({ movieId }: { movieId: number }) {
  return (
    <div className="mb-2.5 flex items-center gap-4">
      <SignedIn>
        <AddToFavorite movieId={movieId} />
        <AddToWatchList movieId={movieId} />
      </SignedIn>
      <SignedOut>
        <div className="rounded-md bg-layout-bg px-2 py-1 text-sm">
          <UnderlineLink href="/sign-in">
            Sign in to add to watch and favorite lists
          </UnderlineLink>
        </div>
      </SignedOut>
      <PlayModalButton movieId={movieId} />
    </div>
  );
}

export function UserActionsFallback() {
  return <div className="h-[38px] w-[300px]" />;
}
