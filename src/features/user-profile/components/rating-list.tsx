import { RiStarOffFill } from "react-icons/ri";

import { getRatingList } from "../data/get-rating-list";
import { removeFromRatingList } from "../actions/remove-from-rating-list";
import { MoviePosterCard } from "./move-poster-card";
import { RemovingForm } from "./removing-form";
import { Shimmer } from "@/components/ui/shimmer";

export async function RatingList() {
  const list = await getRatingList();

  if (!list || list.length === 0) {
    return (
      <p className="text-green-gradient text-lg">
        You have not rated any movie yet.
      </p>
    );
  }

  return (
    <ul className="flex flex-wrap items-stretch gap-4">
      {list.map((item) => (
        <li key={item.movie_id}>
          <RemovingForm
            icon={<RiStarOffFill size={18} className="fill-white" />}
            movieId={item.movie_id}
            label={"Remove this rating"}
            action={removeFromRatingList}
          >
            <MoviePosterCard movie={item} />
          </RemovingForm>
        </li>
      ))}
    </ul>
  );
}

export function RatingListFallback() {
  return (
    <ul className="flex flex-wrap items-stretch gap-4">
      {[1, 2, 3, 4, 5].map((index) => (
        <li key={index}>
          <Shimmer className="h-[225px] w-[160px]" />
        </li>
      ))}
    </ul>
  );
}
