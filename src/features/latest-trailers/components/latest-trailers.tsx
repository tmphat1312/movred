import { Slider, SliderItem } from "@/components/slider";
import { use } from "react";
import { TrailerCard, TrailerCardProps } from "./trailer-card";

export function LatestTrailers({
  latestTrailersPromise,
}: {
  latestTrailersPromise: Promise<TrailerCardProps[]>;
}) {
  const latestTrailers = use(latestTrailersPromise);

  return (
    <Slider>
      {latestTrailers.map((trailer) => (
        <SliderItem key={trailer.id}>
          <TrailerCard trailer={trailer} />
        </SliderItem>
      ))}
    </Slider>
  );
}
