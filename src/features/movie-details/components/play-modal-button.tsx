import { getMovieTrailer } from "@/features/latest-trailers/data/get-latest-trailers";
import { PlayTrailerModal } from "./play-trailer-modal";

export async function PlayModalButton({ movieId }: { movieId: number }) {
  const trailer = (await getMovieTrailer({ id: movieId })) as {
    key: string;
    name: string;
  };

  return <PlayTrailerModal trailer={trailer} />;
}
