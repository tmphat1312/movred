import { UnderlineLink } from "@/components/ui/underline-link";
import { Nullable } from "@/types/utilities";
import Image from "next/image";

export function MoviePosterCard({
  movie,
}: {
  movie: {
    poster_path: Nullable<string>;
    title: string;
    movie_id: number;
  };
}) {
  return (
    <article className="group h-full w-[160px] overflow-clip rounded-md bg-gray-50 pb-1 text-gray-900 shadow-md transition-shadow hover:shadow-lg">
      <UnderlineLink href={`/movies/${movie.movie_id}`}>
        <Image
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path})`}
          alt={movie.title}
          className="mb-1.5 h-[165px] w-full bg-slate-50 object-cover transition-transform group-hover:opacity-80"
          width={160}
          height={165}
        />
      </UnderlineLink>
      <h3
        className="mx-auto my-2 line-clamp-2 w-fit text-wrap px-1.5 text-center text-sm font-medium"
        title={movie.title}
      >
        <UnderlineLink href={`/movies/${movie.movie_id}`}>
          {movie.title}
        </UnderlineLink>
      </h3>
    </article>
  );
}
