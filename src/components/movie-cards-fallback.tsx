import { Shimmer } from "./shimmer";
import { Slider, SliderItem } from "./slider";

export function MovieCardsFallback() {
  return (
    <Slider>
      {Array.from({ length: 20 }).map((_, index) => (
        <SliderItem key={index}>
          <Shimmer className="mb-6 h-[225px] w-[150px] rounded-md" />
          <Shimmer className="mb-2 h-[15px] w-[70px] rounded-md" />
          <Shimmer className="h-[40px] w-[150px] rounded-md" />
        </SliderItem>
      ))}
    </Slider>
  );
}
