import { PlayModalButton } from "./play-modal-button";

export function UserActions({ movieId }: { movieId: number }) {
  return (
    <div className="h-[60px]">
      <PlayModalButton movieId={movieId} />
    </div>
  );
}
