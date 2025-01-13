import { isMovieInYourFavoriteList } from "../data/is-movie-in-your-favorite-list";
import { AddToFavoriteForm } from "./add-to-favorite-form";
import { RemoveFromFavoriteForm } from "./remove-from-favorite-form";

export async function AddToFavorite({ movieId }: { movieId: number }) {
  const isInFavoriteList = await isMovieInYourFavoriteList({
    movieId,
  });

  return (
    <>
      {isInFavoriteList ? (
        <RemoveFromFavoriteForm movieId={movieId} />
      ) : (
        <AddToFavoriteForm movieId={movieId} />
      )}
    </>
  );
}
