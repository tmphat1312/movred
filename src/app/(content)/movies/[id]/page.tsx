import { Suspense } from "react";

import { Banner } from "@/features/movie-details/components/banner";
import {
  Casts,
  CastsFallback,
} from "@/features/movie-details/components/casts";
import {
  MoreInformation,
  MoreInformationFallback,
} from "@/features/movie-details/components/more-information";
import {
  QuickInformation,
  QuickInformationFallback,
} from "@/features/movie-details/components/quick-information";
import {
  Ratings,
  RatingsFallback,
} from "@/features/movie-details/components/ratings";
import {
  Recommendations,
  RecommendationsFallback,
} from "@/features/movie-details/components/recommendations";
import {
  ReviewList,
  ReviewListFallback,
} from "@/features/movie-details/components/review-list";
import {
  YourReview,
  YourReviewFallback,
} from "@/features/movie-details/components/your-review";

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
            <section>
              <h3 className="mb-2.5 text-2xl font-bold">Reviews</h3>
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-7">
                  <Suspense fallback={<ReviewListFallback />}>
                    <ReviewList movieId={movieId} />
                  </Suspense>
                </div>
                <div className="col-span-5">
                  <Suspense fallback={<YourReviewFallback />}>
                    <YourReview movieId={movieId} />
                  </Suspense>
                </div>
              </div>
            </section>
            <section>
              <h3 className="mb-2.5 text-2xl font-bold">Rating</h3>
              <Suspense fallback={<RatingsFallback />}>
                <Ratings movieId={movieId} />
              </Suspense>
            </section>
            <section>
              <h3 className="mb-2.5 text-2xl font-bold">Recommendations</h3>
              <Suspense fallback={<RecommendationsFallback />}>
                <Recommendations movieId={movieId} />
              </Suspense>
            </section>
          </div>
          <div className="col-span-2">
            <Suspense fallback={<MoreInformationFallback />}>
              <MoreInformation movieId={movieId} />
            </Suspense>
          </div>
        </div>
      </main>
    </>
  );
}
