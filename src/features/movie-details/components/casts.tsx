import Image from "next/image";
import Link from "next/link";

import { Slider, SliderItem } from "@/components/slider";
import { Shimmer } from "@/components/ui/shimmer";
import { UnderlineLink } from "@/components/ui/underline-link";
import { getMovieCast } from "../data/get-movie-credits";

export async function Casts({ movieId }: { movieId: number }) {
  const cast = await getMovieCast({ movie_id: movieId });

  if (cast.length === 0) {
    return <p>No information about the casts yet.</p>;
  }

  return (
    <Slider>
      {cast.map((person) => (
        <SliderItem key={person.id}>
          <article className="w-[138px] overflow-clip rounded-lg border shadow">
            <Link href={`/people/${person.id}`} className="group overflow-clip">
              <Image
                src={`https://media.themoviedb.org/t/p/w138_and_h175_face/${person.profile_path}`}
                alt={person.name ?? "profile picture"}
                width={138}
                height={175}
                className="h-[175px] w-full bg-gray-100 transition-transform group-hover:brightness-90"
              />
            </Link>
            <section className="mb-2 px-1.5 py-2">
              <UnderlineLink href={`/people/${person.id}`}>
                <h3
                  className="line-clamp-1 text-wrap font-bold"
                  title={person.name ?? "Unknown"}
                >
                  {person.name}
                </h3>
              </UnderlineLink>
              <p
                className="line-clamp-1 text-wrap text-sm"
                title={person.character ?? "Unknown"}
              >
                {person.character}
              </p>
            </section>
          </article>
        </SliderItem>
      ))}
    </Slider>
  );
}

export function CastsFallback() {
  return (
    <Slider>
      {Array.from({ length: 10 }).map((_, index) => (
        <SliderItem key={index}>
          <article className="w-[138px] overflow-clip rounded-lg border shadow">
            <Shimmer className="mb-1.5 h-[175px] bg-gray-100" />
            <section className="mb-2 px-1.5 py-2">
              <Shimmer className="mb-1.5 h-[18px] w-full" />
              <Shimmer className="h-[14px] w-full" />
            </section>
          </article>
        </SliderItem>
      ))}
    </Slider>
  );
}
