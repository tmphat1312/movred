import { GoBookmarkSlashFill } from "react-icons/go";

import { removeFromWatchList } from "../actions/remove-from-watch-list";
import { getWatchList } from "../data/get-watch-list";
import { MoviePosterCard } from "./move-poster-card";
import { RemovingForm } from "./removing-form";
import { Shimmer } from "@/components/ui/shimmer";

export async function WatchList() {
  const list = await getWatchList();

  if (!list || list.length === 0) {
    return (
      <p className="text-green-gradient text-lg">
        You have not added any movie to watch list yet.
      </p>
    );
  }

  return (
    <ul className="flex flex-wrap items-stretch gap-4">
      {list.map((item) => (
        <li key={item.movie_id}>
          <RemovingForm
            icon={<GoBookmarkSlashFill size={18} className="fill-white" />}
            movieId={item.movie_id}
            label={"Remove from watch list"}
            action={removeFromWatchList}
          >
            <MoviePosterCard movie={item} />
          </RemovingForm>
        </li>
      ))}
    </ul>
  );
}

export function WatchListFallback() {
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
