import { FavoriteList } from "@/features/user-profile/components/favorite-list";
import { Greeting } from "@/features/user-profile/components/greeting";
import { RatingList } from "@/features/user-profile/components/rating-list";
import { WatchList } from "@/features/user-profile/components/watch-list";

export default function Profile() {
  return (
    <main>
      <h1 className="sr-only">User activities</h1>
      <Greeting />
      <section className="container py-4">
        <h2 className="text-2xl font-semibold">Watch List</h2>
        <WatchList />
      </section>
      <div className="bg-layout-bg text-layout-fg">
        <section className="container py-4">
          <h2 className="text-2xl font-semibold">Favorite List</h2>
          <FavoriteList />
        </section>
      </div>
      <section className="container py-4">
        <h2 className="text-2xl font-semibold">Rating List</h2>
        <RatingList />
      </section>
    </main>
  );
}
