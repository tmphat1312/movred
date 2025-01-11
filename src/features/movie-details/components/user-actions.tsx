import { Suspense } from "react";
import { PlayModalButton } from "./play-modal-button";

export function UserActions({ movieId }: { movieId: number }) {
  return (
    <div className="h-[60px]">
      <Suspense>
        <PlayModalButton movieId={movieId} />
      </Suspense>
    </div>
  );
}
