import { Slider, SliderItem } from "@/components/slider";
import { Shimmer } from "@/components/ui/shimmer";
import { getLatestTrailers } from "../data/get-latest-trailers";
import { TrailerCard } from "./trailer-card";

export async function LatestTrailers() {
  const latestTrailers = await getLatestTrailers();

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

export function LatestTrailersFallback() {
  return (
    <Slider>
      {Array.from({ length: 20 }).map((_, index) => (
        <SliderItem key={index}>
          <Shimmer className="mb-1.5 h-[170px] w-[300px] rounded-lg opacity-80" />
          <Shimmer className="mx-auto mb-1.5 h-[20px] w-[80px] rounded opacity-80" />
          <Shimmer className="mx-auto mb-1.5 h-[16px] w-[120px] rounded-full opacity-80" />
        </SliderItem>
      ))}
    </Slider>
  );
}
