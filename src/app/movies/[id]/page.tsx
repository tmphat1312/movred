import { Banner } from "@/features/movie-details/components/banner";
import {
  QuickInformation,
  QuickInformationFallback,
} from "@/features/movie-details/components/quick-information";
import { SectionPlaceholder } from "@/components/section-placeholder";
import { MoreInformation } from "@/features/movie-details/components/more-information";
import {
  Casts,
  CastsFallback,
} from "@/features/movie-details/components/casts";
import { Reviews } from "@/features/movie-details/components/reviews";
import { Media } from "@/features/movie-details/components/media";
import { Recommendations } from "@/features/movie-details/components/recommendations";
import { Suspense } from "react";
import { Rating } from "@/features/movie-details/components/rating";

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
        <Suspense fallback={<QuickInformationFallback />}>
          <QuickInformation movieId={movieId} />
        </Suspense>
        <div className="container grid grid-cols-12 gap-8 py-8">
          <div className="col-span-10 space-y-6">
            <section>
              <h2 className="mb-2.5 text-3xl font-bold">Cast</h2>
              <Suspense fallback={<CastsFallback />}>
                <Casts movieId={movieId} />
              </Suspense>
            </section>
            <Reviews />
            <Rating />
            <Media />
            <Recommendations />
          </div>
          <div className="col-span-2">
            <MoreInformation movieId={movieId} />
          </div>
        </div>
        <SectionPlaceholder />
      </main>
    </>
  );
}
