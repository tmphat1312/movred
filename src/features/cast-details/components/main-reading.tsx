import { Slider, SliderItem } from "@/components/slider";
import { UnderlineLink } from "@/components/ui/underline-link";
import Image from "next/image";
import { getCastDetails } from "../data/get-cast-details";
import { getCastMovieCredits } from "../data/get-cast-movie-credits";
import { Biography } from "./biography";
import { OutlineDot } from "./outline-dot";
import { Shimmer } from "@/components/ui/shimmer";

export async function MainReading({ castId }: { castId: number }) {
  const [castDetails, movieCredits] = await Promise.all([
    getCastDetails({ castId }) as Promise<{
      name: string;
      biography: string | null;
    }>,
    getCastMovieCredits({ castId }) as Promise<
      {
        poster_path: string;
        popularity: number;
        title: string;
        id: number;
        release_date: string;
        character: string;
      }[]
    >,
  ]);
  const tenMostPopularMovies = movieCredits
    .toSorted((a, b) => b.popularity - a.popularity)
    .slice(0, 10);
  const moviesGroupedByYear = Object.groupBy(movieCredits, (movie) =>
    movie.release_date ? new Date(movie.release_date).getFullYear() : "-",
  );
  const moviesGroupedByYearArray = Object.entries(moviesGroupedByYear).sort(
    ([aYear], [bYear]) => parseInt(bYear) - parseInt(aYear),
  );

  // if the year is not available, move the movies of that year to the front
  const notAvailableYearIndex = moviesGroupedByYearArray.findIndex(
    ([year]) => year === "-",
  );

  if (notAvailableYearIndex !== -1) {
    const notAvailableYear = moviesGroupedByYearArray[notAvailableYearIndex];
    moviesGroupedByYearArray.splice(notAvailableYearIndex, 1);
    moviesGroupedByYearArray.unshift(notAvailableYear);
  }

  console.log(moviesGroupedByYearArray);
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">{castDetails.name}</h1>
      <section>
        <h2 className="mb-2 text-xl font-semibold">Biography</h2>
        <Biography biography={castDetails.biography} />
      </section>
      <section>
        <h2 className="mb-2 text-xl font-semibold">Known For</h2>
        <Slider>
          {tenMostPopularMovies.map((movie) => (
            <SliderItem key={movie.id}>
              <article className="w-[130px]">
                <UnderlineLink href={`/movies/${movie.id}`}>
                  <Image
                    src={`https://media.themoviedb.org/t/p/w150_and_h225_bestv2/${movie.poster_path}`}
                    alt={movie.title}
                    width={130}
                    height={195}
                    className="mb-3 h-[195px] w-full rounded-lg bg-gray-100 transition-transform hover:shadow hover:brightness-90"
                  />
                </UnderlineLink>
                <UnderlineLink href={`/movies/${movie.id}`}>
                  <h3
                    className="line-clamp-2 text-balance text-center text-sm"
                    title={movie.title}
                  >
                    {movie.title}
                  </h3>
                </UnderlineLink>
              </article>
            </SliderItem>
          ))}
        </Slider>
      </section>
      <section>
        <h2 className="mb-2 text-xl font-semibold">Acting</h2>
        <table className="w-full border border-t-0 shadow-lg">
          <thead className="sr-only">
            <tr>
              <th>Year</th>
              <th>Movies</th>
            </tr>
          </thead>
          <tbody>
            {moviesGroupedByYearArray.map(([year, movies]) => (
              <tr key={year} className="border-t">
                <td className="py-4 ps-6 font-semibold">{year}</td>
                <td className="py-4">
                  <ul className="space-y-3">
                    {movies!.map((movie) => (
                      <li key={movie.id}>
                        <UnderlineLink href={`/movies/${movie.id}`}>
                          <h4 className="inline-flex items-center gap-5 text-balance font-semibold">
                            <OutlineDot />
                            {movie.title}
                          </h4>
                        </UnderlineLink>
                        {movie.character && (
                          <p className="ps-12">
                            <span className="opacity-50">as</span>{" "}
                            <span>{movie.character}</span>
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export function MainReadingFallback() {
  return (
    <div className="space-y-6" aria-hidden="true">
      <Shimmer className="h-[40px] w-[300px] bg-gray-50/80" />
      <section>
        <h2 className="mb-2 text-xl font-semibold">Biography</h2>
        <div>
          <Shimmer className="mb-[5px] h-[16px] w-full rounded bg-gray-50/80" />
          <Shimmer className="mb-[5px] h-[16px] w-full rounded bg-gray-50/80" />
          <Shimmer className="mb-[5px] h-[16px] w-full rounded bg-gray-50/80" />
          <Shimmer className="mb-[5px] h-[16px] w-full rounded bg-gray-50/80" />
          <Shimmer className="mb-[5px] h-[16px] w-full rounded bg-gray-50/80" />
          <Shimmer className="h-[15px] w-2/3 rounded bg-gray-50/80" />
        </div>
      </section>
      <section>
        <h2 className="mb-2 text-xl font-semibold">Known For</h2>
        <Slider>
          {Array.from({ length: 10 }).map((_, index) => (
            <SliderItem key={index}>
              <article className="w-[130px]">
                <Shimmer className="mb-3 h-[195px] w-full rounded-lg bg-gray-50/80" />
                <Shimmer className="mb-1 h-[18px] w-full rounded bg-gray-50/80 text-center text-sm" />
                <Shimmer className="mx-auto h-[18px] w-1/2 rounded bg-gray-50/80 text-center text-sm" />
              </article>
            </SliderItem>
          ))}
        </Slider>
      </section>
      <section>
        <h2 className="mb-2 text-xl font-semibold">Acting</h2>
        <Shimmer className="h-[400px] w-full rounded-lg bg-gray-50/80" />
      </section>
    </div>
  );
}
