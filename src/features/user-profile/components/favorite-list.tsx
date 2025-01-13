import { IoIosHeartDislike } from "react-icons/io";
import { getFavoriteList } from "../data/get-favorite-list";
import { MovieBackdropCard } from "./movie-backdrop-card";
import { RemovingForm } from "./removing-form";
import { removeFromFavorites } from "../actions/remove-from-favorites";

export async function FavoriteList() {
  const list = await getFavoriteList();

  if (!list || list.length === 0) {
    return (
      <p className="text-green-gradient text-lg">
        You have not marked any movie as favorite yet.
      </p>
    );
  }

  return (
    <ul className="flex flex-wrap gap-4">
      {list.map((item) => (
        <li key={item.movie_id}>
          <RemovingForm
            icon={<IoIosHeartDislike size={18} />}
            movieId={item.movie_id}
            label={"Remove from favorite list"}
            action={removeFromFavorites}
          >
            <MovieBackdropCard
              movie={{
                ...item,
                id: item.movie_id,
              }}
            />
          </RemovingForm>
        </li>
      ))}
    </ul>
  );
}
