import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";

import { Slider, SliderItem } from "@/components/slider";
import { UnderlineLink } from "@/components/ui/underline-link";
import { Nullable } from "@/types/utilities";
import { getMovieRecommendations } from "../data/get-movie-recommendations";

export async function Recommendations({ movieId }: { movieId: number }) {
  const recommendations = await getMovieRecommendations({ movieId });

  const toVotePercentage = (voteAverage: number) =>
    `${Math.ceil(voteAverage * 10)}%`;
  const makeTitle = (title: Nullable<string>) =>
    title && title.length > 30 ? `${title.slice(0, 30)}...` : title;

  if (!recommendations.length) return <p>There is not recommendations yet.</p>;

  return (
    <Slider>
      {recommendations.map((recommendation) => (
        <SliderItem key={recommendation.id}>
          <article className="w-[250px] space-y-2.5">
            <Link
              href={`/movies/${recommendation.id}`}
              className="group relative"
            >
              <Image
                src={`https://media.themoviedb.org/t/p/w250_and_h141_face/${recommendation.backdrop_path}`}
                alt={recommendation.title ?? "Movie backdrop"}
                width={250}
                height={141}
                className="h-[141px] w-[250px] rounded-lg bg-gray-100"
              />
              <div className="absolute inset-x-0 bottom-0 hidden items-center gap-1.5 bg-white/90 px-2.5 py-1.5 group-hover:flex">
                <FaRegCalendarAlt size={14} />
                <time>
                  {recommendation.release_date?.replaceAll("-", "/") ?? "N/A"}
                </time>
              </div>
            </Link>
            <div className="flex justify-between gap-1 px-1.5 text-sm">
              <UnderlineLink href={`/movies/${recommendation.id}`}>
                <h4 title={recommendation.title ?? "unknown"}>
                  {makeTitle(recommendation.title)}
                </h4>
              </UnderlineLink>
              <span>{toVotePercentage(recommendation.vote_average ?? 0)}</span>
            </div>
          </article>
        </SliderItem>
      ))}
    </Slider>
  );
}

export const RecommendationsFallback = () => (
  <Slider>
    {Array.from({ length: 5 }).map((_, index) => (
      <SliderItem key={index}>
        <article className="w-[250px] space-y-2.5">
          <div className="h-[141px] w-[250px] animate-pulse rounded-lg bg-gray-300" />
          <div className="flex justify-between gap-1 px-1.5 text-sm">
            <div className="h-4 w-20 animate-pulse bg-gray-300" />
            <div className="h-4 w-8 animate-pulse bg-gray-300" />
          </div>
        </article>
      </SliderItem>
    ))}
  </Slider>
);
