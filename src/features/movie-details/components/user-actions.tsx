import { Suspense } from "react";
import { AddToWatchList } from "./add-to-watch-list";
import { PlayModalButton } from "./play-modal-button";

export function UserActions({ movieId }: { movieId: number }) {
  return (
    <div className="mb-2.5 flex items-center gap-4">
      <AddToWatchList movieId={movieId} />
      <Suspense>
        <PlayModalButton movieId={movieId} />
      </Suspense>
    </div>
  );
}
