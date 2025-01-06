import { Section } from "@/components/layouts/section";
import { Suspense } from "react";
import { LatestTrailers, LatestTrailersFallback } from "./latest-trailers";
import { getLatestTrailers } from "../data/get-latest-trailers";

export function LatestTrailersSection() {
  return (
    <div className="bg-layout-bg text-layout-fg">
      <Section>
        <div className="mb-4 flex items-center gap-6">
          <h3 className="text-2xl font-semibold" aria-label="Trending movies">
            Latest Trailers
          </h3>
        </div>
        <Suspense fallback={<LatestTrailersFallback />}>
          <LatestTrailers latestTrailersPromise={getLatestTrailers()} />
        </Suspense>
      </Section>
    </div>
  );
}
