import { RatingCircle } from "@/components/rating-circle";
import { TempLoadingIndicator } from "@/components/temp-loading-indicator";
import { getMovieDetail } from "@/data/get-movie-detail";
import Image from "next/image";
import { Suspense } from "react";

export function MainInformation({ movieId }: { movieId: number }) {
  return (
    <Suspense fallback={<TempLoadingIndicator />}>
      <MainInformationWithoutSuspense movieId={movieId} />
    </Suspense>
  );
}

async function MainInformationWithoutSuspense({
  movieId,
}: {
  movieId: number;
}) {
  const movie = await getMovieDetail({ movie_id: movieId });
  const length = `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`;

  return (
    <div
      className="bg-gray-800"
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${movie.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="black-gradient">
        <section className="container grid grid-cols-[auto_1fr] items-center gap-12 py-10 text-layout-fg">
          <Image
            src={
              "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/" +
              movie.poster_path
            }
            alt={movie.title}
            width={300}
            height={450}
            className="h-[450px] w-[300px] rounded-lg bg-gray-50/50 brightness-75"
            loading="lazy"
          />
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold">
                {movie.title}{" "}
                <span className="font-normal opacity-80">
                  ({new Date(movie.release_date).getFullYear()})
                </span>
              </h1>
              <div>
                <span>
                  {new Date(movie.release_date).toLocaleDateString()} (
                  {movie.origin_country.join(", ")})
                </span>
                <span role="presentation"> - </span>
                <span>{movie.genres.map((g) => g.name).join(", ")}</span>
                <span role="presentation"> - </span>
                <span>{length}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <RatingCircle rating={movie.vote_average} />
              <span className="font-semibold">User score</span>
            </div>
            <p className="italic opacity-80">{movie.tagline}</p>
            <div>
              <h2 className="text-lg font-semibold">Overview</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
