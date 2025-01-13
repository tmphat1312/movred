import { isMovieInYourFavoriteList } from "../data/is-movie-in-your-favorite-list";
import { AddToWatchListForm } from "./add-to-watch-list-form";
import { RemoveFromWatchListForm } from "./remove-from-watch-list-form";

export async function AddToWatchList({ movieId }: { movieId: number }) {
  const isInWatchList = await isMovieInYourFavoriteList({ movieId });

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
