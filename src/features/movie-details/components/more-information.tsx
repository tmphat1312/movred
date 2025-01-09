import { Shimmer } from "@/components/ui/shimmer";
import { getMovieDetails } from "../data/get-movie-details";
import { SocialLinks, SocialLinksFallback } from "./social-links";
import { Suspense } from "react";
import { Keywords, KeywordsFallback } from "./keywords";

export async function MoreInformation({ movieId }: { movieId: number }) {
  const { status, budget, revenue, original_language } = (await getMovieDetails(
    {
      movie_id: movieId,
    },
  )) as {
    status: string;
    budget: number;
    revenue: number;
    original_language: string;
  };

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
          <dd>${budget.toLocaleString()}</dd>
        </div>
        <div>
          <dt className="font-bold">Revenue</dt>
          <dd>${revenue.toLocaleString()}</dd>
        </div>
        <div>
          <dt>Keywords</dt>
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
