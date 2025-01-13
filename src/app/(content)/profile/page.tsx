import {
  FavoriteList,
  FavoriteListFallback,
} from "@/features/user-profile/components/favorite-list";
import { Greeting } from "@/features/user-profile/components/greeting";
import {
  RatingList,
  RatingListFallback,
} from "@/features/user-profile/components/rating-list";
import {
  WatchList,
  WatchListFallback,
} from "@/features/user-profile/components/watch-list";
import { Suspense } from "react";

export default function Profile() {
  return (
    <main>
      <h1 className="sr-only">User activities</h1>
      <Greeting />
      <section className="container py-4">
        <h2 className="mb-2 text-2xl font-semibold">Watch List</h2>
        <Suspense fallback={<WatchListFallback />}>
          <WatchList />
        </Suspense>
      </section>
      <div className="bg-layout-bg text-layout-fg">
        <section className="container py-4">
          <h2 className="mb-2 text-2xl font-semibold">Favorite List</h2>
          <Suspense fallback={<FavoriteListFallback />}>
            <FavoriteList />
          </Suspense>
        </section>
      </div>
      <section className="container py-4">
        <h2 className="mb-2 text-2xl font-semibold">Rating List</h2>
        <Suspense fallback={<RatingListFallback />}>
          <RatingList />
        </Suspense>
      </section>
    </main>
  );
}
