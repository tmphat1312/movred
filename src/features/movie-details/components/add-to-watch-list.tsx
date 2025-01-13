import { isMovieInYourWatchList } from "../data/is-movie-in-your-watch-list";
import { AddToWatchListForm } from "./add-to-watch-list-form";
import { RemoveFromWatchListForm } from "./remove-from-watch-list-form";

export async function AddToWatchList({ movieId }: { movieId: number }) {
  const isInWatchList = await isMovieInYourWatchList({ movieId });

  return (
    <>
      {isInWatchList ? (
        <RemoveFromWatchListForm movieId={movieId} />
      ) : (
        <AddToWatchListForm movieId={movieId} />
      )}
    </>
  );
}
