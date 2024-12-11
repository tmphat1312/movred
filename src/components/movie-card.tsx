import Image from "next/image";
import Link from "next/link";
import { UnderlineLink } from "./underline-link";
import { dateFormatter } from "@/lib/utils/date-formatters";

export function MovieCard(movie: {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}) {
  return (
    <article className="inline-block w-[150px] min-w-[150px] snap-center">
      <Link
        href={`movies/${movie.id}`}
        className="mb-4 inline-block h-[225px] w-full rounded bg-gray-50"
      >
        <Image
          src={
            "https://media.themoviedb.org/t/p/w220_and_h330_face" +
            movie.poster_path
          }
          alt={movie.title}
          width={150}
          height={225}
          className="rounded-lg transition-[filter] hover:brightness-75"
          placeholder="blur"
          blurDataURL="|1PQ87-;-;-;%M%MM{-;WB_3fQfQj[j[fQfQj[fQ~qayD%ayIUofxuayof_3fQayfQayj[j[fQfQ4nj[-;j[%MWBM{j[WB_3j[j[j[j[ayayj[fQ_3ayIUayIUofxuayof_3fQayfQayj[j[ayfQ4nj[%Mj[%MWBM{j[WB"
          loading="lazy"
        />
      </Link>
      <section>
        <UnderlineLink href={`movies/${movie.id}`}>
          <h4 className="line-clamp-2 text-pretty font-semibold leading-5">
            {movie.title}
          </h4>
        </UnderlineLink>
        <p className="text-gray-500">
          {dateFormatter.format(new Date(movie.release_date))}
        </p>
      </section>
      <p>Rating: {movie.vote_average}</p>
    </article>
  );
}