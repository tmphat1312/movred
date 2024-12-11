import { Banner } from "@/features/movie-details/components/banner";
import { MainInformation } from "@/features/movie-details/components/main-information";
import { SectionPlaceholder } from "@/components/section-placeholder";

export default async function MovieDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const movieId = parseInt(id, 10);

  return (
    <>
      <Banner movieId={movieId} />
      <main>
        <MainInformation movieId={movieId} />
        <SectionPlaceholder />
      </main>
    </>
  );
}
