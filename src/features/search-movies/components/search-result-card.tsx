import { UnderlineLink } from "@/components/ui/underline-link";
import { dateFormatter } from "@/lib/utils/date-formatters";
import Image from "next/image";
import Link from "next/link";

export function SearchResultCard(movie: {
  id: number;
  poster_path: string | null;
  title: string;
  release_date: string | null;
  overview: string | null;
}) {
  return (
    <article className="grid grid-cols-[auto_1fr] gap-4 overflow-clip rounded-md shadow-md">
      <Link href={`/movies/${movie.id}`}>
        {movie.poster_path ? (
          <Image
            src={`https://media.themoviedb.org/t/p/w94_and_h141_bestv2${movie.poster_path}`}
            className="h-[141px] w-[94px] bg-gray-100 transition-[filter] hover:brightness-90"
            alt={movie.title}
            width={94}
            height={141}
            loading="lazy"
            decoding="async"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="https://placeholder.pics/svg/94x141/DEDEDE/FFFFFF-FFFFFF/Broken"
            alt={movie.title}
            className="h-[141px] w-[94px] bg-gray-100"
          />
        )}
      </Link>
      <div className="px-2 py-4">
        <section className="mb-2">
          <UnderlineLink href={`/movies/${movie.id}`}>
            <h2 className="w-fit text-lg font-bold">{movie.title}</h2>
          </UnderlineLink>
          <time className="opacity-70">
            {movie.release_date
              ? dateFormatter.format(new Date(movie.release_date))
              : "N/A"}
          </time>
        </section>
        <p className="line-clamp-2 max-w-prose">{movie.overview || "N/A"}</p>
      </div>
    </article>
  );
}
