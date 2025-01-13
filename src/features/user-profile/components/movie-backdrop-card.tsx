import { UnderlineLink } from "@/components/ui/underline-link";
import { Nullable } from "@/types/utilities";
import Image from "next/image";

export function MovieBackdropCard({
  movie,
}: {
  movie: {
    backdrop_path: Nullable<string>;
    title: string;
    id: number;
  };
}) {
  return (
    <article className="group w-[200px] overflow-clip rounded-md bg-gray-50 pb-1 text-gray-900 shadow-md transition-shadow hover:shadow-lg">
      <UnderlineLink href={`/movies/${movie.id}`}>
        <Image
          src={`https://media.themoviedb.org/t/p/w355_and_h200_multi_faces/${movie.backdrop_path})`}
          alt={movie.title}
          className="mb-1.5 h-[120px] w-full bg-slate-50 object-cover transition-transform group-hover:opacity-80"
          width={200}
          height={120}
        />
      </UnderlineLink>
      <h3
        className="mx-auto my-2 line-clamp-1 w-fit text-wrap px-1.5 font-medium"
        title={movie.title}
      >
        <UnderlineLink href={`/movies/${movie.id}`}>
          {movie.title}
        </UnderlineLink>
      </h3>
    </article>
  );
}
