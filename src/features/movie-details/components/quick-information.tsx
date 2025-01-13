import Image from "next/image";
import { Suspense } from "react";

import { RatingCircle } from "@/components/rating-circle";
import { Dot } from "@/components/ui/dot";
import { Shimmer } from "@/components/ui/shimmer";
import { getMovieDetails } from "@/features/movie-details/data/get-movie-details";
import { secondsToHM } from "@/lib/utils/number-helpers";
import { getMovieCrew } from "../data/get-movie-credits";
import { UserActions, UserActionsFallback } from "./user-actions";

export async function QuickInformation({ movieId }: { movieId: number }) {
  const [movie, crew] = await Promise.all([
    getMovieDetails({ movie_id: movieId }),
    getMovieCrew({ movie_id: movieId }),
  ]);

  const groupedByName = Object.groupBy(
    crew.filter(({ name }) => name),
    ({ name }) => name!,
  );

  const length = movie.runtime ? secondsToHM(movie.runtime * 60) : "N/A";
  const bgImageURL = `https://media.themoviedb.org/t/p/w533_and_h300_bestv2/${movie.backdrop_path}`;
  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";
  const releases = movie.release_date
    ? `${new Date(movie.release_date!).toLocaleDateString()} (${movie.origin_country?.join(", ")})`
    : "N/A";
  const genres = movie.genres.map((g: { name: string }) => g.name).join(", ");

  return (
    <div
      style={{
        backgroundImage: `url(${bgImageURL})`,
        backgroundSize: "cover",
      }}
    >
      <div className="black-gradient">
        <div className="container grid grid-cols-[auto_1fr] items-center gap-12 py-10 text-layout-fg">
          {/* Left */}
          <Image
            src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}
            className="h-[450px] w-[300px] rounded-lg bg-gray-50/80 brightness-95"
            loading="eager"
          />
          {/* Right */}
          <div>
            <section className="mb-7">
              <h1 className="text-4xl font-bold">
                {movie.title}
                <span className="ms-1 font-normal opacity-80">
                  ({releaseYear})
                </span>
              </h1>
              <div className="flex items-center gap-2">
                <span>{releases}</span>
                <Dot />
                <span>{genres}</span>
                <Dot />
                <span>{length}</span>
              </div>
            </section>
            <div className="mb-4 flex items-center gap-2">
              <RatingCircle rating={movie.vote_average} />
              <span className="font-bold">
                User <br /> Score
              </span>
              <div className="ms-2 rounded-full bg-layout-bg px-4 py-2 font-bold text-layout-fg shadow">
                What&apos;s your Vibe?
              </div>
            </div>
            <Suspense fallback={<UserActionsFallback />}>
              <UserActions movieId={movie.id} />
            </Suspense>
            <p className="mb-2 text-lg italic opacity-80">{movie.tagline}</p>
            <section className="mb-6">
              <h2 className="mb-2 text-xl font-semibold">Overview</h2>
              <p className="font-medium drop-shadow-sm">{movie.overview}</p>
            </section>
            <section>
              <h2 className="sr-only">Directing credits</h2>
              <ul className="flex flex-wrap justify-between gap-8">
                {Object.entries(groupedByName)
                  .slice(0, 4)
                  .map(([name, credits]) => (
                    <li key={name}>
                      <section>
                        <h3 className="font-bold">{name}</h3>
                        <p>{credits!.map((j) => j.job).join(", ")}</p>
                      </section>
                    </li>
                  ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export function QuickInformationFallback() {
  return (
    <div className="h-[536px]">
      <div className="bg-gray-200" aria-hidden="true">
        <div className="container grid grid-cols-[auto_1fr] items-center gap-12 py-10 text-layout-fg">
          <Shimmer className="h-[450px] w-[300px] rounded-lg" />
          <Shimmer className="h-[450px] w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}
