import { Suspense } from "react";

import { Shimmer } from "@/components/ui/shimmer";
import { getMovieDetails } from "../data/get-movie-details";
import { Keywords, KeywordsFallback } from "./keywords";
import { SocialLinks, SocialLinksFallback } from "./social-links";

export async function MoreInformation({ movieId }: { movieId: number }) {
  const { status, budget, revenue, original_language } = await getMovieDetails({
    movie_id: movieId,
  });

  return (
    <section className="space-y-6">
      <h2 className="sr-only">More information</h2>
      <Suspense fallback={<SocialLinksFallback />}>
        <SocialLinks movieId={movieId} />
      </Suspense>
      <dl className="space-y-6">
        <div>
          <dt className="font-bold">Status</dt>
          <dd>{status}</dd>
        </div>
        <div>
          <dt className="font-bold">Original Language</dt>
          <dd>{original_language}</dd>
        </div>
        <div>
          <dt className="font-bold">Budget</dt>
          <dd>${budget?.toLocaleString() ?? 0}</dd>
        </div>
        <div>
          <dt className="font-bold">Revenue</dt>
          <dd>${revenue?.toLocaleString() ?? 0}</dd>
        </div>
        <div>
          <dt className="mb-2 font-bold">Keywords</dt>
          <dd>
            <Suspense fallback={<KeywordsFallback />}>
              <Keywords movieId={movieId} />
            </Suspense>
          </dd>
        </div>
      </dl>
    </section>
  );
}

export function MoreInformationFallback() {
  return (
    <section className="space-y-6">
      <h2 className="sr-only">More information</h2>
      <SocialLinksFallback />
      <dl className="space-y-6">
        <div>
          <dt className="font-bold">Status</dt>
          <dd>
            <Shimmer className="h-[22.5px] w-1/2" />
          </dd>
        </div>
        <div>
          <dt className="font-bold">Original Language</dt>
          <dd>
            <Shimmer className="h-[22.5px] w-1/5" />
          </dd>
        </div>
        <div>
          <dt className="font-bold">Budget</dt>
          <dd>
            <Shimmer className="h-[22.5px] w-2/3" />
          </dd>
        </div>
        <div>
          <dt className="font-bold">Revenue</dt>
          <dd>
            <Shimmer className="h-[22.5px] w-2/3" />
          </dd>
        </div>
        <div>
          <dt>Keywords</dt>
          <dd>
            <KeywordsFallback />
          </dd>
        </div>
      </dl>
    </section>
  );
}
